import {LoadingOutlined} from '@ant-design/icons';
import {Layout, Menu, MenuProps, Spin, SpinProps} from 'antd';
import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

import {AppLogo} from '@/component/UI/AppLogo';
const {Header, Content, Footer} = Layout;
const antIcon = <LoadingOutlined style={{fontSize: 24}} spin />;

const items: MenuProps['items'] = [
  {key: 'home', label: '主页'},
  {key: 'introduction', label: '项目简介'},
  {key: 'trend', label: '项目动态'},
  {key: 'topic', label: '课题设置'},
  {key: 'achievement', label: '成果展示'},
];

export const LoadingWrap: typeof Spin = styled(Spin)<SpinProps>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContent = styled(Header)`
  width: 1500px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fcfcfc !important;
  padding: 0;
  .ant-menu-horizontal > .ant-menu-item a {
    font-size: 16px;
  }
  .ant-menu-horizontal > .ant-menu-item-selected a {
    font-weight: 600;
  }
  .ant-menu {
    width: 1270px;
    display: flex;
    justify-content: center;
  }
`;
const WebHeader = styled.div`
  box-shadow: 0px 1px 10px rgba(71, 90, 155, 0.02), 0px 4px 6px rgba(102, 120, 166, 0.04),
    0px 2px 6px -1px rgba(102, 120, 166, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fcfcfc;
`;

const WebLayout: React.FC = () => {
  return (
    <Layout>
      <WebHeader>
        <HeaderContent>
          <AppLogo />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items} />
        </HeaderContent>
      </WebHeader>
      <Content>
        <Suspense fallback={<LoadingWrap indicator={antIcon} delay={1000} />}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer style={{textAlign: 'center'}}>Copyright © 2015-2023 华中师范大学</Footer>
    </Layout>
  );
};

export default WebLayout;
