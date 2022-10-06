import { createContext, ReactElement, useState, useCallback, useEffect, useContext } from 'react';
import Web3 from 'web3';
import { ContractProvider } from '../ContractProvider';
import { Web3ModalContext } from './Web3ModalProvider';

interface IWeb3Context {
  account: string | null;
  connect: Function | null;
  connected: boolean;
  chainId: number | null;
  disconnect: Function | null;
  web3: Web3 | null;
  switchNetwork: Function;
}

export const Web3Context = createContext<IWeb3Context>({
  account: null,
  connect: null,
  connected: false,
  chainId: null,
  disconnect: null,
  web3: null,
  switchNetwork: () => {},
});

type Web3ProviderPropType = {
  children: ReactElement | ReactElement[];
};

const CHAIN: { [key: number]: object } = {
  1: {
    chainId: '0x1',
    rpcUrls: ['https://mainnet.infura.io/v3/'],
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://etherscan.io'],
  },
  4: {
    chainId: '0x4',
    rpcUrls: ['https://rinkeby.infura.io/v3/'],
    chainName: 'Ethereum Testnet Rinkeby',
    nativeCurrency: {
      name: 'RinkebyETH',
      symbol: 'RinkebyETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
  },
  137: {
    chainId: '0x89',
    rpcUrls: ['https://polygon-rpc.com'],
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://polygonscan.com/'],
  },
  80001: {
    chainId: '0x13881',
    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    chainName: 'Polygon Testnet Mumbai',
    nativeCurrency: {
      name: 'tMATIC',
      symbol: 'tMATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  },
};

const Web3Provider = ({ children }: Web3ProviderPropType) => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const { connect: connectWallet } = useContext(Web3ModalContext);

  const reset = useCallback(() => {
    setAccount(null);
    setWeb3(null);
    setChainId(null);
    setConnected(false);
  }, []);

  const connect = useCallback(async () => {
    const web3 = await connectWallet();
    if (web3 === null) return;

    const provider: any = web3?.currentProvider;

    provider.on('accountsChanged', (accounts: string[]) => {
      if (accounts.length === 0) reset();
      else setAccount(web3.utils.toChecksumAddress(accounts[0]));
    });

    provider.on('chainChanged', (chainId: number) => {
      setChainId(Number(chainId));
    });

    provider.on('disconnect', (code: number, reason: string) => {
      console.log(code, reason);
      reset();
    });

    const accounts = await web3.eth.getAccounts();

    setAccount(web3.utils.toChecksumAddress(accounts[0]));
    setChainId(Number(await web3.eth.getChainId()));
    setWeb3(web3);
    setConnected(true);
  }, [reset, connectWallet]);

  const switchNetwork = useCallback(async (chainId: number) => {
    try {
      if (chainId) {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x' + chainId.toString(16) }],
        });
      }
    } catch (switchError) {
      if ((switchError as any).message.includes('Unrecognized chain ID')) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [CHAIN[chainId]],
        });
      } else console.log(switchError);
    }
  }, []);

  const disconnect = useCallback(async () => {
    if (web3 && web3.currentProvider) {
      const _provider: any = web3.currentProvider;
      if (_provider.close) await _provider.close();
    }
    reset();
  }, [web3, reset]);

  return (
    <Web3Context.Provider value={{ account, connect, disconnect, chainId, connected, web3, switchNetwork }}>
      <ContractProvider>{children}</ContractProvider>
    </Web3Context.Provider>
  );
};

export default Web3Provider;
