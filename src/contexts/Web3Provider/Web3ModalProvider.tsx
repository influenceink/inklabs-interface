import Web3Modal from 'web3modal';
import { createContext, useState, useCallback, ReactNode } from 'react';
import Web3 from 'web3';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnect from '@walletconnect/web3-provider';

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: 'Web 3 Modal Demo',
      infuraId: process.env.REACT_APP_INFURA_KEY || '',
    },
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: process.env.REACT_APP_INFURA_KEY || '',
    },
  },
};

const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
  theme: 'dark',
});

export const Web3ModalContext = createContext<{ connect: Function }>({
  connect: () => {},
});

export const Web3ModalProvider = ({ children }: { children: ReactNode }) => {
  const connect = useCallback(async () => {
    try {
      web3Modal.clearCachedProvider();
      const provider = await web3Modal.connect();
      return new Web3(provider);
    } catch (err) {
      return null;
    }
  }, []);
  return <Web3ModalContext.Provider value={{ connect }}>{children}</Web3ModalContext.Provider>;
};
