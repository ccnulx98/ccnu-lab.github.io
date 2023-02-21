import {LoadingOutlined} from '@ant-design/icons';
import {Layout, Menu, Spin, SpinProps} from 'antd';
import React, {Suspense} from 'react';
import {Outlet, Link, RouteObject, useLocation, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import bottom from '@/assets/images/bottom.png';
import logo from '@/assets/images/logo.png';

import WebRoutes, {pathDict, RoutePath} from './WebRoutes';

const {Content, Header} = Layout;
const antIcon = <LoadingOutlined style={{fontSize: 24}} spin />;

export const LoadingWrap: typeof Spin = styled(Spin)<SpinProps>`
  height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WebHeader = styled.div`
  box-shadow: 0px 1px 10px rgba(71, 90, 155, 0.02), 0px 4px 6px rgba(102, 120, 166, 0.04),
    0px 2px 6px -1px rgba(102, 120, 166, 0.05);
  position: fixed;
  top: 0;
  background: #f5f5f5;
  width: 100%;
  padding: 20px 360px 14px;
  z-index: 10;
`;

const HeaderContent = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5 !important;
  padding-inline: 0 !important;
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 0em;
  .ant-menu-light {
    background: #f5f5f5;
  }
  .ant-menu-light .ant-menu-item-selected a {
    color: #005a9f;
  }
  .ant-menu-horizontal {
    border-bottom: none;
  }
`;

const ContentContent = styled(Content)`
  padding: 30px 0;
`;

const FooterContent = styled.div`
  background-image: url(${bottom});
  background-size: cover;
  background-repeat: no-repeat;
  height: 108px;
`;

const SectionLayout = styled(Layout)`
  width: 100%;
  header,
  footer,
  main {
    width: 100%;
    margin: 0 auto;
  }
`;

const WebLayout: React.FC = () => {
  const WebChildren = WebRoutes.find((i) => i.path === '/')?.children as RouteObject[];
  const WebItems = WebChildren.map((i) => {
    return {
      key: i.path as string,
      label: <Link to={i.path as string}>{pathDict[i.id as RoutePath]}</Link>,
    };
  });
  const navigate = useNavigate();

  const loc = useLocation();
  return (
    <Layout style={{background: 'white'}}>
      <SectionLayout style={{background: '#eee'}}>
        <WebHeader>
          <HeaderContent>
            <img src={logo} style={{height: '52px'}} onClick={() => navigate('/')} />
            <Menu
              theme={'light'}
              mode="horizontal"
              selectedKeys={[
                WebItems.find((i) => i.key !== '/' && loc.pathname.includes(i.key))?.key || '/',
              ]}
              items={WebItems}
            />
          </HeaderContent>
        </WebHeader>
      </SectionLayout>
      <SectionLayout style={{background: 'transparent'}}>
        <ContentContent>
          <Suspense fallback={<LoadingWrap indicator={antIcon} delay={1000} />}>
            <Outlet />
          </Suspense>
        </ContentContent>
      </SectionLayout>
      <SectionLayout style={{background: '#eee'}}>
        <FooterContent />
      </SectionLayout>
    </Layout>
  );
};

export default WebLayout;
