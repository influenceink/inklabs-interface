import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { useClients } from './clients';
import { POOL_HIDE } from '../utils/constants';
import { Pool } from '../types';

export const TOP_POOLS = gql`
  query topPools {
    pools(orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
      id
    }
  }
`;

export const POOLS_BULK = (pools: string[]) => {
  let poolString = `[`;
  pools.map((address) => {
    return (poolString += `"${address}",`);
  });
  poolString += ']';
  const queryString =
    `
    query pools {
      pools(where: {id_in: ${poolString}},` +
    ` orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
        id
        feeTier
        liquidity
        sqrtPrice
        tick
        token0 {
            id
            symbol 
            name
            decimals
            derivedETH
        }
        token1 {
            id
            symbol 
            name
            decimals
            derivedETH
        }
        token0Price
        token1Price
        volumeUSD
        txCount
        totalValueLockedToken0
        totalValueLockedToken1
        totalValueLockedUSD
      }
    }
    `;
  return gql(queryString);
};

interface TopPoolsResponse {
  pools: {
    id: string;
  }[];
}

interface PoolFields {
  id: string;
  feeTier: string;
  liquidity: string;
  sqrtPrice: string;
  tick: string;
  token0: {
    id: string;
    symbol: string;
    name: string;
    decimals: string;
    derivedETH: string;
  };
  token1: {
    id: string;
    symbol: string;
    name: string;
    decimals: string;
    derivedETH: string;
  };
  token0Price: string;
  token1Price: string;
  volumeUSD: string;
  txCount: string;
  totalValueLockedToken0: string;
  totalValueLockedToken1: string;
  totalValueLockedUSD: string;
}

interface PoolDataResponse {
  pools: PoolFields[];
}

export function useTopPoolAddresses(): {
  loading: boolean;
  error: boolean;
  addresses: string[] | undefined;
} {
  const { dataClient } = useClients();
  const { loading, error, data } = useQuery<TopPoolsResponse>(TOP_POOLS, {
    client: dataClient,
    fetchPolicy: 'cache-first',
  });

  const formattedData = useMemo(() => {
    if (data) {
      return data.pools
        .map((p) => {
          if (POOL_HIDE.includes(p.id.toLocaleLowerCase())) {
            return undefined;
          }
          return p.id;
        })
        .filter((value) => value !== null && value !== undefined);
    } else {
      return undefined;
    }
  }, [data]);

  return {
    loading: loading,
    error: Boolean(error),
    addresses: formattedData as string[] | undefined,
  };
}

export function usePoolDatas(): Pool[] {
  const { dataClient } = useClients();
  const { addresses: poolAddresses } = useTopPoolAddresses();
  const { loading, error, data } = useQuery<PoolDataResponse>(POOLS_BULK(poolAddresses || []), {
    client: dataClient,
  });

  const formattedData = useMemo(() => {
    return data?.pools
      .filter((token) => !POOL_HIDE.includes(token.id))
      .map((token) => ({ token0: token.token0.id, token1: token.token1.id, fee: token.feeTier }));
  }, [data]);
  return formattedData || [];
}
