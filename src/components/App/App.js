import './App.css';
import mockData from '../../mockData'

function App() {
  const titles = mockData.map(story => story.title)
  return (
    <>
    <h1> Popular times </h1>
    <h2>{titles}</h2>
    </>
  )
}

export default App;
