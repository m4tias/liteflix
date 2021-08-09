import styled, { css } from 'styled-components';
import { opacityTo100 } from '../../animations';

function movieContainerDelay() {
  let string = '';
  for (let i = 0; i < 4; i++) {
    string += `
      &:nth-child(${i + 1}) {
        transition-delay: ${0.5 + i / 8}s;
       }
    `;
  }
  return string;
}

export const Ellipse = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  background: rgba(36, 36, 36, 0.5);
  border: 1px solid ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  opacity: 0;
  transition: opacity 1s linear;

  svg {
    width: 19.2px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    svg {
      width: 16px;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.black};
      svg {
        fill: ${({ theme }) => theme.colors.black};
        path {
          stroke: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`;

export const Title = styled.h1`
  position: absolute;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: normal;
  opacity: 0;
  transition: opacity 1s linear;
  bottom: 32px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    bottom: 14px;
  }
`;

export const ScoreAndYear = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 24px;
  padding: 0 24px;
  box-sizing: border-box;
  opacity: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 12px;

  div:nth-child(1) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  svg {
    margin-right: 6px;
    margin-bottom: 1px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    bottom: 16px;
    padding: 0 16px;
  }
`;

export const OpacityHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(36, 36, 36, 0.7);
  opacity: 0;
  transition: opacity 0.3s linear;
`;

export const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 126px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%);
  border-radius: 4px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 220px;
    height: 100px;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 172px;
  margin: 24px 0;
  text-align: center;
  box-sizing: border-box;
  padding-top: 53px;
  overflow: hidden;
  border-radius: 4px;
  opacity: ${({ visible }) => (visible ? '1' : 0)};
  top: ${({ visible }) => (!visible ? '20px' : 0)};
  transition: opacity 0.4s linear, top 0.4s linear;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 146px;
    ${movieContainerDelay()}
  }

  ${Ellipse}, ${Title} {
    ${({ visible }) =>
      visible &&
      css`
        opacity: 1;
        @media ${({ theme }) => theme.breakpoints.tablet} {
          transition-delay: 1.5s;
        }
      `}
  }

  &:hover {
    ${OpacityHover} {
      opacity: 1;
    }

    ${Gradient} {
      transition: opacity 0.3s linear;
      opacity: 0;
    }

    ${Title}, ${Ellipse}, ${ScoreAndYear} {
      animation: ${opacityTo100} 0.3s linear forwards;
    }
    ${Title} {
      bottom: 63px;
      left: 60px;
      text-align: left;
      width: calc(100% - 60px);
      @media ${({ theme }) => theme.breakpoints.tablet} {
        bottom: 51px;
        left: 52px;
        width: calc(100% - 52px);
      }
    }
    ${Ellipse} {
      width: 24px;
      height: 24px;
      position: absolute;
      left: 24px;
      bottom: 61px;
      @media ${({ theme }) => theme.breakpoints.tablet} {
        bottom: 49px;
        left: 16px;
      }
      svg {
        width: 9.6px;
      }
    }
  }
`;

export const BgImg = styled.div`
  background: url('${(props) => props.img}') top center / cover;
  background-color: rgba(36, 36, 36, 0.7);
  width: 100%;
  height: 172px;
  position: absolute;
  top: 0;
`;
