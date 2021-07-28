import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import mockData from '../../mockData'
import retrieveTopStories from '../utils/apiCalls'

const StoryGallery = () => {
  const [topStories, setTopStories] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    retrieveTopStories()
      .then(data => setTopStories(data.results))
      .catch(error => setError('Sorry, there seems to be an issue retrieving the stories'))
  }, [])
  const stories = topStories.map(story => {
    return (
      <Card
      key={Date.now()}
      section={story.section}
      title={story.title}
      abstract={story.abstract} />
    )
  })
  return(
    <>
    {stories &&
      stories}
    </>
  )
}

export default StoryGallery
