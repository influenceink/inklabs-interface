import { createContext, ReactNode, useState, useCallback, useEffect } from 'react';
import { Token } from '../types/Token';
import axios from 'axios';
import { ETHEREUM_TOKENS_URI, POLYGON_TOKENS_URI } from '../utils/constants';
import { INITIAL_TOKENS } from '../utils/constants';

interface ITokenListContext {
  tokens: { [key: number]: Array<Token> };
  fetchTokensList: Function;
}

export const TokenListContext = createContext<ITokenListContext>({
  tokens: INITIAL_TOKENS,
  fetchTokensList: () => {},
});

export const TokenListProvider = ({ children }: { children: ReactNode }) => {
  const [tokens, setTokens] = useState<{ [key: number]: Array<Token> }>(INITIAL_TOKENS);
  const fetchTokensList = useCallback(async () => {
    try {
      return tokens;
    } catch (err) {
      console.log(err);
      return tokens;
    }
  }, [tokens]);
  useEffect(() => {
    fetchTokensList();
  }, [fetchTokensList]);
  return <TokenListContext.Provider value={{ tokens, fetchTokensList }}>{children}</TokenListContext.Provider>;
};
