import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import StoryGallery from '../StoryGallery/StoryGallery'
import ArticleDetail from '../ArticleDetail/ArticleDetail'
import retrieveTopStories from '../utils/apiCalls'

function App() {
  const [topStories, setTopStories] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    retrieveTopStories()
    .then(data => setTopStories(data.results))
    .catch(error => setError('Sorry, there seems to be an issue retrieving the stories'))
  }, [setTopStories]);

  const findStoryByName = (name) => {
    const foundStory = topStories.find(story => {
      return story.title === name
    })
    return foundStory
  }

  return (
    <>
    <h1> Popular times </h1>
    <Switch>
      <Route path='/:title' render={({ match }) => {
        const { title } = match.params

      }} />
      <Route exact path ='/' render={() => {
        return(
          <StoryGallery
          topStories={topStories}
          error={error}
          />
        )
      }} />
    </Switch>
    </>
  )
}

export default App;
