import {
  ControllerContainer,
  InputText,
  TopFiller,
  DarkModeButton,
} from "src/styles/StoryController.style"
import IconSun from "src/assets/icons/IconSun.svg"
import IconMoon from "src/assets/icons/IconMoon.svg"

const StoryController = (props: any) => {
  const { searchTerm, setSearchTerm, darkMode, setDarkMode, itemView } = props

  const handleCheckbox = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ControllerContainer>
      {itemView ? (
        <TopFiller />
      ) : (
        <InputText
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
      )}

      <DarkModeButton onClick={handleCheckbox}>
        {darkMode ? <IconSun /> : <IconMoon />}
      </DarkModeButton>
    </ControllerContainer>
  )
}

export default StoryController
