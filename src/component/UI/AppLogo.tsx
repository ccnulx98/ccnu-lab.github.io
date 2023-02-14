import {Image} from 'antd';
import React from 'react';
import styled, {css} from 'styled-components';

import errorUrl from '@/assets/images/error.png';
import logoUrl from '@/assets/images/favicon.png';

interface AppLogoProps {
  size?: number; // 控制宽高值
  initialAnimationOn?: boolean; // 是否开启动画效果:是true,否false
  url?: string; // 图片地址
}

export const AppLogo: React.FC<AppLogoProps> = ({
  size = 64,
  initialAnimationOn = false,
  url = logoUrl,
}) => {
  return (
    <AppLogoWrap initialAnimationOn={initialAnimationOn}>
      <Image
        className="imgBox"
        src={url}
        fallback={errorUrl}
        width={size}
        height={size}
        preview={false}
      />
    </AppLogoWrap>
  );
};

const AppLogoWrap = styled.div<{initialAnimationOn: boolean}>`
  display: inline-block;
  .imgBox {
    min-width: 32px;
    min-height: 32px;
    max-width: 256px;
    max-height: 256px;
  }
  ${(props) =>
    props.initialAnimationOn
      ? css`
          animation: fadeIn 3s linear;
        `
      : undefined}
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;
