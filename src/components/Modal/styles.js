import styled, { createGlobalStyle } from 'styled-components';
import { opacityTo100 } from '../../animations';

export const GlobalStyled = createGlobalStyle`
body {
  overflow: hidden;
}
  #modal {
    background: #242424;
    display: block;
    opacity: 0;
    animation: ${opacityTo100} 1s forwards;
    overflow: auto;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      background: rgba(36, 36, 36, 0.5);
      display: flex;      
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  }
`;

export const Container = styled.div`
  margin: 148px 0 0 0;
  padding: 0 24px;
  height: calc(100vh - 48px);

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 730px;
    height: 440px;
    background: #242424;
    position: absolute;
    margin: 0;
    padding: 0 64px;
    box-sizing: border-box;
  }
`;
