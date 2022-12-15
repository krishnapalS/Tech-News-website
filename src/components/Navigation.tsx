import Link from "next/link"
import { useRouter } from "next/router"
import { NavContainer, NavItem } from "src/styles/Navigation.style"
import IconGraphUp from "src/assets/icons/IconGraphUp.svg"
import IconHandUp from "src/assets/icons/IconHandUp.svg"
import IconIdCard from "src/assets/icons/IconIdCard.svg"
import IconMegaphone from "src/assets/icons/IconMegaphone.svg"
import IconSparkle from "src/assets/icons/IconSparkle.svg"


const menu = [
  { title: "Top", suffix: "stories", path: "/" },
  { title: "New", suffix: "stories", path: "/new" },
  { title: "Ask", suffix: "HN", path: "/ask" },
  { title: "Show", suffix: "HN", path: "/show" },
  { title: "Jobs", suffix: "", path: "/jobs" },
  { title: "🔍  Advanced Search", suffix: "", path: "https://hacker-news-stories-search.netlify.app/" },
]


const getMenuIcon = (path: string) => {
  switch (path) {
    case "/":
      return <IconGraphUp />
      break
    case "/new":
      return <IconSparkle />
      break
    case "/ask":
      return <IconHandUp />
      break
    case "/show":
      return <IconMegaphone />
      break
    case "/jobs":
      return <IconIdCard />
      break
    default:
      break
  }
}

const Navigation = () => {
  const router = useRouter()
  const { pid } = router.query
  const path = pid ? pid : ""

  return (
    <NavContainer>
      <ul>
        {menu.map((item, index) => {
          return (
            <NavItem
              key={index}
              className={`/${path}` === item.path ? `active` : ``}
            >
              <Link href={item.path}>
                <a>
                  {getMenuIcon(item.path)}
                  <span className="menu">{item.title}</span>
                  <span className="suffix">&nbsp;{item.suffix}</span>
                </a>
              </Link>
            </NavItem>
          )
        })}
      </ul>
    </NavContainer>
  )
}

export default Navigation
