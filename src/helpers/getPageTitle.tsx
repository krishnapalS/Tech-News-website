const getPageTitle = (pid: string) => {
  switch (pid) {
    case "new":
      return "HN – New Stories"
      break
    case "ask":
      return "HN – Ask HN"
      break
    case "show":
      return "HN – Show HN"
      break
    case "jobs":
      return "HN – Jobs"
      break
    default:
      return "HN"
      break
  }
}

export default getPageTitle
