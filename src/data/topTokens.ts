import { useQuery, gql, ApolloClient, NormalizedCacheObject, InMemoryCache } from '@apollo/client';
import { useMemo, useContext, useState, useEffect } from 'react';
import { Web3Context } from '../contexts';
import { TOKEN_HIDE } from '../utils/constants';

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

interface TokenFields {
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

const ethClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
  cache: new InMemoryCache({
    typePolicies: {
      Token: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
      Pool: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
    },
  }),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export const ethBlockClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

const polygonClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon',
  cache: new InMemoryCache({
    typePolicies: {
      Token: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
      Pool: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
    },
  }),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export const polygonBlockClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/polygon-blocks',
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'all',
    },
  },
});

export const useClients = () => {
  const { chainId } = useContext(Web3Context);
  const [dataClient, setDataClient] = useState<ApolloClient<NormalizedCacheObject>>(ethClient);
  const [blockClient, setBlockClient] = useState<ApolloClient<NormalizedCacheObject>>(ethBlockClient);

  useEffect(() => {
    if (Number(chainId) === 137) {
      setDataClient(polygonClient);
      setBlockClient(ethBlockClient);
    }
  }, [chainId]);

  return { dataClient, blockClient };
};

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
  const { dataClient } = useClients();
  const { addresses: tokenAddresses } = useTopTokenAddresses();
  const { loading, error, data } = useQuery<TokenDataResponse>(TOKENS_BULK(tokenAddresses || []), {
    client: dataClient,
  });

  const formattedData = useMemo(() => data?.tokens.filter((token) => !TOKEN_HIDE.includes(token.id)), [data]);
  return { loading, error, tokenDatas: formattedData };
};
