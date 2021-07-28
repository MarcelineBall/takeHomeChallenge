import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import StoryGallery from '../StoryGallery/StoryGallery'
import retrieveTopStories from '../utils/apiCalls'

function App() {
  const [topStories, setTopStories] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    retrieveTopStories()
    .then(data => setTopStories(data.results))
    .catch(error => setError('Sorry, there seems to be an issue retrieving the stories'))
  }, [setTopStories]);

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
