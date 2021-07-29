import { Link } from 'react-router-dom'

const Card = ({ title, abstract }) => {
  return(
    <article>
      <Link to={title}>
        <h2>{title}</h2>
      </Link>
      <p>{abstract}</p>
    </article>
  )
}

export default Card
