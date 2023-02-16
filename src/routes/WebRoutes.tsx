import {lazy} from 'react';
import {RouteObject} from 'react-router-dom';

const WebLayout = lazy(() => import('@/routes/WebLayout'));
const Home = lazy(() => import('@/pages/web/Home/Home'));
const Achievement = lazy(() => import('@/pages/web/Achievement/Achievement'));
const Introduction = lazy(() => import('@/pages/web/Introduction/Introduction'));
const Topic = lazy(() => import('@/pages/web/Topic/Topic'));
const Trend = lazy(() => import('@/pages/web/Trend/Trend'));

export type RoutePath = 'home' | 'introduction' | 'dynamics' | 'subjects' | 'achievements';

export const pathDict: Record<RoutePath, string> = {
  home: '项目主页',
  introduction: '项目介绍',
  dynamics: '项目动态',
  subjects: '课程设置',
  achievements: '成果展示',
};

const WebRoutes: RouteObject[] = [
  {
    path: '/',
    id: 'layout',
    element: <WebLayout />,
    children: [
      {
        index: true,
        id: 'home',
        path: '/',
        element: <Home />,
      },
      {
        id: 'introduction',
        path: '/introduction',
        element: <Introduction />,
      },
      {
        id: 'dynamics',
        path: '/dynamics',
        element: <Trend />,
      },
      {
        id: 'subjects',
        path: '/subjects',
        element: <Topic />,
      },
      {
        id: 'achievements',
        path: '/achievements',
        element: <Achievement />,
      },
    ],
  },
];
export default WebRoutes;
