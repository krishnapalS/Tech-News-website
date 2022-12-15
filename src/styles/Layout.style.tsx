import styled from "styled-components"
import * as style from "src/styles/style"

export const LayoutOuter = styled.div`
  display: grid;
  place-items: center;
`

export const LayoutInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  padding: 48px;

  aside {
    display: flex;
    flex-direction: column;
    flex: 0 0 200px;
    margin-right: 64px;
    min-height: 50px;

    @media ${style.deviceSize.tablet} {
      margin-right: 0;
      margin-bottom: 24px;
      border-bottom: 1px solid ${({ theme }) => theme.background.l4};
      flex-direction: row;
      flex-basis: 0;
      justify-content: space-between;
    }

    @media ${style.deviceSize.phablet} {
      padding-bottom: 12px;
      margin-bottom: 32px;
    }
  }

  main {
    display: block;
    width: 100%;
    flex-grow: 1;
  }

  @media ${style.deviceSize.tablet} {
    flex-direction: column;
    padding: 24px;
  }

  @media ${style.deviceSize.phablet} {
    padding: 16px;
  }
`
