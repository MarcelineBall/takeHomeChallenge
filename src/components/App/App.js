import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import StoryGallery from '../StoryGallery/StoryGallery'
import ArticleDetail from '../ArticleDetail/ArticleDetail'
import retrieveTopStories from '../utils/apiCalls'

const App = () => {
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
        const currentStory = findStoryByName(title)
        return(
          <ArticleDetail
            section={currentStory.section}
            subsection={currentStory.subsection}
            title={currentStory.title}
            abstract={currentStory.abstract}
            url={currentStory.url}
            uri={currentStory.uri}
            byline={currentStory.byline}
            item_type={currentStory.item_type}
            updated_date={currentStory.updated_date}
            created_date={currentStory.created_date}
            published_date={currentStory.published_date}
            material_type_facet={currentStory.material_type_facet}
            kicker={currentStory.kicker}
            des_facet={currentStory.des_facet}
            org_facet={currentStory.org_facet}
            per_facet={currentStory.per_facet}
            geo_facet={currentStory.geo_facet}
            multimedia={currentStory.multimedia}
          />
        )
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
