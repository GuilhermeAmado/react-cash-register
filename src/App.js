import styled from 'styled-components';
import { Tabs, Card } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function App() {
  return (
    <Wrapper>
      <StyledCard>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Gerar troco" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Abastecimento" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Sangria" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </StyledCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  max-width: 600px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px, rgb(0 0 0 / 6%) 0px 2px 4px 0px;
`;

export default App;
