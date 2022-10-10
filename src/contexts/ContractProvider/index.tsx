import { createContext, useState, ReactNode, useContext, useEffect, useCallback } from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract as Web3Contract } from 'web3-eth-contract';
import { Web3Context } from '../Web3Provider';
import ERC20_ABI from '../../utils/abis/erc20.json';
import INKPURCHASE_ABI from '../../utils/abis/inkpurchase.json';
import { INKPURCHASE_ADDRESSES } from '../../utils/constants';

export type ContractOptionType = {
  web3: Web3;
  chainId: number;
  account: string | null;
};

class Contract {
  web3: Web3;
  chainId: number;
  account: string | null;
  contract: Web3Contract;
  events: { [key: string]: boolean };

  constructor(options: ContractOptionType, _abi: any, _address: string) {
    this.web3 = options.web3;
    this.chainId = options.chainId;
    this.account = options.account;

    this.contract = new this.web3.eth.Contract(_abi as AbiItem[], _address);

    this.events = {};
  }

  send(method: string, options: object | null, ...params: any[]) {
    const _options: any = {
      ...options,
      from: this.account,
    };
    if (this.chainId === 137) {
      _options['maxPriorityFeePerGas'] = 30000000000;
      _options['maxFee'] = 35000000000;
      _options['chainId'] = 137;
    }
    return new Promise((resolve, reject) => {
      this.contract.methods[method](...params)
        .send(_options)
        .then(resolve)
        .catch(reject);
    });
  }

  call(method: string, ...params: any[]) {
    return new Promise((resolve, reject) => {
      this.contract.methods[method](...params)
        .call({ from: this.account })
        .then(resolve)
        .catch(reject);
    });
  }

  on(event: string, callback: Function, onerr?: Function) {
    if (this.events[event]) return;

    this.contract.events[event]((err: any, res: any) => {
      if (err == null) {
        callback(res.returnValues);
      } else {
        if (onerr !== undefined) onerr(err);
        else console.log(err);
      }
    });
  }
}

interface IContractContext {
  web3: Web3 | null;
  contracts: { [key: string]: Contract } | null;
  account: string | null;
  getTokenDecimals: Function;
  tokenApprove: Function;
}

export const ContractContext = createContext<IContractContext>({
  web3: null,
  contracts: {},
  account: null,
  getTokenDecimals: () => {},
  tokenApprove: () => {},
});

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const { web3, account, chainId, connected } = useContext(Web3Context);
  const [contracts, setContracts] = useState<{ [key: string]: Contract } | null>(null);

  const tokenApprove = useCallback(
    async (address: string, amount: any) => {
      try {
        if (web3 && chainId) {
          return await new Contract({ web3, account, chainId }, ERC20_ABI, address).send(
            'approve',
            null,
            INKPURCHASE_ADDRESSES[chainId],
            amount
          );
        } else return false;
      } catch (err) {
        return false;
      }
    },
    [web3, chainId, account]
  );

  const getTokenDecimals = useCallback(
    async (address: string) => {
      if (web3 && chainId) {
        return await new Contract({ web3, account, chainId }, ERC20_ABI, address).call('decimals');
      }
      return null;
    },
    [web3, chainId, account]
  );

  useEffect(() => {
    if (connected && web3 && chainId) {
      setContracts({
        inkpurchase: new Contract({ web3, account, chainId }, INKPURCHASE_ABI, INKPURCHASE_ADDRESSES[chainId]),
      });
    }
  }, [connected, web3, chainId, account]);
  return (
    <ContractContext.Provider value={{ web3, contracts, account, getTokenDecimals, tokenApprove }}>
      {children}
    </ContractContext.Provider>
  );
};
