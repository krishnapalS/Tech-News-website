import { useState } from "react"

const useStoryViewer = () => {
  const [modalOn, setModalOn] = useState(false)
  const [activeStory, setActiveStory] = useState("")

  const showStory = (id: string) => {
    setActiveStory(id)
    setModalOn(true)
  }

  const hideStory = () => setModalOn(false)

  return {
    modalOn,
    showStory,
    hideStory,
    activeStory,
  }
}

export default useStoryViewer
