const urlRegex = /\/\/[www.]*(.*?)\//

const shortenUrl = (url: string) => {
  if (url.slice(-1) !== "/") {
    url += "/"
  }
  const match = url.match(urlRegex)
  return match && match[1]
}

export default shortenUrl
