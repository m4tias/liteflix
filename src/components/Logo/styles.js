import styled, { css } from 'styled-components';
import { breathe, explote, opacityTo100 } from '../../animations';
import { STATES } from '../../constants';

export const Container = styled.div`
  width: auto;
  height: 28px;

  svg {
    width: 98px;
    height: 28px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 34px;

    svg {
      height: 34px;
      width: 113px;
    }
  }

  ${(props) =>
    props.animation &&
    css`
       {
        width: 50vw;
        max-width: 700px;
        height: auto;
      }
    `};

  ${(props) =>
    props.animation === STATES.LOADING &&
    css`
       {
        animation: ${breathe} 5s linear infinite,
          ${opacityTo100} 2s linear forwards;
      }
    `};

  ${(props) =>
    props.animation === STATES.LOADED &&
    css`
       {
        animation: ${explote} 1s linear forwards;
      }
    `};

`;
