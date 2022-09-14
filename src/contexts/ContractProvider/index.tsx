import { createContext, useState, ReactNode, useContext, useEffect, useCallback } from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract as Web3Contract } from 'web3-eth-contract';
import BigNumber from 'bignumber.js';
import { Web3Context } from '../Web3Provider';
import ERC20_ABI from '../../utils/abis/erc20.json';
import INKPURCHASE_ABI from '../../utils/abis/inkpurchase.json';
import QUOTER_ABI from '../../utils/abis/quoter.json';

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
    return new Promise((resolve, reject) => {
      this.contract.methods[method](...params)
        .send({
          ...options,
          from: this.account,
        })
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
  const [contracts, setContracts] = useState<{ [key: string]: Contract }>({});

  const tokenApprove = useCallback(
    async (address: string, amount: BigNumber) => {
      try {
        if (web3 && chainId) {
          return await new Contract({ web3, account, chainId }, ERC20_ABI, address).send(
            'approve',
            null,
            process.env.REACT_APP_INKPURCHASE_CONTRACT || '',
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
        inkpurchase: new Contract(
          { web3, account, chainId },
          INKPURCHASE_ABI,
          process.env.REACT_APP_INKPURCHASE_CONTRACT || ''
        ),
        quoter: new Contract({ web3, account, chainId }, QUOTER_ABI, process.env.REACT_APP_QUOTER_CONTRACT || ''),
      });
    }
  }, [connected, web3, chainId, account]);
  return (
    <ContractContext.Provider value={{ web3, contracts, account, getTokenDecimals, tokenApprove }}>
      {children}
    </ContractContext.Provider>
  );
};
