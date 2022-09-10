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
