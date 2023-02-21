import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  border-radius: 8px;
  height: 82px;
  position: relative;
  &:hover {
    background: #ecf5ff;
    color: #005a9f;
    svg {
      path {
        fill: #005a9f;
      }
    }
  }
  margin: 20px 15%;
  padding: 0 40px;
`;
const TitleWrap = styled.div`
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
    margin: 127px 0 82px 0;
  }
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export {ListItem, TitleWrap, FlexWrap};
