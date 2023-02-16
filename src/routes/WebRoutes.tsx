import React, {lazy} from 'react';
import {RouteObject} from 'react-router-dom';

const WebLayout = lazy(() => import('@/routes/WebLayout'));
const Home = lazy(() => import('@/pages/web/Home/Home'));
const Achievement = lazy(() => import('@/pages/web/Achievement/Achievement'));
const Introduction = lazy(() => import('@/pages/web/Introduction/Introduction'));
const Topic = lazy(() => import('@/pages/web/Topic/Topic'));
const Trend = lazy(() => import('@/pages/web/Trend/Trend'));

const WebRoutes: RouteObject[] = [
  {
    path: '/',
    id: 'layout',
    element: <WebLayout />,
    children: [
      {
        index: true,
        id: '主页',
        // path: '/home',
        element: <Home />,
      },
      {
        id: '项目介绍',
        path: '/introduction',
        element: <Introduction />,
      },
      {
        id: '项目动态',
        path: '/trend',
        element: <Trend />,
      },
      {
        id: '课程设置',
        path: '/topic',
        element: <Topic />,
      },
      {
        id: '成果展示',
        path: '/achievement',
        element: <Achievement />,
      },
    ],
  },
];
export default WebRoutes;
