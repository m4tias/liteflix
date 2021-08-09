import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Selector = styled.div`
  text-align: center;
  cursor: pointer;
  span {
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 4px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.white};
  }

  svg {
    width: 13px;
    margin-left: 10px;
    margin-bottom: 3px;
  }
`;

export const Options = styled.div`
  position: absolute;
  width: 100%;
  transition: transform 0.1s linear;
  transform-origin: center top;
  transform: scaleY(1);

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 241px;
    right: calc(${({ arrowPosition }) => arrowPosition} - 26px);
    margin-top: 10px;

    &::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      right: 26px;
      top: -4px;
      background: ${({theme}) => theme.colors.black};
      transform: rotate(45deg);
    }
  }

  ${({ isOpen }) =>
    !isOpen &&
    css`
      transform: scaleY(0);
      transition: none;
    `}

  ul {
    width: 100%;
    background: ${({theme}) => theme.colors.black};
    padding: 16px 24px;
    list-style: none;
    box-sizing: border-box;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      padding: 8px 24px;
    }

    li {
      position: relative;
      margin: 16px 0;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 4px;
      color: ${({theme}) => theme.colors.white};
      text-align: left;
      cursor: pointer;

      svg {
        display: none;
        position: absolute;
        right: 0;
        width: 12px;
        margin-top: 1px;
      }

      &.selected {
        font-weight: 700;
        svg {
          display: inline-block;
        }
      }
    }
  }
`;
