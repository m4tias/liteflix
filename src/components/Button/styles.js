import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.black};
  width: 248px;
  height: 56px;
  box-sizing: border-box;
  padding: 21px 0 17px;
  font-family: inherit;
  border: none;
  font-weight: 400;
  text-transform: uppercase;
  position: relative;

  span {
    display: block;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    svg {
      margin-right: 12px;
      height: 14px;
      width: 14px;
    }
  }

  &:not(:disabled)::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.white};
    width: 0;
    transition: width 0.2s linear;
  }

  &:hover {
    &::after {
      width: 100%;
    }
    span {
      margin-top: -2px;
    }
  }

  ${({ primary }) =>
    primary &&
    css`
      background: ${({ theme }) => theme.colors.white};

      &&::after {
        background: ${({ theme }) => theme.colors.primary};
      }

      &:disabled {
        opacity: 0.5;
        cursor: auto;
      }
      span {
        color: ${({ theme }) => theme.colors.black};
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background: rgba(36, 36, 36, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 20px 10px 16px;
    `}
`;
