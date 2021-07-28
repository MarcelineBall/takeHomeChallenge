import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import mockData from '../../mockData'
import retrieveTopStories from '../utils/apiCalls'

const StoryGallery = () => {
  const [topStories, setTopStories] = useState([])
  const [error, setError] = useState('')
  const [storyList, setStoryList] = useState([])

  useEffect(() => {
    retrieveTopStories()
    .then(data => setTopStories(data.results))
    .catch(error => setError('Sorry, there seems to be an issue retrieving the stories'))
  }, [setTopStories]);

  const allStories = (data) => {
    const stories = data.map(story => {
      return (
        <Card
        key={Date.now()}
        section={story.section}
        title={story.title}
        abstract={story.abstract} />
      )
    })
    return stories
  }

  return(
    <>
      {error &&
      <h2>{error}</h2>}
      <section>{allStories(topStories)}</section>
    </>
  )
}

export default StoryGallery
