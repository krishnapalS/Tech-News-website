import Link from "next/link"
import {
  StoryWrapper,
  StoryInfo,
  StoryTitle,
  Url,
  StoryDetailsContainer,
} from "src/styles/Story.style"
import shortenUrl from "src/helpers/shortenUrl"
import dateFormatter from "src/helpers/dateFormatter"

const StoryDetails = ({ data }: any) => {
  if (data) {
    return (
      <StoryDetailsContainer>
        <li>
          <strong>{data.score}</strong>&nbsp;points
        </li>
        <li>
          <Link href={`/s/${data.id}`}>
            <a>
              <strong>{data.kids ? data.kids.length : 0}</strong>&nbsp;comments
            </a>
          </Link>
        </li>
        <li>{dateFormatter(data.time)}</li>
        <li>
          by&nbsp;<strong>{data.by}</strong>
        </li>
      </StoryDetailsContainer>
    )
  } else {
    return null
  }
}

const Story = (props: any) => {
  const { data } = props

  if (data) {
    if ("url" in data) {
      return (
        <StoryWrapper>
          <StoryTitle>
            <a href={data.url} target="_blank" rel="noreferrer">
              {"title" in data && data.title}
            </a>
          </StoryTitle>
          <StoryInfo>
            <Url>{data.url && shortenUrl(data.url)}</Url>
          </StoryInfo>
          <StoryDetails data={data} />
        </StoryWrapper>
      )
    } else {
      return (
        <StoryWrapper>
          <StoryTitle>
            <Link href={`/s/${data.id}`}>{data.title}</Link>
          </StoryTitle>
          <StoryDetails data={data} />
        </StoryWrapper>
      )
    }
  } else {
    return null
  }
}

export default Story
