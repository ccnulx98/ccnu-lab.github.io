import {LoadingOutlined} from '@ant-design/icons';
import {Layout, Menu, Spin, SpinProps} from 'antd';
import React, {Suspense} from 'react';
import {Outlet, Link, RouteObject} from 'react-router-dom';
import styled from 'styled-components';

import {AppLogo} from '@/component/UI/AppLogo';

import WebRoutes from './WebRoutes';
const {Header, Content, Footer} = Layout;
const antIcon = <LoadingOutlined style={{fontSize: 24}} spin />;

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
  const WebChildren = WebRoutes.find((i) => i.path === '/')?.children as RouteObject[];
  const WebItems = WebChildren.map((i) => {
    return {
      key: i.path as string,
      label: <Link to={i.path as string}>{i.id}</Link>,
    };
  });
  return (
    <Layout>
      <WebHeader>
        <HeaderContent>
          <AppLogo />
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={[
              WebItems.find((i) => i.key !== '/' && location.pathname.includes(i.key))?.key || '/',
            ]}
            items={WebItems}
          />
        </HeaderContent>
      </WebHeader>
      <Content>
        <Suspense fallback={<LoadingWrap indicator={antIcon} delay={1000} />}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        项目基础框架以及每个页面跳转已经做好,具体需要在具体的页面去实现, logo
        目前随便放一个可随时替换
      </Footer>
    </Layout>
  );
};

export default WebLayout;
