import Card from '../Card/Card'
import  './StoryGallery.css'

const StoryGallery = ({ topStories, error }) => {

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
      <section className='storySection'>{allStories(topStories)}</section>
    </>
  )
}

export default StoryGallery
