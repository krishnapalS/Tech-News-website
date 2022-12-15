import { useState } from "react"
import Layout from "src/components/Layout"
import SiteName from "src/components/SiteName"
import Navigation from "src/components/Navigation"
import StoryController from "src/components/StoryController"
import Stories from "src/components/Stories"

const ListView = (props: any) => {
  const { data, darkMode, setDarkMode } = props
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Layout>
      <aside>
        <SiteName />
        <Navigation />
      </aside>
      <main>
        <StoryController
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Stories data={data} searchTerm={searchTerm} />
      </main>
    </Layout>
  )
}

export default ListView
