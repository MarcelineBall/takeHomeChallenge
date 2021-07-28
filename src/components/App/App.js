import { useState } from 'react'
import './App.css';
import mockData from '../../mockData'
import Card from '../Card/Card'


const App = () => {
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
  return (
    <>
    <h1> Popular times </h1>
    {stories}
    </>
  )
}

export default App;
