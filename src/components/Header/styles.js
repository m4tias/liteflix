import styled, { css, keyframes } from 'styled-components';
import {
  fadeInFromBottom,
  opacityTo100,
  fadeFromLeft,
  growFromLeft,
} from '../../animations';

const bellAnimation = keyframes`
  0% {
    opacity: 0.2;
    transform: rotate(7deg)
  }
  25% {
    opacity: 0.4;
    transform: rotate(0deg)
  }
  50% {
    opacity: 0.6;
    transform: rotate(-5deg)
  }
  75% {
    opacity: 0.8;
    transform: rotate(3deg)
  }
  100% {
    opacity: 1;
    transform: rotate(0)
  }
`;

export const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 24px;
  animation: ${fadeInFromBottom} 1s linear forwards;
  z-index: 11;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    align-items: center;
    justify-content: space-between;
    padding: 35px 7.2% 0;
    z-index: 10;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;

  button {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-grow: 1;
  }

  @media ${({ theme }) => theme.breakpoints._720} {
    button {
      display: block;
      opacity: 0;
      margin-left: 64px;
      animation: ${fadeFromLeft} 1s linear forwards;
      animation-delay: 1s;

      span {
        font-size: 18px;
        line-height: 18px;
      }

      svg {
        margin-right: 12px;
      }
    }
  }
`;

export const BurgerMenu = styled.button`
  order: -1;
  cursor: pointer;
  border: none;
  background: none;
  position: relative;
  width: 29px;
  height: 14px;

  ${({ whatIs }) =>
    whatIs === 'close-button' &&
    css`
      opacity: 0;
      animation: ${opacityTo100} 1s linear forwards;
      animation-delay: 1s;
    `}

  span {
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    opacity: 0;

    ${({ whatIs }) =>
      whatIs === 'burger'
        ? css`
            animation: ${growFromLeft('100%')} 0.4s linear forwards,
              ${opacityTo100} 1s linear forwards;

            &:nth-child(1) {
              animation-delay: 1s;
            }

            &:nth-child(2) {
              animation-delay: 1.2s;
              top: 6px;
            }

            &:nth-child(3) {
              top: 12px;
              animation: ${growFromLeft('19px')} 0.4s linear forwards,
                ${opacityTo100} 1s linear forwards;
              animation-delay: 1.3s;
            }
          `
        : css`
            top: 6px;
            width: 20px;
            animation: ${opacityTo100} 1s linear forwards;
            animation-delay: 1s;
            @media ${({ theme }) => theme.breakpoints.tablet} {
              width: 24px;
            }

            &:nth-child(1) {
              transform: rotate(-45deg);
            }

            &:nth-child(2) {
              width: 0;
            }

            &:nth-child(3) {
              transform: rotate(45deg);
            }
          `}
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    order: 0;
    margin-right: 39px;
    transition: margin-right;
    transition-delay: 0s;

    ${({ whatIs }) =>
      whatIs === 'close-button' &&
      css`
        position: absolute;
        right: 613px;
      `}

    span {
      left: auto;
      right: 0;
    }
  }
`;

export const UserProfile = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  a {
    height: 36px;
    @media ${({ theme }) => theme.breakpoints.tablet} {
      height: 40px;
    }
  }

  img {
    height: 100%;
    opacity: 0;
    animation: ${opacityTo100} 1s linear forwards;
    animation-delay: 1s;
  }
`;

export const Notification = styled.button`
  background: none;
  border: none;
  height: 26px;
  width: 26px;
  display: none;
  padding: 0;
  margin-right: 39px;
  position: relative;
  transform-origin: top center;
  opacity: 0;
  animation: ${bellAnimation} 1s linear forwards;
  animation-delay: 1s;

  &.new-notification {
    &::before {
      content: '';
      position: absolute;
      width: 9px;
      height: 9px;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 9px;
      top: 1px;
      right: 1px;
    }
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
  }
`;
