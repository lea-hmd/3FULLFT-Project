import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import srcLMIcon from './lightModeIcon.png';
import srcDMIcon from './darkModeIcon.png';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  cursor: pointer;
  padding-top: 0.2rem;
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
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <Button onClick={toggleTheme}>
        {theme === 'light' ? (
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
  toggleTheme: func.isRequired,
};
export default Toggle;
