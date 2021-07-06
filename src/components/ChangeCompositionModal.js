import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Modal } from 'antd';
import CoinList from './CoinList';
import styled from 'styled-components';
import { GenerateChangeContext } from '../contexts/GenerateChangeContext';
import { currencyFormatter } from '../utils/currencyFormater';

const ChangeCompositionModal = ({ isModalVisible, setIsModalVisible }) => {
  const { totalChangeValue, setTotalChangeValue } = useContext(
    GenerateChangeContext
  );

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledModal
      width={700}
      title="Composição do troco"
      visible={isModalVisible}
      cancelText="Cancelar"
      cancelButtonProps={{ disabled: true }}
      onOk={handleOk}
      closable={false}
      destroyOnClose={true}
    >
      <CoinList disabled />

      <TotalDisplay>
        <span>Troco Total:</span>
        <strong>{currencyFormatter(totalChangeValue)}</strong>
      </TotalDisplay>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  width: 900px;
`;

const TotalDisplay = styled.div`
  height: 50px;
  background-color: #000;
  color: #fff;
  border-radius: 2px;
  padding: 6px 12px;
  margin-top: 15px;

  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export default ChangeCompositionModal;
