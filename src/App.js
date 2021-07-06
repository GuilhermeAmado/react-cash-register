import styled from 'styled-components';
import { Tabs, Card } from 'antd';
import CoinList from './components/CoinList';
import GenerateChangeView from './views/GenerateChangeView';
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
            <GenerateChangeView />
          </TabPane>
          <TabPane tab="Abastecimento" key="2">
            <CoinList />
          </TabPane>
          <TabPane tab="Sangria" key="3">
            <CoinList />
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
  width: 700px;
  min-height: 500px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px, rgb(0 0 0 / 6%) 0px 2px 4px 0px;
`;

export default App;
