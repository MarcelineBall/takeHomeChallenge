import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import mockData from '../../mockData'
import retrieveTopStories from '../../utils/apiCalls'

const StoryGallery = () => {
  const [topStories, setTopStories] = useState('')
  useEffect(() => {
    retrieveTopStories()
      .then(data => setTopStories(data))
      .catch(error => setError('Sorry, there seems to be an issue retrieving the stories'))
  })
  const stories = mockData.map(story => {
    return (
      <Card
      key={Date.now()}
      section={story.section}
      title={story.title}
      abstract={story.abstract} />
    )
  })
  return(
    stories
  )
}

export default StoryGallery
