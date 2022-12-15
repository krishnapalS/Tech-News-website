import { LayoutOuter, LayoutInner } from "src/styles/Layout.style"
import BackToTopBtn from "src/components/BackToTopButton"

const Layout = (props: any) => {
  return (
    <>
      <LayoutOuter>
        <LayoutInner>{props.children}</LayoutInner>
      </LayoutOuter>
      <BackToTopBtn />
    </>
  )
}

export default Layout
