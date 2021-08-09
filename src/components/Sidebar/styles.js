import styled, { createGlobalStyle, css } from 'styled-components';
import { fadeFromLeft } from '../../animations';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Items = styled.ul`
  list-style: none;
  margin: 116px 0 0 0;
  padding: 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 157px 0 0 0;
  }

  li {
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 4px;
    margin: 40px 0 0 0;
    font-weight: 300;
    color: #ffffff;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 22px;
      line-height: 22px;
    }
  }
`;

export const BottomOptions = styled.div`
  position: relative;
  margin-top: 65px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 72px;
  }

  a {
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 4px;
    color: #ffffff;
    font-weight: 300;
    margin-top: 64px;
    display: block;
    width: fit-content;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 22px;
      line-height: 22px;
      margin-top: 72px;
    }
  }
`;

export const Container = styled.div`
  position: fixed;
  top: -100vh;
  right: 0;
  width: 100vw;
  height: max(100vh, 100%);
  background: #242424;
  z-index: 5;
  box-sizing: border-box;
  padding: 0 24px;
  opacity: 0;
  overflow: auto;
  transition: top 1s ease-out, opacity 1s ease-out;
  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      top: 0;

      ${Items} {
        opacity: 0;
        animation: ${fadeFromLeft} 0.7s linear forwards;
        animation-delay: 0.6s;
      }

      ${BottomOptions} {
        opacity: 0;
        animation: ${fadeFromLeft} 0.7s linear forwards;
        animation-delay: 1s;
      }
    `}

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
    padding: 0 88px;
    top: 0;
    max-width: 761px;
    right: -761px;
    opacity: 0;
    transition: right 1s ease-out, opacity 1s ease-out;
    ${({ show }) =>
      show &&
      css`
        opacity: 1;
        right: 0;
      `}
  }
`;
