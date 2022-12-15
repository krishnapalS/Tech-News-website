import styled from "styled-components"
import * as style from "src/styles/style"

export const CommentsContainer = styled.ul`
  padding-left: 16px;

  @media ${style.deviceSize.phablet} {
    padding-left: 1vw;
  }

  details {
    color: ${({ theme }) => theme.text.neutral.l3};

    summary {
      font-size: ${style.fontSize.sm};
      margin-bottom: 16px;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.text.neutral.l2};
      }
    }
  }
`

export const CommentContainer = styled.li`
  padding-left: 16px;
  margin-bottom: 48px;
  border-left: 2px solid ${({ theme }) => theme.background.l3};
  color: ${({ theme }) => theme.text.neutral.l1};
  line-height: ${style.textLineHeight.normal};

  @media ${style.deviceSize.phablet} {
    padding-left: 2vw;
  }

  p,
  pre {
    margin: 1em 0;
    white-space: normal;
  }

  a {
    text-decoration: underline;
    word-break: break-all;
  }
`

export const Commenter = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: ${style.fontSize.sm};
  color: ${({ theme }) => theme.text.navy.l3};
`

export const LoadingIndicator = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.background.l2};
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: ${style.fontSize.xs};
  color: ${({ theme }) => theme.text.neutral.l4};
`
