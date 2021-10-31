import React from 'react';
import {string } from 'prop-types';
import styled from 'styled-components';
import srcLMIcon from './lightModeIcon.png';
import srcDMIcon from './darkModeIcon.png';
import { OrderContext } from '../../context/OrderContext';
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  cursor: pointer;
  padding-top: 0.2rem;
  float: right;
  }
`;

const LightModeIcon = styled.img`
  height: auto;
  width: 1.5rem;
`;
LightModeIcon.defaultProps = { src: srcLMIcon };

const DarkModeIcon = styled.img`
  height: auto;
  width: 1.5rem;
`;
DarkModeIcon.defaultProps = { src: srcDMIcon };
const Toggle = ({ theme }) => {
  const { orderState, orderDispatch } = React.useContext(OrderContext);

  return (
    <>
      <Button
        onClick={() => {
          orderDispatch({ type: 'switchTheme', payload: orderState.theme });
        }}
      >
        {orderState.theme === 'light' ? (
          <DarkModeIcon></DarkModeIcon>
        ) : (
          <LightModeIcon></LightModeIcon>
        )}
      </Button>
    </>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
};
export default Toggle;
