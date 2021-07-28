import './App.css';
import mockData from '../../mockData'
import Card from '../Card/Card'

function App() {
  const titles = mockData.map(story => story.title)
  const stories = mockData.map(story => {

  })
  return (
    <>
    <h1> Popular times </h1>
    <h2>{titles}</h2>
    </>
  )
}

export default App;
