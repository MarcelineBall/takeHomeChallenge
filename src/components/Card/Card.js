const Card = ({ section, subsection, title, abstract }) => {
  return(
    <article>
      <h2>{title}</h2>
      <p>{section}</p>
      <p>{abstract}</p>
    </article>
  )
}

export default Card
