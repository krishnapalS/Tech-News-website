import styled from "styled-components"
import * as style from "src/styles/style"

export const NavContainer = styled.nav`
  position: sticky;
  top: 48px;

  @media ${style.deviceSize.tablet} {
    position: inherit;
    margin-right: 48px;
  }

  @media ${style.deviceSize.phablet} {
    position: inherit;
    margin-right: 40px;
  }

  &.nav-item-view {
    @media ${style.deviceSize.phablet} {
      display: none;
    }
  }

  ul {
    @media ${style.deviceSize.tablet} {
      display: flex;
    }
  }
`

export const NavItem = styled.li`
  margin-bottom: 4px;

  @media ${style.deviceSize.tablet} {
    margin-left: 12px;
  }

  @media ${style.deviceSize.phablet} {
    margin-left: 6px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 6px;
    font-size: ${style.fontSize.sm};
    font-weight: ${style.fontWeight.medium};
    line-height: ${style.textLineHeight.normal};
    color: ${({ theme }) => theme.text.neutral.l4};
    cursor: pointer;
    transition: all 0.08s linear;

    svg {
      width: 16px;
      height: 16px;
      margin-right: 8px;
      margin-bottom: -1px;
      fill: currentColor;
      opacity: 0.8;

      @media ${style.deviceSize.tablet} {
        display: none;
      }
    }

    .suffix {
      @media ${style.deviceSize.phablet} {
        display: none;
      }
    }

    &:hover {
      color: ${({ theme }) => theme.text.neutral.l2};
      background-color: ${({ theme }) => theme.background.l2};
    }
  }

  &.active {
    a {
      color: ${({ theme }) => theme.text.navy.l1};
      background-color: ${({ theme }) => theme.background.l3};
    }
  }
`
