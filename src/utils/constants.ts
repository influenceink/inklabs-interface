import one from '../assets/img/1.png';
import two from '../assets/img/2.png';
import three from '../assets/img/3.png';
import four from '../assets/img/4.png';
import five from '../assets/img/5.png';
import six from '../assets/img/6.png';
import seven from '../assets/img/7.png';
import eight from '../assets/img/8.png';
import nine from '../assets/img/9.png';
import zero from '../assets/img/0.png';
import minus from '../assets/img/minus.png';
import cross from '../assets/img/cross.png';
import { Token } from '../types/Token';

// APP TEXT
export const APP_TITLE = 'Influence INK';
export const APP_DESCRIPTION = 'React, TypeScript, Material-UI.';
// PAGES TITLE
export const PAGE_TITLE_ENTER = 'Enter';
export const PAGE_TITLE_HOME = 'Home';
export const PAGE_TITLE_MINDMAP = 'Mindmap';
export const PAGE_TITLE_PROFILE = 'Profile';
export const PAGE_TITLE_VISION = 'Vision';
export const PAGE_TITLE_PLATFORM = 'Platform';
export const PAGE_TITLE_CONVERGENCE = 'Convergence';
export const PAGE_TITLE_INFLUENCE = 'World of Influence';
export const PAGE_TITLE_GAMES = 'Games';
export const PAGE_TITLE_COIN = 'INK Coin';
export const PAGE_TITLE_FAQ = 'FAQ';
// export const PAGE_TITLE_HOME = 'Home';
// APP THEME
export const DARK_MODE_THEME = 'dark';
export const LIGHT_MODE_THEME = 'light';

export const QUOTER_CONTRACT_ADDRESS = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6';

export const TOP_TOKENS_URI: { [key: number]: string } = {
  1: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
  137: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon',
};

export const KEYS = [
  {
    value: '1',
    image: one,
  },
  {
    value: '2',
    image: two,
  },
  {
    value: '3',
    image: three,
  },
  {
    value: '0',
    image: zero,
  },
  {
    value: '4',
    image: four,
  },
  {
    value: '5',
    image: five,
  },
  {
    value: '6',
    image: six,
  },
  {
    value: '-',
    image: minus,
  },
  {
    value: '7',
    image: seven,
  },
  {
    value: '8',
    image: eight,
  },
  {
    value: '9',
    image: nine,
  },
  {
    value: 'backspace',
    image: cross,
  },
];

export const FAQS = [
  {
    question: 'What is the INK token?',
    answer:
      'INK is an ERC-20 compliant utility token for INK Games and our suite of on-platform games and projects. INK will power many of the game and project experiences offered on the World of Influence platform, while token holders will enjoy enhanced platform experiences and distinct perks. Find out more about our token and platform: INK Games Litepaper.',
  },
  {
    question: 'What cryptocurrencies are easiest or best to purchase INK with?',
    answer:
      'Buyers can use any token available on Uniswap to purchase INK. The more liquid assets, like USDC or similar stablecoins, may have more favorable rates and spreads.',
  },
  {
    question: 'Will I have to convert anything using Uniswap (or another exchange protocol)?',
    answer:
      'To purchase INK, simply connect a compatible wallet (like MetaMask or TrustWallet) and then purchase INK with your favored token. Conversion happens behind the scenes – no need to navigate away from your wallet app. Your INK will be deposited into the connected wallet.',
  },
  {
    question: 'When does the 18 month vestment start?',
    answer:
      'The vesting period countdown begins on the day the tokens are generated, and the tokens vest ratably daily for 18 months.',
  },
  {
    question: 'Does INK provide an ownership stake in your projects?',
    answer:
      'INK tokens do not represent equity, debt, a claim on profits, or dividends and does not constitute a financial instrument for ownership of any business or organization. INK is a utility token that offers access to certain services, features, and capabilities within our ecosystem. Value accrued to the token is by virtue of users’ demand to use INK for World of Influence activities.',
  },
  {
    question: 'Can you help me set up a wallet to receive my tokens?',
    answer:
      'While we are unable to provide individual setup support, simple instructions are available online. Here’s one for setting up your own MetaMask wallet.',
  },
  {
    question: 'Do you have an INK purchase minimum in place?',
    answer:
      'You may purchase tokens using any ERC-20 compatible cryptocurrencies available on the Polygon Network on our website at www.inktoken.com. A minimum purchase value of $5,000 USD is required. We can support wire purchases with a $100,000 USD minimum. Please contact support@inkgames.com for instructions.',
  },
  {
    question: 'Do third party developers have to use INK to build on the World of Influence?',
    answer:
      'To keep platform TAM (total addressable market) as large as possible, we do not require in-game token integration. Developers can construct their game ecosystems to utilize INK – and may enjoy a growth advantage due to staking functionality, in-game token mechanics, and expanded earning capabilities.%%However, because we do not require it, a variety of games can immediately participate with the World of Influence and our Payment & Tracking growth engine without having to change their economy.',
  },
];

export const USDC_ADDRESS: { [key: number]: string } = {
  1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  4: '0x8a1f7023c743E3d2149FfeA0EBcc685af0e8e9b6',
  137: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
};

export const ROADMAP = [
  {
    status: 'COMPLETE',
    lists: [
      'Payment & tracking engine build out',
      'INK white paper',
      'INK District NFTs private pre-sale',
      '$INK (coin) private offering',
      'Prize Kingdoms (P2E) technical launch',
    ],
  },
  {
    status: 'IN PROGRESS',
    lists: [
      'INK Platform Dashboard + INK Metacard',
      'INK Districts public sale',
      '$INK public offering',
      '$INK staking and swapping functionality',
      'INK Crypto Club (alpha)',
      'Prize Kingdoms (P2E) worldwide launch',
      'In-house NFT collections development',
      'NFT project partnerships',
    ],
  },
  {
    status: 'PLANNED',
    lists: [
      'INK Districts functionality expansion',
      'New game project (TBA)',
      'Advanced platform analytics & gamification',
    ],
  },
];

export const TOKENSLIST: { [key: number]: Array<any> } = {
  4: [
    {
      address: '0x8a1f7023c743E3d2149FfeA0EBcc685af0e8e9b6',
      name: 'USD Coin',
      chainId: 4,
      symbol: 'USDC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      name: 'Wrapped Eth',
      chainId: 4,
      symbol: 'WETH',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    {
      address: '0xbF77b5E9f0195E336690c671c860e3707F60FbEe',
      name: 'Wrapped BTC',
      chainId: 4,
      symbol: 'WBTC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
  ],
  80001: [
    {
      address: '0xBDEEA7A064934B0cD51BC4564E7c40cda4c669A6',
      name: 'USD Coin',
      chainId: 80001,
      symbol: 'USDC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      address: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      name: 'MATIC',
      chainId: 80001,
      symbol: 'MATIC',
      logoURI: 'https://app.uniswap.org/static/media/matic-token-icon.da7b877d.svg',
    },
    {
      address: '0xd30A75dBBf8A0Cfa8294DF3F4089a9d9D464fff3',
      name: 'Wrapped BTC',
      chainId: 80001,
      symbol: 'WBTC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
  ],
};
