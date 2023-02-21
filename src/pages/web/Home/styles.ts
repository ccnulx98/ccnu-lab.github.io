import styled from 'styled-components';

import home from '@/assets/images/home.png';
import home_project_background from '@/assets/images/home_project_bg.png';

const HomeWrap = styled.div`
  /* overflow-x: hidden; */
`;

const ImageWrap = styled.div`
  height: 1029px;
  background-image: url(${home});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  background-size: cover;
  opacity: 1;
  .flash {
    transition-duration: 500ms;
    transition-property: margin-right;
  }
`;

const PrincipalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 293px;
  width: 210px;
  top: 1363 px;
  background: #ffffff;
  box-shadow: 0px 8px 12px 1px rgba(102, 120, 166, 0.03), 0px 5px 9px -3px rgba(102, 120, 166, 0.05);
  border-radius: 4px;
  margin-right: 38px;
  margin-top: 82px;
  margin-bottom: 155px;
  padding: 25px 20px;
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(102, 120, 166, 0);
  img {
    width: 158px;
    height: 180px;
    padding-bottom: 20px;
  }
  .principalName {
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    box-sizing: border-box;
    padding-bottom: 8px;
  }
  .introduction {
    justify-content: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
  transition: 0.3s;
  &:hover {
    border: 1px;
    box-shadow: 0px 6px 30px 5px rgba(102, 120, 166, 0.06),
      0px 16px 24px 2px rgba(102, 120, 166, 0.04), 0px 8px 10px -5px rgba(102, 120, 166, 0.08);
    transform: translateY(-10px);
  }
`;

const ProjectWrap = styled.div`
  height: 482px;
  background-image: url(${home_project_background});
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  text-indent: 2em;
  margin: 0 400px 116px;
`;

export {HomeWrap, ImageWrap, PrincipalBox, ProjectWrap, ProjectContentWrap};
