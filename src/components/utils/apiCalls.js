const retrieveTopStories = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=qJlgTssCBQkBGQuuF5xwr0qG6WyGdAGs')
  .then(response => {
    if(!response.ok) {
      throw new Error('Unable to retrieve data')
    } else {
      return response.json()
    }
  })
}

export default retrieveTopStories
