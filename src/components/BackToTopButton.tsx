import { useState, useEffect } from "react"
import { UpButton } from "src/styles/BackToTopButton.style"
import IconArrowUp from "src/assets/icons/IconArrowUp.svg"

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false)

  const checkScrollTop = () => {
    if (!showButton && window.pageYOffset > 400) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  const scrollTop = (e: any) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
  }, [])

  return (
    <UpButton onClick={scrollTop} showButton={showButton}>
      <IconArrowUp />
    </UpButton>
  )
}

export default BackToTopBtn
