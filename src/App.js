import styled from 'styled-components';
import { Tabs, Card } from 'antd';
import CoinList from './components/CoinList';
import GenerateChangeView from './views/GenerateChangeView';
import { GenerateChangeContextProvider } from './contexts/GenerateChangeContext';
import { GlobalContextProvider } from './contexts/GlobalContext';
import InsertCoinsView from './views/InsertCoinsView';
import RemoveCoinsView from './views/RemoveCoinsView';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function App() {
  return (
    <GlobalContextProvider>
      <Wrapper>
        <StyledCard>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Gerar troco" key="1">
              <GenerateChangeContextProvider>
                <GenerateChangeView />
              </GenerateChangeContextProvider>
            </TabPane>
            <TabPane tab="Abastecimento" key="2">
              <InsertCoinsView />
            </TabPane>
            <TabPane tab="Sangria" key="3">
              <RemoveCoinsView />
            </TabPane>
          </Tabs>
        </StyledCard>
      </Wrapper>
    </GlobalContextProvider>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  margin-top: 200px;
  width: 700px;
  min-height: 370px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px, rgb(0 0 0 / 6%) 0px 2px 4px 0px;
`;

export default App;
