import React from 'react';
import { Typography, Card } from 'antd';
import styled from 'styled-components';
const { Title } = Typography;


const IntroDiv = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */
  text-align: justify;
  color: #000000;
  width: 1042px;
  padding: 0;
  margin: 0;
`
const CardContext = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const MyCard = styled(Card)`
  padding-left: 80px;
  padding-right: 77px;
  margin-top: -80px;
  width: 1200px;
  height: 1382px;
`

const MyUnderLine = styled.div`
  height: 1px;
  background-color: #000000;
  width: 150px;
`
const MyTitle = styled(Title)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
`


const App: React.FC = () => (
  <div>
    <img src="src\assets\images\common-head.png" width={"100%"}/>
    <CardContext>
    <MyCard>

      <MyTitle>项目简介</MyTitle>

      <MyUnderLine></MyUnderLine>

      <br></br>

      <IntroDiv>
        <p>
          本项目依据科技创新2030—“新一代人工智能”重大项目2021年度申报指南中任务1.2 “连续学习理论和方法”提出申请。
        </p>
        <p>
          本项目围绕“连续学习理论与方法”这一科学内涵，针对“抗灾难性遗忘的知识表达问题、数据受限下的知识增扩问题和人在回路中的知识修正问题”三个关键科学问题，以知识为主线，形成一整套连续学习的理论、模型和方法，并实现应用验证和测试评估。具体地，1）建立连续学习理论方法，实现连续学习过程中的知识表达、知识增扩及人在回路的模型能力成长，形成知识和数据相融合的连续学习理论和模型；2）发展连续学习关键技术，突破零样本和小样本条件下的连续学习关键技术，探索面向室内机器人、电子商务和智能交通的应用任务；3）构建连续学习评测体系，开源基准数据集和软件框架，验证连续学习模型性能。 项目拟解决的重大科学问题包括：（1）抗灾难性遗忘的知识表达问题：灾难性遗忘是连续学习的首要挑战，在多源异构数据中表现尤为突出。如何构建跨媒体多重知识表达体系，形成针对旧知识的抗灾难性遗忘联邦模型，是实现连续学习的基础。（2）数据受限下的知识增扩问题：零/小样本等数据稀缺场景对连续学习的稳健知识增扩带来了重要挑战。如何依托已有知识表达，实现新知识的结构辨识和模式挖掘，完成知识增扩，是发展连续学习的关键。（3）人在回路中的知识修正问题：现有连续学习模型欠缺主动挑选样本的能力。如何基于人在回路的主动学习思想，通过融入人类知识，降低当前模型能力成长中对当前数据的标注成本，实现高效知识修正，是达成连续学习的重要环节。
        </p>
        <p>
          本项目属于新一任人工智能智能基础理论，聚焦连续学习这一重大科学问题，针对连续学习中“理论模型需构建、应用评测需扩展”的技术难点，以拟解决的关键科学问题为突破口，旨在发展形成面向连续学习的理论模型和评测体系，探索基于连续学习的实际应用场景，从而推动理论与实践的协同发展。本项目在连续学习范式层面和人机协同层面上具有重要理论科学价值、在实际应用层面上具有重要意义。通过本项目的研究，有望在连续学习理论方面取得突破，并在应用层面上形成一系列相关任务的开源基准数据集、软件框架及评测标准，打造连续学习应用示范新标杆
        </p>
      </IntroDiv>
      <br></br>
      <img src="src\assets\images\introduction.png" width={1042} />
    </MyCard>
    </CardContext>
  </div>

);


export default App;