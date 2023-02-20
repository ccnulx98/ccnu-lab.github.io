import {Typography, Space} from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import {useNavigate} from 'react-router';
import styled, {css} from 'styled-components';

import home from '@/assets/images/home.png';
import home_project_bottom from '@/assets/images/home_bottom.png';
import home_project_background from '@/assets/images/home_project_bg.png';
import home_title from '@/assets/images/home_title.png';
import principal_default from '@/assets/images/principal_default.png';
import trend_icon from '@/assets/images/trend_icon.png';
const {Title, Text} = Typography;
const HomeWrap = styled.div`
  overflow-x: hidden;
`;
const ImageWrap = styled.div`
  height: 1029px;
  background-image: url(${home});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  background-size: cover;
`;

const TitleWrap = styled.div<{name?: string}>`
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
  }
  ${(props) =>
    props.name == 'project'
      ? css`
          .ant-typography {
            margin: 86px 0 73px 0;
          }
        `
      : css`
          .ant-typography {
            margin: 127px 0 82px 0;
          }
        `}
  .ant-typography {
    font-style: normal;
    font-weight: 800px;
    font-size: 32px;
    line-height: 39px;
    /* margin: 127px 0 82px 0; */
  }
`;
const NewsTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
  }
  .ant-typography {
    font-style: normal;
    font-weight: 800px;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 59px;
  }
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  }
  .principalName {
    justify-content: center;
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    box-sizing: border-box;
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

const HomeProjectWrap = styled.div`
  height: 482px;
  background-image: url(${home_project_background});
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 126px;
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
const TrendListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  border: 1px solid #d0d6de;
  border-radius: 8px;
  height: 82px;
  width: 1120px;
  position: relative;
  &:hover {
    background: #f1f1f1;
    border: 1px solid #2e6cfd;
  }
  margin: 20px 400px;
`;
const EllipsisBox = styled.span`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export default function Home() {
  const principalData = [
    {image: principal_default, name: '张三'},
    {image: principal_default, name: '张三'},
    {image: principal_default, name: '张三'},
    {image: principal_default, name: '张三'},
    {image: principal_default, name: '张三'},
  ];
  const trendData = [
    {
      title: '科技创新2030—“新一代人工智能”重大项目“连续学习理论和方法”2022年度进展总结会成功召开',
      createTime: new Date(),
    },
    {
      title: '科技创新2030—“新一代人工智能”重大项目“连续学习理论和方法”2022年度进展总结会成功召开',
      createTime: new Date(),
    },
    {
      title: '科技创新2030—“新一代人工智能”重大项目“连续学习理论和方法”2022年度进展总结会成功召开',
      createTime: new Date(),
    },
    {
      title: '科技创新2030—“新一代人工智能”重大项目“连续学习理论和方法”2022年度进展总结会成功召开',
      createTime: new Date(),
    },
    {
      title: '科技创新2030—“新一代人工智能”重大项目“连续学习理论和方法”2022年度进展总结会成功召开',
      createTime: new Date(),
    },
    {
      title: '科技创新2030—“新一代人工智能”重大项目“连续学习理论和方法”2022年度进展总结会成功召开',
      createTime: new Date(),
    },
    {
      title: '科技创新2030—“新一代人工智能”重大项目“连续学习理论和方法”2022年度进展总结会成功召开',
      createTime: new Date(),
    },
    {
      title: '科技创新2030—“新一代人工智能”重大项目“连续学习理论和方法”2022年度进展总结会成功召开',
      createTime: new Date(),
    },
  ];

  const navigate = useNavigate();
  return (
    <HomeWrap>
      <ImageWrap>
        <img
          src={home_title}
          style={{
            width: '100%',
          }}
        />
      </ImageWrap>
      <TitleWrap name="">
        <Title level={1}>负责人介绍</Title>
      </TitleWrap>
      <FlexWrap>
        {principalData.map((item) => (
          <PrincipalBox key={item.image}>
            <img src={item.image} alt="" style={{borderRadius: '50%'}} />
            <div className="principalName">{item.name}</div>
            <div className="introduction">项目负责人</div>
          </PrincipalBox>
        ))}
      </FlexWrap>
      <HomeProjectWrap>
        <TitleWrap name="project">
          <Title level={1}>项目简介</Title>
        </TitleWrap>
        <ProjectContentWrap>
          本项目围绕“连续学习理论与方法”这一科学内涵，针对“抗灾难性遗忘的知识表达问题、数据受限下的知识增扩问题和人在回路中的知识修正问题”三个关键科学问题，以知识为主线，形成一整套连续学习的理论、模型和方法，并实现应用验证和测试评估。具体地，1）建立连续学习理论方法，实现连续学习过程中的知识表达、知识增扩及人在回路的模型能力成长，形成知识和数据相融合的连续学习理论和模型；2）发展连续学习关键技术，突破零样本和小样本条件下的连续学习关键技术，探索面向室内机器人、电子商务和智能交通的应用任务；3）构建连续学习评测体系，开源基准数据集和软件框架，验证连续学习模型性能。本项目在连续学习范式层面和人机协同层面上具有重要理论科学价值、在实际应用层面上具有重要意义。通过本项目的研究，有望在连续学习理论方面取得突破，并在应用层面上形成一系列相关任务的开源基准数据集、软件框架及评测标准，打造连续学习应用示范新标杆。
        </ProjectContentWrap>
      </HomeProjectWrap>
      <NewsTitleWrap>
        <Title level={1}>新闻</Title>
      </NewsTitleWrap>
      {trendData.map((item) => (
        <TrendListItem key={item.title} onClick={() => navigate('/trend')}>
          <Space size={'middle'}>
            <img
              src={trend_icon}
              style={{
                width: '24px',
              }}
            />
            <EllipsisBox>{item.title}</EllipsisBox>
            <Text>{dayjs(item.createTime).format('YYYY-MM-DD')}</Text>
          </Space>
        </TrendListItem>
      ))}
      <img
        src={home_project_bottom}
        style={{
          width: '100%',
          marginTop: '164px',
        }}
      />
    </HomeWrap>
  );
}
