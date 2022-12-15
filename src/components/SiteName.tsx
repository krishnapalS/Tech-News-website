import Link from "next/link"
import { SiteNameContainer } from "src/styles/SiteName.style"
import HnLogo from "src/assets/images/HnLogo.svg"

const SiteName = () => {
  return (
    <SiteNameContainer>
      <Link href="/">
        <a>
          <HnLogo />
          <s />
        </a>
      </Link>
    </SiteNameContainer>
  )
}

export default SiteName
