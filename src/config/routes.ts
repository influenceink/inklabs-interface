import { Home } from '../pages/Home';
import { Mindmap } from '../pages/Mindmap';
import { Platform } from '../pages/Platform';
import { Vision } from '../pages/Vision';
import { Enter } from '../pages/Enter';

import { Route } from '../types/Route';

const routes: Array<Route> = [
  {
    key: 'router-enter',
    title: 'Enter',
    description: 'Enter',
    component: Enter,
    path: '/',
    isEnabled: true,
    appendDivider: true,
  },
  {
    key: 'router-home',
    title: 'Home',
    description: 'Home',
    component: Home,
    path: '/home',
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
    key: 'router-vision',
    title: 'Vision',
    description: 'Vision',
    component: Vision,
    path: '/vision',
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
