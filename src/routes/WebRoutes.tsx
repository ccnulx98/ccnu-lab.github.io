import React, {lazy} from 'react';
import {NonIndexRouteObject} from 'react-router-dom';

const WebLayout = lazy(() => import('@/routes/WebLayout'));
const Home = lazy(() => import('@/pages/web/Home/Home'));
const Achievement = lazy(() => import('@/pages/web/Achievement/Achievement'));
const Introduction = lazy(() => import('@/pages/web/Introduction/Introduction'));
const Topic = lazy(() => import('@/pages/web/Topic/Topic'));
const Trend = lazy(() => import('@/pages/web/Trend/Trend'));

export interface ProRoutes extends NonIndexRouteObject {
  name: string;
  children?: ProRoutes[];
}

const WebRoutes: ProRoutes[] = [
  {
    path: '/',
    name: 'layout',
    element: <WebLayout />,
    children: [
      {
        name: '主页',
        path: '/home',
        element: <Home />,
      },
      {
        name: '项目介绍',
        path: '/introduction',
        element: <Introduction />,
      },
      {
        name: '项目动态',
        path: '/trend',
        element: <Trend />,
      },
      {
        name: '课程设置',
        path: '/topic',
        element: <Topic />,
      },
      {
        name: '成果展示',
        path: '/achievement',
        element: <Achievement />,
      },
    ],
  },
];
export default WebRoutes;
