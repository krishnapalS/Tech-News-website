import { useState } from "react"
import { StoriesWrapper, LoadMorebutton } from "src/styles/Stories.style"
import Story from "src/components/Story"

const Stories = (props: any) => {
  const { data, searchTerm } = props
  const [itemCount, setItemCount] = useState(50)

  const handleLoadMoreClick = (e: any) => {
    e.preventDefault()
    setItemCount(itemCount + 50)
  }

  return (
    <StoriesWrapper>
      {data &&
        data
          .filter((d: any) => {
            if (d) {
              return (
                d.title.toLowerCase().search(searchTerm.toLowerCase()) != -1
              )
            }
          })
          .slice(0, itemCount)
          .map((item: any, index: number) => {
            return <Story key={item ? item.id : index} data={item && item} />
          })}
      {data && itemCount < data.length && (
        <LoadMorebutton onClick={handleLoadMoreClick}>
          Load more stories..
        </LoadMorebutton>
      )}
    </StoriesWrapper>
  )
}

export default Stories
