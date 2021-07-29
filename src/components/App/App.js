import './App.css';
import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import StoryGallery from '../StoryGallery/StoryGallery'
import ArticleDetail from '../ArticleDetail/ArticleDetail'
import SearchBar from '../SearchBar/SearchBar'
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
            itemType={currentStory.item_type}
            updatedDate={currentStory.updated_date}
            createdDate={currentStory.created_date}
            publishedDate={currentStory.published_date}
            materialTypeFacet={currentStory.material_type_facet}
            kicker={currentStory.kicker}
            desFacet={currentStory.des_facet}
            orgFacet={currentStory.org_facet}
            perFacet={currentStory.per_facet}
            geoFacet={currentStory.geo_facet}
            multimedia={currentStory.multimedia}
          />
        )
      }} />
      <Route exact path ='/' render={() => {
        return(
          <>
            <SearchBar
              topStories={topStories}
              setTopStories={setTopStories}
            />
            <StoryGallery
              topStories={topStories}
              error={error}
            />
          </>
        )
      }} />
    </Switch>
    </>
  )
}

export default App;
