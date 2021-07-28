import { Router, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import retrieveTopStories from '../utils/apiCalls'

const StoryGallery = () => {
  const [topStories, setTopStories] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    retrieveTopStories()
    .then(data => setTopStories(data.results))
    .catch(error => setError('Sorry, there seems to be an issue retrieving the stories'))
  }, [setTopStories]);

  const allStories = (data) => {
    const stories = data.map(story => {
      return (
        <Card
        key={story.published_date}
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
