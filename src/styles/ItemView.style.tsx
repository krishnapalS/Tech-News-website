import styled from "styled-components"
import * as style from "src/styles/style"

export const ItemContainer = styled.div`
  margin-bottom: 48px;
  color: ${({ theme }) => theme.text.neutral.l1};

  h1 {
    font-family: ${style.fontSet.heading};
    font-size: ${style.fontSize.xl2};
    font-weight: ${style.fontWeight.bold};
    line-height: ${style.textLineHeight.tight};
    margin-bottom: 12px;
  }

  .story-details {
    display: flex;
    margin-bottom: 32px;
    font-size: ${style.fontSize.sm};
    color: ${({ theme }) => theme.text.neutral.l2};

    li {
      margin-right: 16px;
      display: flex;
      align-items: center;

      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 12px;
        background-color: ${({ theme }) => theme.background.l5};
        margin-left: 16px;
      }

      &:last-of-type::after {
        display: none;
      }
    }
  }

  article {
    padding: 24px;
    border-radius: 4px;
    font-size: ${style.fontSize.base};
    line-height: ${style.textLineHeight.loose};
    background-color: ${({ theme }) => theme.background.l2};

    p {
      margin: 1em 0;
    }
  }
`

export const ItemComments = styled.section`
  color: ${({ theme }) => theme.text.neutral.l1};

  h2 {
    font-family: ${style.fontSet.heading};
    font-size: ${style.fontSize.lg};
    font-weight: ${style.fontWeight.bold};
    margin-bottom: 24px;
  }

  & > ul {
    padding-left: 0;
  }
`
export const ItemLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: ${style.fontSize.sm};
  word-break: break-all;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text.neutral.l3};
  background-color: ${({ theme }) => theme.background.l2};

  &:hover {
    background-color: ${({ theme }) => theme.background.l3};
  }

  svg {
    fill: ${({ theme }) => theme.text.neutral.l3};
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-right: 12px;
  }
`
