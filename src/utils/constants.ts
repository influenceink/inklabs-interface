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

// APP TEXT
export const APP_TITLE = 'Influence INK';
export const APP_DESCRIPTION = '';
// PAGES TITLE
export const PAGE_TITLE_ENTER = 'Enter';
export const PAGE_TITLE_HOME = 'Home';
export const PAGE_TITLE_MINDMAP = 'Mindmap';
export const PAGE_TITLE_PROFILE = 'Profile';
export const PAGE_TITLE_VISION = 'Vision';
export const PAGE_TITLE_PLATFORM = 'Platform';
export const PAGE_TITLE_CONVERGENCE = 'Convergence';
export const PAGE_TITLE_INFLUENCE = 'World of Influence';
export const PAGE_TITLE_PRODUCTS = 'Products';
export const PAGE_TITLE_COIN = 'INK Coin';
export const PAGE_TITLE_FAQ = 'FAQ';
export const PAGE_TITLE_TERMS = 'TERMS OF SERVICE';
export const PAGE_TITLE_POLICY = 'PRIVACY POLICY';
// export const PAGE_TITLE_HOME = 'Home';
// APP THEME
export const DARK_MODE_THEME = 'dark';
export const LIGHT_MODE_THEME = 'light';

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
      'INK is an ERC-20 compliant utility token for INK Games and our suite of on-platform games and projects. INK will power many of the game and project experiences offered on the World of Influence platform, while token holders will enjoy enhanced platform experiences and distinct perks. Find out more about our token and platform: <a href="https://ink-games.gitbook.io/ink-games-litepaper/y1oSbwlz4PSu8kIHeuHp/" target="_blank" style="color: white;">INK Games Litepaper</a>.',
  },
  {
    question: 'What cryptocurrencies are easiest or best to purchase INK with?',
    answer:
      'Buyers can use any token available on Uniswap to purchase INK. The more liquid assets, like USDC or similar stablecoins, may have more favorable rates and spreads.',
  },
  {
    question: 'Will I have to convert anything using Uniswap (or another exchange protocol)?',
    answer:
      'To reserve or purchase INK, simply connect a compatible wallet (like MetaMask or TrustWallet) and then purchase with your favored token. When the INK tokens are generated, buyers can claim them via a link provided on the web application or user profile.',
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
      'While we are unable to provide individual setup support, simple instructions are available online. Here’s one for setting up your own <a href="https://www.coindesk.com/learn/how-to-set-up-a-metamask-wallet/" target="_blank" style="color: white">MetaMask wallet</a>.',
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

export const RPC_URLS = {
  1: process.env.REACT_APP_ETHEREUM_RPC || 'https://eth-mainnet.g.alchemy.com/v2/zcNIdlPU5Vn-2U0uQpfi0AZf11F4rrV5',
  4: process.env.REACT_APP_RINKEBY_RPC || 'https://eth-rinkeby.alchemyapi.io/v2/8OgV3avdpzXyJujytN1QmXG5TLqqGCyG', // For Rinkeby Ethereum Testnet
  137: process.env.REACT_APP_POLYGON || 'https://polygon-mainnet.g.alchemy.com/v2/KPAeLTP7DM-wzAcPyJPfXgr4ZwniE6YH',
  80001: process.env.REACT_APP_MUMBAI || 'https://polygon-mumbai.g.alchemy.com/v2/r4Crw3pW-4jfWKjon-ijnD0AjlFJGLQj', // For Mumbai Polygon Testnet
};

export const ROADMAP = [
  {
    status: 'COMPLETE',
    lists: [
      'Payment & tracking engine build out',
      'INK white paper',
      'INK ZIPs NFTs private pre-sale',
      'INK token private offering',
      'Prize Kingdoms (P2E) soft launch',
    ],
  },
  {
    status: 'IN PROGRESS',
    lists: [
      'INK Platform Dashboard + INK Metacard',
      'INK token public offering',
      'INK token staking and swapping functionality',
      'INK Crypto Club (alpha)',
      'Prize Kingdoms (P2E) worldwide launch',
      'In-house NFT collections development',
      'NFT project partnerships',
    ],
  },
  {
    status: 'PLANNED',
    lists: ['INK ZIPs functionality expansion', 'New game project (TBA)', 'Advanced platform analytics & gamification'],
  },
];

export const TOKENS_LIST: { [key: number]: Array<any> } = {
  1: [
    {
      id: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      id: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      name: 'ETH',
      symbol: 'ETH',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    {
      id: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
      name: 'MATIC Token',
      symbol: 'MATIC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
    },
    {
      id: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
    {
      id: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      name: 'Tether USD',
      symbol: 'USDT',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    },
    {
      id: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    },
    {
      id: '0x0000000000085d4780B73119b644AE5ecd22b376',
      name: 'TrueUSD',
      symbol: 'TUSD',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x0000000000085d4780B73119b644AE5ecd22b376/logo.png',
    },
    {
      id: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
      name: 'Frax',
      symbol: 'FRAX',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png',
    },
    {
      id: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
      name: 'Binance USD',
      symbol: 'BUSD',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png',
    },
    {
      id: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      name: 'Uniswap',
      symbol: 'UNI',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
    },
    {
      id: '0xD533a949740bb3306d119CC777fa900bA034cd52',
      name: 'Curve DAO Token',
      symbol: 'CRV',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png',
    },
    {
      id: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      name: 'ChainLink Token',
      symbol: 'LINK',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    },
    {
      id: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
      name: 'HEX',
      symbol: 'HEX',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png',
    },
    {
      id: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
      name: 'SHIBA INU',
      symbol: 'SHIB',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE/logo.png',
    },
    {
      id: '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
      name: 'ApeCoin',
      symbol: 'APE',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x4d224452801ACEd8B2F0aebE155379bb5D594381/logo.png',
    },
    {
      id: '0x5f98805a4e8be255a32880fdec7f6728c6568ba0',
      name: 'Liquity USD',
      symbol: 'LUSD',
      logoURI: 'https://assets.coingecko.com/coins/images/14666/small/Group_3.png?1617631327',
    },
    {
      id: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
      name: 'Maker',
      symbol: 'MKR',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    },
    {
      id: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
      name: 'Gemini Dollar',
      symbol: 'GUSD',
      logoURI: 'https://assets.coingecko.com/coins/images/5992/small/gemini-dollar-gusd.png?1536745278',
    },
    {
      id: '0x6123B0049F904d730dB3C36a31167D9d4121fA6B',
      name: 'Ribbon Finance',
      symbol: 'RBN',
      logoURI: 'https://assets.coingecko.com/coins/images/15823/small/RBN_64x64.png?1633529723',
    },
    {
      id: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
      name: 'Synth sUSD',
      symbol: 'sUSD',
      logoURI: 'https://assets.coingecko.com/coins/images/5013/small/sUSD.png?1616150765',
    },
    {
      id: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
      name: 'Lido DAO',
      symbol: 'LDO',
      logoURI: 'https://assets.coingecko.com/coins/images/13573/small/Lido_DAO.png?1609873644',
    },
    {
      id: '0xba5bde662c17e2adff1075610382b9b691296350',
      name: 'SuperRare',
      symbol: 'RARE',
      logoURI: 'https://assets.coingecko.com/coins/images/17753/small/RARE.jpg?1629220534',
    },
    {
      id: '0x1a7e4e63778b4f12a199c062f3efdd288afcbce8',
      name: 'agEUR',
      symbol: 'agEUR',
      logoURI: 'https://assets.coingecko.com/coins/images/19479/small/agEUR.png?1635283566',
    },
    {
      id: '0x1abaea1f7c830bd89acc67ec4af516284b1bc33c',
      name: 'Euro Coin',
      symbol: 'EUROC',
      logoURI: 'https://assets.coingecko.com/coins/images/26045/small/euro-coin.png?1655394420',
    },
  ],
  137: [
    {
      id: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      id: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      name: 'MATIC',
      symbol: 'MATIC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
    },
    {
      id: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      name: 'Wrapped ETH',
      symbol: 'WETH',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    {
      id: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
    {
      id: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
      name: 'Tether USD',
      symbol: 'USDT',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    },
    {
      id: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    },
    {
      id: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
      name: 'Frax',
      symbol: 'FRAX',
      logoURI: 'https://assets.coingecko.com/coins/images/13422/small/frax_logo.png?1608476506',
    },
    {
      id: '0xb33eaad8d922b1083446dc23f610c2567fb5180f',
      name: 'Uniswap',
      symbol: 'UNI',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
    },
    {
      id: '0x172370d5cd63279efa6d502dab29171933a610af',
      name: 'Curve DAO Token',
      symbol: 'CRV',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png',
    },
    {
      id: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
      name: 'ChainLink Token',
      symbol: 'LINK',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    },
    {
      id: '0x23d29d30e35c5e8d321e1dc9a8a61bfd846d4c5c',
      name: 'HEX',
      symbol: 'HEX',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png',
    },
    {
      id: '0xB7b31a6BC18e48888545CE79e83E06003bE70930',
      name: 'ApeCoin',
      symbol: 'APE',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x4d224452801ACEd8B2F0aebE155379bb5D594381/logo.png',
    },
    {
      id: '0x6f7C932e7684666C9fd1d44527765433e01fF61d',
      name: 'Maker',
      symbol: 'MKR',
      logoURI: 'https://polygonscan.com/token/images/mkr-etherscan-35.png',
    },
    {
      id: '0xc3c7d422809852031b44ab29eec9f1eff2a58756',
      name: 'Lido DAO',
      symbol: 'LDO',
      logoURI: 'https://assets.coingecko.com/coins/images/13573/small/Lido_DAO.png?1609873644',
    },
    {
      id: '0xe0b52e49357fd4daf2c15e02058dce6bc0057db4',
      name: 'agEUR',
      symbol: 'agEUR',
      logoURI: 'https://assets.coingecko.com/coins/images/19479/small/agEUR.png?1635283566',
    },
  ],
  4: [ // For Rinkeby Ethereum Testnet
    {
      id: '0x8a1f7023c743E3d2149FfeA0EBcc685af0e8e9b6',
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      id: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      name: 'ETH',
      symbol: 'ETH',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    {
      id: '0xbF77b5E9f0195E336690c671c860e3707F60FbEe',
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
  ],
  80001: [ // For Mumbai Polygon Testnet
    {
      id: '0xBDEEA7A064934B0cD51BC4564E7c40cda4c669A6',
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    {
      id: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
      name: 'MATIC',
      symbol: 'MATIC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
    },
    {
      id: '0xd30A75dBBf8A0Cfa8294DF3F4089a9d9D464fff3',
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI:
        'https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
  ],
};

export const SUPPORTED_NETWORKS = [
  {
    chainId: 1,
    name: 'Ethereum',
    logoURI:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADxdJREFUeJztXVtzFMcVplwuP8VVeYmf7HJ+RKqSl/AQP6X8H+yqXUEIjhMnQY5jO9oVCIzA5mowdzAYG4xAGAyWLC5G3IyDL8gOASUYKrarYGZWC7qi23b6692VV6uZ7e6ZnT3di07VV6JUaLfnnG+6z+lz+vScOXUoL6SzP52/2PtlQ9p7piHlLU2k3P2JJqcjkXLO8589/OdN/tPjvx8VEP8Wv+sp/J8O/A3+Fp+Bz8JnUj/XrPjIwjT7ybxm57fJlLsy2eR2cwPe4QZksYB/Nr4D34XvxHdTP/8DJ+k0e4S/lb9Jpr2WZJNzgRtjPDaDS4DvFmPgY8GYMDZq/dStNKQzv0qmnA1c6RkqgysQIoMxYqzU+qoLWZDO/jyZdl7lir1ObdwQZLiOseMZqPVonSTS7i+4AtsTTW6O2pDR4ebEs/Bnotar8dKw2Pk1n0I76Y0W16zgdOIZqfVsnCSbvaeEB2+AkWpCBEQS/Jmp9U4u3Fl6nIdWB6gNQgb+7NABtR1qLjxcejiZdhfxKXGA3AjUswHXAXQBnVDbpSbCPeO5fAr8hlrxpgE6gW6o7ROb5N96Z3l9ePZxgUcMXEd1NxssbMk8kWxyztEr2A5AV3XjGySb3acTSLYYoFjL4EF31PYLLXwaeyiZcltnp/woEJtIrdAltT21BEkR7tnuo1dgfQC6tCbRlGh1H02k3C5qpalg/bt3WdOGDPk4lACdct1S27eiLEgPPMbDmcvkylLAgiUOc/sm2LHuITavmX48KoBun1828DNqO/tKsiX7JF+zeqmVpIqPzg2xyckc++Sfw2ImoB6POtxe6Jra3tMEb75Nxv/Hmxk2MZGbIsCpz4bZn1d45OPSIQF0Tm13IViXbJn2i+i9NcYgRQIA+zsGyMelA6Fzap8AnqktDl8RO9r7WVFKCQAs3dJHPj4tcN2TRQcizrcs1Hv+NZf1D04GEqDj/JBwDqnHqYNCiFj7fYL8Jg+9AnTQfXmYlUo5AYAtbffIx6lNAm6L2hpfbO/atcO3dGsfy+VyUgIAL66yySEE3FzNto2R2ElYtrffkHbYd7fHWbkEEeDQyUHk6cnHrQkPtonV+CKla2FWDx6+nwQRAFi5K0s+bl3ANrGmkvP5fPoH1cFfX/fYyP2cNgG6Lg6z55a55OPXJgG3UVzGn2vbug98fvW+r/FlBADePtJPPn59iKKS6lYW5ad++8q4Vu+5G2h8FQIAr663JFlUAtiqqksBZ1Uj9UPp4neLHeb0TUQmwNEzg2xemv559OE2VsX4KE2ysXoXhpOJCgGAdXttShblAZtVpayMe5Zt1A+ji5fXZdj4uL/jF4YApy4NsxdaLXQIue2iGb/Ze4r6IcLg6rejUuPrEAB47yO7kkVTJIhyAsnG41rYylUVHQIAizdZlixqyh9DC2V8HGKkHrwuELffHZiUWz4kAVBEAueS+jl1EepAqo2ndLFW64guAYBNB2xMFjmdWsbHWXbqQesC0zMMGjcBgEVv2JYs4tDpT5BvzmDAoBWBxM2tH8a0jB+FAAe77EsWwaZKxkdLE9u2fPce65dbu4oEAFp32JYscnNK7WrQ14Z+sOpAMefwiLrjVy0CdF0cYguX2rU3ANtKCWBTdS9wqWcklPGjEgDYcdiuZBEaV1U0PtqbUQ9SB6/vyoY2fjUIALy81q5kUcUWduhxRz1AVcxvdthtb2aVT60JcOT0oKg4otaHKmBjX+OLA50GN2Esx+FT8mRPLQgAIO1MrQ91ArgZ31JytDqlHpwqXlrjsbExvZg/TgKcvDTM/rjcHocQtp45/ae9FuqBqeLr/6gle2pFAAChKLVeVAFbzyRAk3OBemAq2LhfPdlTSwIA6Y12JItg62nGR9tzyq7bqljY4rK+e5WrfCgJcPzskHBOqfUkJQC39bRW9+h9Tz0oFXx8Yahqxo+DAMCGfXY4hLB5SfjnrqQekAypjRntZA8FAU5/NixK0an1JQNsXrL+m1/4ceM7/WRPJcExsas3Rtn7nQNVJ8GBj82vHppWKBLrNStVAOrzqyWjPHzEWQGEbjBW81t9bPn2LNt9tF/UE1SLBMu2Ge4QcpsL4+MyJPLBVADi68HhcMmeUrnbP8kufDUyw8ggQBHoD7Dt4D3WyX2NqASAv/L7Fnr9VYK4CAs3YlEPpBLOfxk+2QP5wRlnZy7ztTnAUKUEKGLJpj72JnfmUFoehQTbDpldPQTb8/Xfe5Z6IEHA1BxWem+N8rdd/ib7EaAUq/dkxZoelgTYtaTWYxBwJR7y/8uoB+IHnMbB26sjY+M59uU1vr5/qj6FywhQxIodWfbOh/2ioZQOAZCzMLV6CLafU7hUkXww5Wjr8j/S7Sdo+3LxyojSGx+WAFN+wtY+tp1P7V0afsIbbxtaPcRtb2T1b+Mqj90flcf8t91x1v158PoeBwGKWLy5j23kfsIxBT/h5KfDoj8RtV7LIaqFTcwBfHUt+Eg35L//G2WnqxSyhSVAKdZwP+FgV2U/Yc9R85JFIieQwH25BgymCHTt9JPxiRy7ch3xe/QQrdoEKGLlzqzICgb5CQb2Je6ZU7g0mXogAmjR5mWnJ3uwB3Dp65nxu4kEKGIZ9xN2tN9jJy5OJ6txfYm57TEDGNPwCdm0otzJTLCzX+T31uMwfJwEmNpP2NLHNu2/y453/0gEw/oSe3MK16dTD2Sqf+/N78diN3qtCDDlMG7qY2v33mWHTg6Y1ZeY294YAhw7Ozi1P19L1IIA0/yEXdxpfMeQWUAQwJAlAClUtHOrdwL8fW3GpBPGnlFOIIDp8lh3dT19EwiAJe4PprWdKziBRoWBALaB1/JpEhsothMAdYJY8w3dDhZh4HkDBuIL7J7t+qDfWgKg57BRYV85uO0xA3SQD0SCl9ZkRP9eWwjwyrqM8bUABXQYkwySpU0xhb62Lcs6z5u7E4idPpUDIn8ypeOYSAYZkg5esTPLPr0yIu2+gd1CnA3QTcvGSYA0B6IY2TpfXNLQxo5a30BDyluKI2HPUA+kCHj/qNlDDl0WKsGxevd49LAxqvGxPM2XjBV+AJpNYp/DpJ1AURBiUkkYvP9i9S9yAnjTZX+DaffoJ+H9g7CGR1j3nEKDCIS12OLGd6HGwaRoQJSEmVYU+rfVHhu+/2MR6LWbo+JMQGUmO6Lo4kSIsDFMWKfSNRRLWWnJOdrPm3aAVBSFmlgWXt7sEQc4kB+QKRBv5Pb2e7ERAIUqssbROL629eDMMSzZbFiZeLEs3NSDISjhLpeh4Umx7ssaMiD+bpMUaOgQAE6b7DYxjAkdS7ouzoxScFUdtT7LMe1giIlHw/AmORn/g6AoFlWps0OdP7p7hiUA/AuVUi74A+gU4vf5KC2XOYkkBCg9Gmbq4VBMm0gRBwkqgGX7B1A+PO+ggpKgsO4vK+VhHXwBVAAFkQuhqqk3kE07HGry8XDU5FcStIWHl40Zo9LnwH9AXZ6MAHBCZUe8EaLiFLBsL2LVbjOrgWccDze5QQTeQpX27zj6tV3hJM4r6zPsg5Lpemr7lv9eRiIA5V4dCruR+wxuLz+jQYTpLWIwHQ8MqZ0P/Pb7MdYiuQMYpMLOI87vIcRU2ZrFUnPwhNp+A7arTb5xzLdFjOlNorCTpio4+o0zhSBOpc+EZy+LKJDD33lYLyNpYPXvNPg2ibKhTRzqA3QE9wUiHAzTtgXx/po9+jUJpreTD2wTlw8HzW4UCY/e7wpYmSCc1NmDRxQQpioJOQzTbxgLbBSZXwbMbxWLmDtsj8B/3RiteA8gMnr7QtYlItEjW3JMQMVWsflZwL1OPUgZEM6FFWwrI2dQWp+H4o3NB/S2kMuBo+zUepFB2ixaEMCSdvFf/Lvy+UGZIKpAW5hiNBDF+Cae+/MlgEq7eFsujMAWbdSegdXoEoZNKFmewAwoXhhRWAasuDIGTRuitI57kNrFK18ZA7Hp0qgPz4RvHhmVACZV90ihc2lUfhYwr3GEHxrS4XsIRiEAchQmVfdUgva1cRCbLo58sayKKG4CIOdvWnVPxZckzMWRYhYwsFAkCDpXxkYlgHHVPRUQ+upYQQDLLo/W7SkYhgAoOaN+Ti0CRLk8GpJIOQeoH0IVSOfeCagiqgYBUH1sYnVPILjtIhkf0pDOPM6diAHyh1EEpufxClVEYQmA4o9Gi66Mhc1gu8gEgCTT7iLqB9KBrIooDAGM7fUXRABus6oYH5JOs4e5M/EN9UNpsF+0gq8WAd4zuLrH9/m5rWCzqhEAkkw7c23YIi4CmTl0EI1KAFHdY9UVsW4Otqqq8UtIsJz+AdWBJhNRCYD0M/Vz6AA2isX4kPxS4JyjfkgdVKoikhHgrfctC/m4bao+9ZfLwpbMEwlDGkupoFIVUSUCtJ80v7qnDB5sE6vxi5Jsdp+2yR9AFdCoTxVREAEwaxjTy08JfN3nNqmJ8adIkHJb6R9cHbt9qoiCCIBOJNTj1QFsUVPjQ/ha8xCPNfdRP7wOcFmUjAC7j9hR3TNlfG4D2KLmBCiQ4JFEyu2iVoIqyquIyglgT3VPAVz3gSXetZJEq/tossm9TK4MRbSWVBGVEwDtXqjHpwqhc657UuMXZUF64DHuiPRSK0UVOLJdTgCcPKIelzrcXuic2u7TJNmSfdIWEhSriIoEsKm6BzqGrqnt7StgpS3LAc7to+MIqntMvM/HD9CtcW9+uWBdssUxxDk+dPGiHocSoFNT1nyZiIOmloWIJqMQ6tF6+7oi9gnEZpE9O4bmwc1Bh2RxfjUkv21sT+7AIHg1396NS5CksC2LSAnoqmaJnVqJSCWLeoLZJSEYophjeewpXUpBtYpN5WW1AnQSWyWPaQKGc7Y32lRtHJvhhQ7cxrp+64NElJw3OW3URqB76522qpVu2yw4vWLTMbTohne7I5/YqUfBIUZbTiWHMjx/ttAHNR8kwVn2fJOKeogYxGZOu/b5/FnJt6vJ9yyyI8tYZvhejF25LcusVBa0N0OPO5ObWWJsGKO0FdushBckRdDqFP1u0fSYsss5vluMgY8FY7IuYVMPgrbn6H2PCxBEJBHn9Tf8s4UHz78L3zmj5fqsmCG4DAk3YiWbvGfFvYgpdz888EJL/J7Chdkerk8XEP8Wv+vJzyo8EsHf8L/FZ+Czpi5YqjP5P2ey0rAsl+yGAAAAAElFTkSuQmCC',
    enabled: process.env.REACT_APP_INKPURCHASE_ETHEREUM !== undefined,
  },
  // For Rinkeby Ethereum Testnet
  {
    chainId: 4,
    name: 'Rinkeby',
    logoURI:
      'data:image/png;base64,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',
    enabled: process.env.REACT_APP_INKPURCHASE_RINKEBY !== undefined,
  },
  {
    chainId: 137,
    name: 'Polygon',
    logoURI: '/assets/polygon.svg',
    enabled: process.env.REACT_APP_INKPURCHASE_POLYGON !== undefined,
  },
  // For Mumbai Polygon Testnet
  {
    chainId: 80001,
    name: 'Mumbai',
    logoURI: '/assets/polygon.svg',
    enabled: process.env.REACT_APP_INKPURCHASE_MUMBAI !== undefined,
  },
];

export const INKPURCHASE_ADDRESSES: { [chainId: number]: string } = {
  1: process.env.REACT_APP_INKPURCHASE_ETHEREUM || '',
  4: process.env.REACT_APP_INKPURCHASE_RINKEBY || '',  // For Rinkeby Ethereum Testnet
  137: process.env.REACT_APP_INKPURCHASE_POLYGON || '',
  80001: process.env.REACT_APP_INKPURCHASE_MUMBAI || '',  // For Mumbai Polygon Testnet
};
