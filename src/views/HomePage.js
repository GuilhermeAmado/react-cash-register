import React, { useContext } from 'react';
import styled from 'styled-components';
import { Tabs, Card } from 'antd';
import GenerateChangeView from './GenerateChangeView';
import InsertCoinsView from './InsertCoinsView';
import RemoveCoinsView from './RemoveCoinsView';
import { GenerateChangeContextProvider } from '../contexts/GenerateChangeContext';
import { GlobalContext } from '../contexts/GlobalContext';

const { TabPane } = Tabs;

const HomePage = () => {
  const { setCoinsToAddToStock } = useContext(GlobalContext);

  const handleTabChange = () => {
    console.log('tab changed');
    setCoinsToAddToStock([]);
  };

  return (
    <Wrapper>
      <StyledCard>
        <Tabs defaultActiveKey="1" onChange={() => handleTabChange()}>
          <TabPane tab="Gerar troco" key="1" forceRender>
            <GenerateChangeContextProvider>
              <GenerateChangeView />
            </GenerateChangeContextProvider>
          </TabPane>
          <TabPane tab="Abastecimento" key="2" forceRender>
            <InsertCoinsView />
          </TabPane>
          <TabPane tab="Sangria" key="3" forceRender>
            <RemoveCoinsView />
          </TabPane>
        </Tabs>
      </StyledCard>
    </Wrapper>
  );
};

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

export default HomePage;
