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
      var tokensQuery = JSON.stringify({
        query: `query topPools {
        tokens(
          first: 50
          orderBy: totalValueLockedUSD
          orderDirection: desc
          subgraphError: allow
        ) {
          id
          __typename
        }
      }`,
        variables: {},
      });
      var tokensId = await axios
        .post(ETHEREUM_TOKENS_URI, tokensQuery, { headers: { 'Content-Type': 'application/json' } })
        .then((res) => res.data.data.tokens.map((token: any) => token.id));
      var tokenInfosQuery = JSON.stringify({
        query: `query tokens {
          tokens(
            where: {id_in: ${JSON.stringify(tokensId)}}
            orderBy: totalValueLockedUSD
            orderDirection: desc
            subgraphError: allow
          ) {
            id
            symbol
            name
            derivedETH
            volumeUSD
            volume
            txCount
            totalValueLocked
            feesUSD
            totalValueLockedUSD
            __typename
          }
        }`,
        variables: {},
      });
      const ethTokens = await axios
        .post(ETHEREUM_TOKENS_URI, tokenInfosQuery, { headers: { 'Content-Type': 'application/json' } })
        .then((res) =>
          res.data.data.tokens.map((token: any) => ({
            name: token.name,
            symbol: token.symbol,
            address: token.id,
            chainId: 1,
          }))
        );
      tokensId = await axios
        .post(POLYGON_TOKENS_URI, tokensQuery, { headers: { 'Content-Type': 'application/json' } })
        .then((res) => res.data.data.tokens.map((token: any) => token.id));
      tokenInfosQuery = JSON.stringify({
        query: `query tokens {
          tokens(
              where: {
                  id_in: ${JSON.stringify(tokensId)}
                  }
              orderBy: totalValueLockedUSD
              orderDirection: desc
              subgraphError: allow
              )
          {
              id    symbol    name    derivedETH    volumeUSD    volume    txCount    totalValueLocked    feesUSD    totalValueLockedUSD    __typename
          }
      }`,
        variables: {},
      });
      const polyTokens = await axios
        .post('POLYGON_TOKENS_URI', tokenInfosQuery, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) =>
          res.data.data.tokens.map((token: any) => ({
            name: token.name,
            symbol: token.symbol,
            address: token.id,
            chainId: 1,
          }))
        );

      console.log(ethTokens, polyTokens);
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
