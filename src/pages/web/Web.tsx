import {ConfigProvider, message} from 'antd';
import locale from 'antd/es/locale/zh_CN';
import dayjs from 'dayjs';
import React from 'react';
import {BrowserRouter, useRoutes} from 'react-router-dom';

import 'dayjs/locale/zh-cn';
import WebRoutes from '@/routes/WebRoutes';
dayjs.locale('zh-cn');

message.config({maxCount: 1});
function App() {
  return useRoutes(WebRoutes);
}

const Web: React.FC = () => {
  return (
    <ConfigProvider
      locale={locale}
      autoInsertSpaceInButton={false}
      getPopupContainer={(node) => {
        if (node) {
          return node.parentNode as HTMLElement;
        }
        return document.body;
      }}
    >
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  );
};
export default Web;
