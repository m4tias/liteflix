import styled, { css, keyframes } from 'styled-components';
import {
  appearFromTop,
  breatheOpacity,
  fadeFromLeft,
  opacityTo100,
} from '../../animations';

const bgAnimation = keyframes`
  from { transform: scale(1.5); }
  to { transform: scale(1); }
`;

export const Background = styled.main`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  position: relative;

  ${({ loaded }) =>
    !loaded &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      height: 100vh;

      && svg {
        width: 50vw;
        max-width: 700px;
        height: auto;
      }
    `}

  @media ${({ theme }) => theme.breakpoints.tablet} {
    overflow: hidden;
  }
`;

export const BgImg = styled.div`
  position: absolute;
  width: 100%;
  height: calc(max(100vh, 100vw) - 107px);
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 100%;
  }

  div {
    background: url('${(props) => props.img}') top center / cover;
    width: 100vw;
    height: 100%;
    animation: ${opacityTo100} 2s linear forwards,
      ${bgAnimation} 20s ease-out forwards;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
  margin-bottom: -40px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    align-items: flex-start;
    margin-top: 412px;
    margin-bottom: 0;
    padding: 0;
  }
`;

export const Source = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  animation: ${opacityTo100} 0.5s linear forwards;
  animation-delay: 0.3s;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 76px;
  line-height: 77px;
  text-align: center;
  letter-spacing: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-block-start: 16px;
  width: 100%;
  word-break: break-word;
  overflow: hidden;

  span {
    display: block;
    transform: translateY(-100%);
    animation: ${appearFromTop} 0.5s ease-out forwards;
    animation-delay: 0.8s;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    text-align: left;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 520px;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 16px;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  button {
    margin-top: 16px;
    opacity: 0;
    animation: ${fadeFromLeft} 1s linear forwards;
    animation-delay: 0.5s;

    span {
      opacity: 0;
      animation: ${fadeFromLeft} 1s linear forwards;
      animation-delay: 1s;
    }
    &:nth-child(2) {
      @media ${({ theme }) => theme.breakpoints.tablet} {
        margin-left: 24px;
        animation-delay: 1s;
        span {
          opacity: 0;
          animation: ${fadeFromLeft} 1s linear forwards;
          animation-delay: 1.5s;
        }
      }
    }
  }
`;

export const Gradient = styled.div`
  background: ${({ theme }) => `linear-gradient(
    180deg,
    rgba(36, 36, 36, 0) 0%, ${theme.colors.black} 100%)`};

  width: 100vw;
  height: 193px;
  position: absolute;
  left: 0px;
  top: calc(max(100vh, 100vw) - 300px);

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

export const Dropdown = styled.div`
  z-index: 2;
  width: 100%;
  opacity: 0;
  animation: ${opacityTo100} 0.5s linear forwards;
  animation-delay: 1s;
`;

export const HomePage = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: calc(max(100vh, 100vw) - 191px) 1fr;
  align-items: end;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr 220px;
    grid-template-rows: auto;
    padding: 80px 7.2% 40px;
    align-items: start;
  }
`;

export const MovieList = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 104px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 220px;
    margin-top: 0;
  }
`;

export const List = styled.div`
  padding: 0 24px;
  box-sizing: border-box;
  width: 100vw;
  margin-top: 8px;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0;
    width: 100%;
  }

  &.loading {
    &::after {
      content: '';
      position: absolute;
      background: transparent;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    animation: ${breatheOpacity} 0.8s linear alternate infinite;
  }
`;
