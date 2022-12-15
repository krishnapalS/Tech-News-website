import useSWR from "swr"
import dateFormatter from "src/helpers/dateFormatter"
import {
  CommentsContainer,
  CommentContainer,
  Commenter,
  LoadingIndicator,
} from "src/styles/Comments.style"

const baseUrl = `https://hacker-news.firebaseio.com/v0/item/`

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Comment = ({ commentId }: any) => {
  const { data, error } = useSWR(`${baseUrl}${commentId}.json`, fetcher)

  if (error) return <></>
  if (!data) return <LoadingIndicator>Loading..</LoadingIndicator>
  if (!data.text) return <></>

  return (
    <>
      <CommentContainer>
        <article dangerouslySetInnerHTML={{ __html: data.text }} />
        <Commenter>
          Posted&nbsp;{dateFormatter(data.time)}&nbsp;by&nbsp;
          <strong>{data.by}</strong>
        </Commenter>
        {data.kids && (
          <details open={true}>
            <summary>
              <strong>{data.kids ? data.kids.length : 0}</strong>&nbsp;
              {data?.kids?.length > 1 ? "comments" : "comment"}
            </summary>
            <Comments data={data.kids} />
          </details>
        )}
      </CommentContainer>
    </>
  )
}

const Comments = (props: any) => {
  const { data } = props

  return (
    <>
      <CommentsContainer>
        {data &&
          data.map((commentId: any) => {
            return <Comment key={commentId} commentId={commentId} />
          })}
      </CommentsContainer>
    </>
  )
}

export default Comments
