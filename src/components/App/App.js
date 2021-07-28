import './App.css';
import { Router, Route, Switch } from 'react-router-dom'
import StoryGallery from '../StoryGallery/StoryGallery'

function App() {
  return (
    <>
    <h1> Popular times </h1>
    <Switch>
      <Route exact path ='/' render={() => {
        return(
          <StoryGallery />
        )
      }} />
    </Switch>
    </>
  )
}

export default App;
