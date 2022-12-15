const baseUrl = "https://hacker-news.firebaseio.com/v0/"
const storyUrl = `${baseUrl}item/`

const getStories = async (path: string) => {
  let fetchUrl: string = ''

  switch (path) {
    case "/":
      fetchUrl = `${baseUrl}topstories.json`
      break;
    case "/new":
      fetchUrl = `${baseUrl}newstories.json`
      break;
    case "/ask":
      fetchUrl = `${baseUrl}askstories.json`
      break;
    case "/show":
      fetchUrl = `${baseUrl}showstories.json`
      break;
    case "/jobs":
      fetchUrl = `${baseUrl}jobstories.json`
      break;
    default:
      break;
  }


  const response = await fetch(fetchUrl)
  const responseJson = await response.json()


  const stories = await Promise.all(
    responseJson.map(async (storyNumber: number) => {
      const storyResponse = await fetch(`${storyUrl}${storyNumber}.json`)
      return storyResponse.json()
    })
  ).catch((error) => {
   console.log(error)
  })
  return stories
}

export default getStories
