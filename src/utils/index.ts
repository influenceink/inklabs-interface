import { sha512 } from 'js-sha512';
import { TOP_TOKENS_URI } from './constants';
// import quickTokensList from './quickswap-tokenlist.json';
import axios from 'axios';
import Web3 from 'web3';
// import ethTopTokens from './eth-top-50-tokens.json';
// import polyTopTokens from './poly-top-50-tokens.json';

export const passwordToHash = (password: string) => {
  const bytes = sha512.array(password);
  const hash = btoa(String.fromCharCode.apply(null, bytes));
  return hash;
};

export const getTopTokensList = async (chainId: number) => {
  // if (Number(chainId) === 4) {
  return [
    {
      address: '0x8a1f7023c743E3d2149FfeA0EBcc685af0e8e9b6',
      name: 'USD Coin',
      chainId,
      symbol: 'USDC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      name: 'Wrapped Eth',
      chainId,
      symbol: 'WETH',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    {
      address: '0xbF77b5E9f0195E336690c671c860e3707F60FbEe',
      name: 'Wrapped BTC',
      chainId,
      symbol: 'WBTC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
  ];
  // }
  // const getLogoURI = (address: string, symbol?: string) => {
  //   const token = quickTokensList.find(
  //     (token) =>
  //       Web3.utils.toChecksumAddress(token.address) === Web3.utils.toChecksumAddress(address) ||
  //       token.symbol === symbol ||
  //       token.logoURI.includes(Web3.utils.toChecksumAddress(address))
  //   );
  //   if (token !== undefined) {
  //     return token.logoURI;
  //   } else {
  //     return `https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/${Web3.utils.toChecksumAddress(
  //       address
  //     )}/logo.png`;
  //     // return '';
  //   }
  // };
  // try {
  //   const tokensList = await axios
  //     .post(
  //       TOP_TOKENS_URI[Number(chainId)],
  //       JSON.stringify({
  //         query: `query topPools {
  //   tokens(
  //     first: 50
  //     orderBy: totalValueLockedUSD
  //     orderDirection: desc
  //     subgraphError: allow
  //   ) {
  //     id
  //     __typename
  //   }
  // }`,
  //         variables: {},
  //       })
  //     )
  //     .then((res) => res.data.data.tokens.map((token: any) => token.id));
  //   return await axios
  //     .post(
  //       TOP_TOKENS_URI[Number(chainId)],
  //       JSON.stringify({
  //         query: `query tokens {
  //   tokens(
  //     where: {id_in: ${JSON.stringify(tokensList)}}
  //     orderBy: totalValueLockedUSD
  //     orderDirection: desc
  //     subgraphError: allow
  //   ) {
  //     id
  //     symbol
  //     name
  //     derivedETH
  //     volumeUSD
  //     volume
  //     txCount
  //     totalValueLocked
  //     feesUSD
  //     totalValueLockedUSD
  //     __typename
  //   }
  // }`,
  //         variables: {},
  //       })
  //     )
  //     .then((res) =>
  //       res.data.data.tokens.map((token: any) => ({
  //         address: token.id,
  //         symbol: token.symbol,
  //         name: token.name,
  //         chainId,
  //         logoURI: getLogoURI(token.id, token.symbol),
  //       }))
  //     );
  // } catch (err) {
  //   if (Number(chainId) === 1) {
  //     return ethTopTokens.map((token: any) => ({
  //       address: token.id,
  //       symbol: token.symbol,
  //       name: token.name,
  //       chainId,
  //       logoURI: getLogoURI(token.id, token.symbol),
  //     }));
  //   } else if (Number(chainId) === 137) {
  //     return polyTopTokens.map((token: any) => ({
  //       address: token.id,
  //       symbol: token.symbol,
  //       name: token.name,
  //       chainId,
  //       logoURI: getLogoURI(token.id, token.symbol),
  //     }));
  //   }
  // }
};
