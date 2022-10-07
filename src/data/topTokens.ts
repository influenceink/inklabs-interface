import { useQuery, gql, ApolloClient, NormalizedCacheObject, InMemoryCache } from '@apollo/client';
import { useMemo, useContext, useState, useEffect } from 'react';
import { Web3Context } from '../contexts';
import { TOKEN_HIDE, TESTNEXT_TOKENSLIST } from '../utils/constants';
import { useClients } from './clients';

export const TOP_TOKENS = gql`
  query topPools {
    tokens(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
      id
    }
  }
`;

export const TOKENS_BULK = (tokens: string[]) => {
  let tokenString = `[`;
  tokens.map((address) => {
    return (tokenString += `"${address}",`);
  });
  tokenString += ']';
  const queryString =
    `
    query tokens {
      tokens(where: {id_in: ${tokenString}},` +
    ` orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
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
      }
    }
    `;
  return gql(queryString);
};

interface TopTokensResponse {
  tokens: {
    id: string;
  }[];
}

export interface TokenFields {
  id: string;
  symbol: string;
  name: string;
  derivedETH: string;
  volumeUSD: string;
  volume: string;
  feesUSD: string;
  txCount: string;
  totalValueLocked: string;
  totalValueLockedUSD: string;
}

interface TokenDataResponse {
  tokens: TokenFields[];
  bundles: {
    ethPriceUSD: string;
  }[];
}

export const useTopTokenAddresses = (): { loading: boolean; error: boolean; addresses: string[] | undefined } => {
  const { dataClient } = useClients();
  const { loading, error, data } = useQuery<TopTokensResponse>(TOP_TOKENS, { client: dataClient });

  const formattedData = useMemo(() => {
    if (data) {
      return data.tokens.map((t) => t.id);
    } else {
      return undefined;
    }
  }, [data]);
  return {
    loading,
    error: Boolean(error),
    addresses: formattedData,
  };
};

export const useTopTokenDatas = () => {
  // const poolDatas = usePoolDatas();

  const { dataClient } = useClients();
  const { chainId } = useContext(Web3Context);
  const { addresses: tokenAddresses } = useTopTokenAddresses();

  const { loading, error, data } = useQuery<TokenDataResponse>(TOKENS_BULK(tokenAddresses || []), {
    client: dataClient,
  });

  const formattedData = useMemo(() => {
    if (chainId === 4 || chainId === 80001) {
      return TESTNEXT_TOKENSLIST[chainId];
    }

    // const swap = new Swap(tokenAddresses || [], poolDatas);
    // const USDCaddress = data?.tokens.find((token) => token.symbol === 'USDC')?.id;

    let usdcIndex: number = 0;
    if (data?.tokens && data?.tokens.length > 0 && data?.tokens[0].symbol !== 'USDC')
      usdcIndex = data?.tokens.findIndex((token) => token.symbol === 'USDC') as number;
    return data?.tokens
      .filter(
        (token, index) =>
          !TOKEN_HIDE.includes(token.id) &&
          index >= usdcIndex /* && swap.path(token.id, USDCaddress || '').path !== ''*/
      )
      .map((token) => ({ id: token.id, name: token.name, symbol: token.symbol }));
  }, [data, chainId]);
  return { loading, error, tokenDatas: formattedData };
};
