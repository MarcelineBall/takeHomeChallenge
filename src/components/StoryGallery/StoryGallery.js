import { useState } from 'react'
import Card from '../Card/Card'
import mockData from '../../mockData'

const StoryGallery = () => {
  const [topStories, setTopStories] = useState('')
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
