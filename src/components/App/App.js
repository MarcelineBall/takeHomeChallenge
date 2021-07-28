import './App.css';
import { Router, Route, Link } from 'react-router-dom'
import StoryGallery from '../StoryGallery/StoryGallery'

const App = () => {
  return (
    <>
    <h1> Popular times </h1>

    <StoryGallery />
    </>
  )
}

export default App;
