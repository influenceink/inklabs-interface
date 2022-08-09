import { Home } from '../pages/Home';
import { Mindmap } from '../pages/Mindmap';
import { Platform } from '../pages/Platform';
import { Coin } from '../pages/Coin';
import { Enter } from '../pages/Enter';

import { Route } from '../types/Route';
import { Profile } from '../pages/Profile';

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
];

export default routes;
