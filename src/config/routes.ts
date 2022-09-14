import { Home } from '../pages/Home';
import { Mindmap } from '../pages/Mindmap';
import { Platform } from '../pages/Platform';
import { Coin } from '../pages/Coin';
import { Enter } from '../pages/Enter';

import { Route } from '../types/Route';
import { Profile } from '../pages/Profile';
import { Vision } from '../pages/Vision';
import { Convergence } from '../pages/Convergence';
import { Games } from '../pages/Games';
import { WOI } from '../pages/WOI';
import { FAQ } from '../pages/FAQ';

const routes: Array<Route> = [
  // {
  //   key: 'router-enter',
  //   title: 'Enter',
  //   description: 'Enter',
  //   component: Enter,
  //   path: '/',
  //   isEnabled: true,
  //   appendDivider: true,
  // },
  {
    key: 'router-home',
    title: 'Home',
    description: 'Home',
    component: Home,
    path: '/',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-profile',
    title: 'Profile',
    description: 'Profile',
    component: Profile,
    path: '/profile',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-mind',
    title: 'Mindmap',
    description: 'Mindmap',
    component: Mindmap,
    path: '/mindmap',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-coin',
    title: 'Coin',
    description: 'Coin',
    component: Coin,
    path: '/coin',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-platform',
    title: 'Platform',
    description: 'Platform',
    component: Platform,
    path: '/platform',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-vision',
    title: 'Vision',
    description: 'Vision',
    component: Vision,
    path: '/vision',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-convergence',
    title: 'Convergence',
    description: 'Convergence',
    component: Convergence,
    path: '/convergence',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-games',
    title: 'Games',
    description: 'Games',
    component: Games,
    path: '/games',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-woi',
    title: 'World Of Influence',
    description: 'World Of Influence',
    component: WOI,
    path: '/woi',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-faq',
    title: 'FAQ',
    description: 'FAQ',
    component: FAQ,
    path: '/faq',
    isEnabled: true,
    appendDivider: true,
  },
];

export default routes;
