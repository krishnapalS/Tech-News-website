import { useState, useEffect } from "react"
import { Overlay, ModalContainer } from "src/styles/Modal.style"

const Modal = (props: any) => {
  const { hideStory, activeStory } = props
  const [currentStory, setCurrentStory] = useState({
    id: 0,
    title: "",
    text: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = `https://hacker-news.firebaseio.com/v0/item/${activeStory}.json`
      const response = await fetch(fetchUrl)
      const responseJson = await response.json()

      setCurrentStory(responseJson)
    }

    fetchData()
  }, [activeStory])

  const handleClick = (e: any) => {
    // @ts-ignore
    if (modalRef.current.contains(e.target)) {
      return
    }
    hideStory()
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  return (
    <>
      <Overlay>
        <ModalContainer>
          {currentStory.id !== 0 ? (
            <>
              <h1>{currentStory.title}</h1>
              <article
                dangerouslySetInnerHTML={{ __html: currentStory.text }}
              />
            </>
          ) : (
            <div>Loading...</div>
          )}
        </ModalContainer>
      </Overlay>
    </>
  )
}

export default Modal
