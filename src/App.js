import styled from 'styled-components';
import { Tabs, Card } from 'antd';
import Coin from './components/Coin';
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
            <CoinsContainer>
              <Coin value={1} unity={'Real'} />
              <Coin value={50} unity={'Centavos'} />
              <Coin value={25} unity={'Centavos'} />
              <Coin value={10} unity={'Centavos'} />
              <Coin value={5} unity={'Centavos'} />
              <Coin value={1} unity={'Centavo'} />
            </CoinsContainer>
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
  width: 600px;
  min-height: 400px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px, rgb(0 0 0 / 6%) 0px 2px 4px 0px;
`;

const CoinsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default App;
