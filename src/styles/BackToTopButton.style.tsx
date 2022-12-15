import styled, { css } from "styled-components"
import * as style from "src/styles/style"

export const UpButton = styled.button<{ showButton: boolean }>`
  display: grid;
  place-items: center;
  position: fixed;
  width: 40px;
  height: 40px;
  right: 48px;
  bottom: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background.l4};
  transition: background-color 0.08s linear;

  @media ${style.deviceSize.tablet} {
    right: 24px;
    bottom: 24px;
  }

  @media ${style.deviceSize.phablet} {
    width: 32px;
    height: 32px;
    right: 16px;
    bottom: 16px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.background.l5};
  }

  svg {
    fill: ${({ theme }) => theme.background.l1};
    width: 64%;
    height: 64%;
  }

  ${(props) => {
    if (props.showButton) {
      return css`
        display: grid;
      `
    } else {
      return css`
        display: none;
      `
    }
  }}
`
