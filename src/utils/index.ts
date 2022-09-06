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

export const getState = (zipString: string) => {
  /* Ensure param is a string to prevent unpredictable parsing results */
  if (typeof zipString !== 'string') {
    console.log('Must pass the zipcode as a string.');
    return;
  }

  /* Ensure we have exactly 5 characters to parse */
  if (zipString.length !== 5) {
    console.log('Must pass a 5-digit zipcode.');
    return;
  }

  /* Ensure we don't parse strings starting with 0 as octal values */
  const zipcode = parseInt(zipString, 10);

  let st;
  let state;

  /* Code cases alphabetized by state */
  if (zipcode >= 35000 && zipcode <= 36999) {
    st = 'AL';
    state = 'Alabama';
  } else if (zipcode >= 99500 && zipcode <= 99999) {
    st = 'AK';
    state = 'Alaska';
  } else if (zipcode >= 85000 && zipcode <= 86999) {
    st = 'AZ';
    state = 'Arizona';
  } else if (zipcode >= 71600 && zipcode <= 72999) {
    st = 'AR';
    state = 'Arkansas';
  } else if (zipcode >= 90000 && zipcode <= 96699) {
    st = 'CA';
    state = 'California';
  } else if (zipcode >= 80000 && zipcode <= 81999) {
    st = 'CO';
    state = 'Colorado';
  } else if ((zipcode >= 6000 && zipcode <= 6389) || (zipcode >= 6391 && zipcode <= 6999)) {
    st = 'CT';
    state = 'Connecticut';
  } else if (zipcode >= 19700 && zipcode <= 19999) {
    st = 'DE';
    state = 'Delaware';
  } else if (zipcode >= 32000 && zipcode <= 34999) {
    st = 'FL';
    state = 'Florida';
  } else if ((zipcode >= 30000 && zipcode <= 31999) || (zipcode >= 39800 && zipcode <= 39999)) {
    st = 'GA';
    state = 'Georgia';
  } else if (zipcode >= 96700 && zipcode <= 96999) {
    st = 'HI';
    state = 'Hawaii';
  } else if (zipcode >= 83200 && zipcode <= 83999) {
    st = 'ID';
    state = 'Idaho';
  } else if (zipcode >= 60000 && zipcode <= 62999) {
    st = 'IL';
    state = 'Illinois';
  } else if (zipcode >= 46000 && zipcode <= 47999) {
    st = 'IN';
    state = 'Indiana';
  } else if (zipcode >= 50000 && zipcode <= 52999) {
    st = 'IA';
    state = 'Iowa';
  } else if (zipcode >= 66000 && zipcode <= 67999) {
    st = 'KS';
    state = 'Kansas';
  } else if (zipcode >= 40000 && zipcode <= 42999) {
    st = 'KY';
    state = 'Kentucky';
  } else if (zipcode >= 70000 && zipcode <= 71599) {
    st = 'LA';
    state = 'Louisiana';
  } else if (zipcode >= 3900 && zipcode <= 4999) {
    st = 'ME';
    state = 'Maine';
  } else if (zipcode >= 20600 && zipcode <= 21999) {
    st = 'MD';
    state = 'Maryland';
  } else if ((zipcode >= 1000 && zipcode <= 2799) || zipcode == 5501 || zipcode == 5544) {
    st = 'MA';
    state = 'Massachusetts';
  } else if (zipcode >= 48000 && zipcode <= 49999) {
    st = 'MI';
    state = 'Michigan';
  } else if (zipcode >= 55000 && zipcode <= 56899) {
    st = 'MN';
    state = 'Minnesota';
  } else if (zipcode >= 38600 && zipcode <= 39999) {
    st = 'MS';
    state = 'Mississippi';
  } else if (zipcode >= 63000 && zipcode <= 65999) {
    st = 'MO';
    state = 'Missouri';
  } else if (zipcode >= 59000 && zipcode <= 59999) {
    st = 'MT';
    state = 'Montana';
  } else if (zipcode >= 27000 && zipcode <= 28999) {
    st = 'NC';
    state = 'North Carolina';
  } else if (zipcode >= 58000 && zipcode <= 58999) {
    st = 'ND';
    state = 'North Dakota';
  } else if (zipcode >= 68000 && zipcode <= 69999) {
    st = 'NE';
    state = 'Nebraska';
  } else if (zipcode >= 88900 && zipcode <= 89999) {
    st = 'NV';
    state = 'Nevada';
  } else if (zipcode >= 3000 && zipcode <= 3899) {
    st = 'NH';
    state = 'New Hampshire';
  } else if (zipcode >= 7000 && zipcode <= 8999) {
    st = 'NJ';
    state = 'New Jersey';
  } else if (zipcode >= 87000 && zipcode <= 88499) {
    st = 'NM';
    state = 'New Mexico';
  } else if ((zipcode >= 10000 && zipcode <= 14999) || zipcode == 6390 || zipcode == 501 || zipcode == 544) {
    st = 'NY';
    state = 'New York';
  } else if (zipcode >= 43000 && zipcode <= 45999) {
    st = 'OH';
    state = 'Ohio';
  } else if ((zipcode >= 73000 && zipcode <= 73199) || (zipcode >= 73400 && zipcode <= 74999)) {
    st = 'OK';
    state = 'Oklahoma';
  } else if (zipcode >= 97000 && zipcode <= 97999) {
    st = 'OR';
    state = 'Oregon';
  } else if (zipcode >= 15000 && zipcode <= 19699) {
    st = 'PA';
    state = 'Pennsylvania';
  } else if (zipcode >= 300 && zipcode <= 999) {
    st = 'PR';
    state = 'Puerto Rico';
  } else if (zipcode >= 2800 && zipcode <= 2999) {
    st = 'RI';
    state = 'Rhode Island';
  } else if (zipcode >= 29000 && zipcode <= 29999) {
    st = 'SC';
    state = 'South Carolina';
  } else if (zipcode >= 57000 && zipcode <= 57999) {
    st = 'SD';
    state = 'South Dakota';
  } else if (zipcode >= 37000 && zipcode <= 38599) {
    st = 'TN';
    state = 'Tennessee';
  } else if (
    (zipcode >= 75000 && zipcode <= 79999) ||
    (zipcode >= 73301 && zipcode <= 73399) ||
    (zipcode >= 88500 && zipcode <= 88599)
  ) {
    st = 'TX';
    state = 'Texas';
  } else if (zipcode >= 84000 && zipcode <= 84999) {
    st = 'UT';
    state = 'Utah';
  } else if (zipcode >= 5000 && zipcode <= 5999) {
    st = 'VT';
    state = 'Vermont';
  } else if ((zipcode >= 20100 && zipcode <= 20199) || (zipcode >= 22000 && zipcode <= 24699) || zipcode == 20598) {
    st = 'VA';
    state = 'Virginia';
  } else if (
    (zipcode >= 20000 && zipcode <= 20099) ||
    (zipcode >= 20200 && zipcode <= 20599) ||
    (zipcode >= 56900 && zipcode <= 56999)
  ) {
    st = 'DC';
    state = 'Washington DC';
  } else if (zipcode >= 98000 && zipcode <= 99499) {
    st = 'WA';
    state = 'Washington';
  } else if (zipcode >= 24700 && zipcode <= 26999) {
    st = 'WV';
    state = 'West Virginia';
  } else if (zipcode >= 53000 && zipcode <= 54999) {
    st = 'WI';
    state = 'Wisconsin';
  } else if (zipcode >= 82000 && zipcode <= 83199) {
    st = 'WY';
    state = 'Wyoming';
  } else {
    st = 'none';
    state = 'none';
    console.log('No state found matching', zipcode);
  }

  return st;
};
