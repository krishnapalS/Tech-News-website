import styled from "styled-components"
import * as style from "src/styles/style"

export const ControllerContainer = styled.div`
  display: flex;
`

export const InputText = styled.input`
  width: 100%;
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.background.l9};
  margin-bottom: 48px;
  font-size: ${style.fontSize.sm};
  line-height: ${style.textLineHeight.normal};
  color: ${({ theme }) => theme.text.neutral.l1};
  transition: all 0.12s linear;

  @media ${style.deviceSize.phablet} {
    font-size: ${style.fontSize.base};
  }

  &:focus {
    outline: none;
    border-color: ${style.hsl("blue", 64)};
  }

  &::placeholder {
    @media ${style.deviceSize.phablet} {
      font-size: ${style.fontSize.sm};
    }
  }
`

export const TopFiller = styled.div`
  width: 100%;
  height: 26px;
  border-bottom: 1px solid ${({ theme }) => theme.background.l9};
  margin-bottom: 48px;

  @media ${style.deviceSize.tablet} {
    display: none;
  }
`

export const DarkModeButton = styled.div`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  margin-left: 16px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.background.l2};
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.background.l9};
  }

  @media ${style.deviceSize.tablet} {
    position: absolute;
    top: 24px;
    right: 24px;
  }

  @media ${style.deviceSize.phablet} {
    top: 16px;
    right: 16px;
  }
`
