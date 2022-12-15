import styled from "styled-components"
import * as style from "src/styles/style"

export const StoryWrapper = styled.li`
  width: 100%;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.background.l4};
  margin-bottom: 24px;

  @media ${style.deviceSize.phablet} {
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`

export const StoryTitle = styled.h2`
  font-family: ${style.fontSet.heading};
  font-size: ${style.fontSize.lg};
  font-weight: ${style.fontWeight.bold};
  line-height: ${style.textLineHeight.tight};
  color: ${({ theme }) => theme.text.neutral.l1};
  word-break: break-word;

  @media ${style.deviceSize.phablet} {
    font-size: ${style.fontSize.base};
  }

  a {
    border-bottom: 1px solid rgba(255, 255, 255, 0);
    padding-bottom: 2px;
    transition: all 0.12s;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid currentColor;
    }

    &:visited {
      color: ${style.hsl("navy", 64)};
    }
  }
`

export const StoryInfo = styled.div`
  margin-top: 4px;

  @media ${style.deviceSize.phablet} {
    margin-top: 2px;
  }
`

export const Url = styled.span`
  font-size: ${style.fontSize.sm};
  color: ${({ theme }) => theme.text.neutral.l3};

  @media ${style.deviceSize.phablet} {
    font-size: ${style.fontSize.xs};
  }
`

export const StoryDetailsContainer = styled.ul`
  display: flex;
  margin-top: 20px;
  font-size: ${style.fontSize.sm};
  color: ${({ theme }) => theme.text.neutral.l2};

  @media ${style.deviceSize.phablet} {
    font-size: ${style.fontSize.xs};
  }

  li {
    margin-right: 12px;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 12px;
      background-color: ${({ theme }) => theme.background.l4};
      margin-left: 12px;
    }

    &:last-of-type {
      @media ${style.deviceSize.phablet} {
        display: none;
      }
      &::after {
        display: none;
      }
    }

    &:nth-child(3)::after {
      @media ${style.deviceSize.phablet} {
        display: none;
      }
    }

    a {
      ${style.LinkStyle}
    }

    strong {
      font-weight: ${style.fontWeight.semibold};
    }
  }
`
