import { useRouter } from "next/router"
import Layout from "src/components/Layout"
import SiteName from "src/components/SiteName"
import StoryController from "src/components/StoryController"
import Comments from "src/components/Comments"
import dateFormatter from "src/helpers/dateFormatter"
import { NavContainer, NavItem } from "src/styles/Navigation.style"
import {
  ItemContainer,
  ItemComments,
  ItemLink,
} from "src/styles/ItemView.style"
import IconArrowLeft from "src/assets/icons/IconArrowLeft.svg"
import IconLink from "src/assets/icons/IconLink.svg"

const ItemView = (props: any) => {
  const { data, darkMode, setDarkMode } = props
  const router = useRouter()

  return (
    <Layout>
      <aside>
        <SiteName />
        <NavContainer className="nav-item-view">
          <NavItem as="div">
            <a onClick={() => router.back()}>
              <IconArrowLeft />
              <span>Go back</span>
            </a>
          </NavItem>
        </NavContainer>
      </aside>
      <main>
        <StoryController
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          itemView
        />
        <ItemContainer>
          <h1>{data.title}</h1>
          <ul className="story-details">
            <li>
              Posted&nbsp;{dateFormatter(data.time)}&nbsp;by&nbsp;
              <strong>{data.by}</strong>
            </li>
            <li>
              <strong>{data.score}</strong>&nbsp;points
            </li>
          </ul>
          {data.url && (
            <ItemLink href={data.url} target="_blank">
              <IconLink />
              <span>{data.url}</span>
            </ItemLink>
          )}
          {data.text && (
            <article dangerouslySetInnerHTML={{ __html: data.text }} />
          )}
        </ItemContainer>
        <ItemComments>
          <h2>
            <strong>{data.kids ? data.kids.length : 0}</strong>&nbsp;comments
          </h2>
          <Comments data={data.kids} />
        </ItemComments>
      </main>
    </Layout>
  )
}

export default ItemView
