import styled from "styled-components"
import * as style from "src/styles/style"

export const SiteNameContainer = styled.h1`
  margin-bottom: 48px;

  @media ${style.deviceSize.phablet} {
    display: grid;
    place-items: center;
    margin: 0;
  }

  a {
    display: flex;
    align-items: baseline;
    color: ${({ theme }) => theme.background.l9};
    transition: opacity 0.08s;

    &:hover {
      opacity: 0.8;
    }
  }

  svg {
    width: 48px;
    fill: currentColor;

    @media ${style.deviceSize.tablet} {
      width: 40px;
    }

    @media ${style.deviceSize.phablet} {
      width: 32px;
    }
  }

  s {
    display: block;
    width: 100%;
    height: 1px;
    margin-top: -1px;
    margin-left: -2px;
    background-color: currentColor;

    @media ${style.deviceSize.tablet} {
      display: none;
    }
  }
`
