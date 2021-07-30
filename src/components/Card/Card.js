import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ title, abstract }) => {
  return(
    <article className='storyCard'>
      <Link to={title}>
        <h2>{title}</h2>
      </Link>
      <p>{abstract}</p>
    </article>
  )
}

export default Card
