import { createContext, ReactNode, useState, useCallback, useEffect } from 'react';
import { Token } from '../types/Token';
import axios from 'axios';
import { OPTIMISM_TOKENLIST_URL } from '../utils/constants';
import tokens_list from '../utils/tokens_list.json';

interface ITokenListContext {
  tokens: Array<Token>;
  fetchTokensList: Function;
}

export const TokenListContext = createContext<ITokenListContext>({
  tokens: tokens_list.tokens.map((token) => ({
    chainId: token.chainId,
    name: token.name,
    symbol: token.symbol,
    address: token.address,
    logoURL: token.logoURI,
  })),
  fetchTokensList: () => {},
});

export const TokenListProvider = ({ children }: { children: ReactNode }) => {
  const initial_tokens = tokens_list.tokens.map((token) => ({
    chainId: token.chainId,
    name: token.name,
    symbol: token.symbol,
    address: token.address,
    logoURL: token.logoURI,
  }));
  const [tokens, setTokens] = useState<Array<Token>>(initial_tokens);
  const fetchTokensList = useCallback(async () => {
    try {
      const tokenlist = (await axios.get(OPTIMISM_TOKENLIST_URL).then((res) => res.data)).tokens.map((token: any) => ({
        chainId: token.chainId,
        name: token.name,
        symbol: token.symbol,
        address: token.address,
        logoURL: token.logoURI,
      }));
      setTokens(tokenlist);
      return tokenlist;
    } catch (err) {
      return tokens;
    }
  }, [tokens]);
  useEffect(() => {
    fetchTokensList();
  }, [fetchTokensList]);
  return <TokenListContext.Provider value={{ tokens, fetchTokensList }}>{children}</TokenListContext.Provider>;
};
