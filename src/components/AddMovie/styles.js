import styled from 'styled-components';

export const AddButton = styled.button`
  border: none;
  padding: 0;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  font-family: inherit;
  position: relative;

  span {
    font-weight: 400;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.colors.white};
    font-family: inherit;
    display: inline-block;
    font-size: 16px;
    line-height: 16px;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: 22px;
      line-height: 22px;
    }
  }

  svg {
    height: 14px;
    display: inline-block;
    margin-right: 8px;
    @media ${({ theme }) => theme.breakpoints.tablet} {
      margin-right: 16px;
    }
  }
`;

export const ModalTitle = styled.h1`
  font-size: 22px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 72px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: 48px;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const Progress = styled.div`
  box-sizing: border-box;
  height: 81px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 100px;
  }
`;

export const ProgressPercentage = styled.div`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  margin: 18px 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 20px 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 8px;
    transition: width 0.3s linear;
    width: ${({ progress }) => progress}%;
    background: ${({ theme }) => theme.colors.primary};

    @media ${({ theme }) => theme.breakpoints.tablet} {
      top: -3px;
      height: 10px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: right;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  }
`;

export const CancelButton = styled.button`
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: right;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  outline: none;
  background: none;
  padding: 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const FileDropper = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  height: 81px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.uploading {
    display: none;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 4px;
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    height: 16px;
    margin-right: 16px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 100px;
    span {
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;

      &::after {
        content: ' O ARRASTRALO Y SOLTALO AQUÍ';
        font-weight: 400;
      }
    }
  }
`;

export const Input = styled.input`
  font-family: inherit;
  display: block;
  margin: 56px auto 0;
  width: 248px;
  height: 24px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 0 0 8px 0;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.white};
  background: none;
  box-sizing: border-box;
  text-transform: uppercase;
  font-weight: 700;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 48px auto 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  button {
    &:nth-child(1) {
      margin: 96px 0 0 0;
    }
    &:nth-child(2) {
      margin: 24px 0;
    }
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    button {
      &:nth-child(1) {
        margin: 48px 0;
      }
      &:nth-child(2) {
        display: none;
      }
    }
  }
`;

export const CloseCross = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 15px;
  height: 15px;
  border: none;
  background: none;
  outline: none;
  padding: 0;
  display: none;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    width: 20px;
    background: ${({ theme }) => theme.colors.white};
    height: 1px;
    position: absolute;
    &:nth-child(1) {
      transform: rotate(-45deg);
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
  }
`;

export const LogoContainer = styled.div`
  margin-top: 64px;
  width: 100%;
  text-align: center;
  display: none;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
  }
`;

export const Congrats = styled.div`
  margin-top: 244px;
  letter-spacing: 4px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  h1 {
    font-size: 24px;
    line-height: 26px;
    margin: 0;
  }

  h2 {
    font-size: 20px;
    line-height: 32px;
    margin-top: 32px;
    font-weight: 400;
    margin-bottom: 37px;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 72px;

    h2 {
      line-height: 24px;
      margin-top: 24px;
      margin-bottom: 44px;
    }
  }
`;

export const AnimatedContainer = styled.div`
  opacity: 0;
  display: none;
  transition: opacity 0.5s linear, display 0.5s;
  transition-delay: all 0.5s;
  &.visible {
    display: block;
    opacity: 1;
  }
`;
