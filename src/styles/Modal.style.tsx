import styled from "styled-components"
import * as style from "src/styles/style"

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
`

export const ModalContainer = styled.div`
  margin: 48px auto;
  max-width: 640px;
  min-height: 50vh;
  padding: 32px;
  border-radius: 6px;
  background-color: #fff;
  color: ${({ theme }) => theme.text.neutral.l1};

  h1 {
    font-family: ${style.fontSet.heading};
    font-size: ${style.fontSize.lg};
    font-weight: ${style.fontWeight.bold};
    line-height: ${style.textLineHeight.tight};
    margin-bottom: 12px;
  }
`
