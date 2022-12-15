import styled from "styled-components"
import * as style from "src/styles/style"

export const StoriesWrapper = styled.ul`
  width: 100%;
`

export const LoadMorebutton = styled.button`
  ${style.LinkStyle};
  margin: 48px auto 64px auto;
  padding: 8px 16px;
  font-size: ${style.fontSize.sm};
  font-weight: ${style.fontWeight.medium};
  line-height: ${style.textLineHeight.normal};
  color: ${({ theme }) => theme.text.neutral.l3};
  cursor: pointer;
  transition: all 0.08s linear;

  @media ${style.deviceSize.phablet} {
    border: 1px solid ${({ theme }) => theme.background.l4};
  }
`
