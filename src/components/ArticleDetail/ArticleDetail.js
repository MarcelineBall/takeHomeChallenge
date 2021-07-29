const ArticleDetail = ({ section,
  subsection,
  title,
  abstract,
  url,
  uri,
  byline,
  itemType,
  updatedDate,
  createdDate,
  publishedDate,
  materialTypeFacet,
  kicker,
  desFacet,
  orgFacet,
  perFacet,
  geoFacet,
  multimedia }) => {

    return(
      <article>
        <h2>{title}</h2>
        <p>{byline}</p>
        <p>{abstract}</p>
        <p>Type of Article: {section}, {subsection}</p>
        <p>{url}</p>
        <p>{itemType}</p>
        <p>Published {publishedDate}</p>
        <p>Last updated {updatedDate}</p>
        <p>Article created{createdDate}</p>
        <p>{materialTypeFacet}</p>
        <p>{kicker}</p>
        <img src={multimedia[2].url} alt={`taken by ${multimedia[2].copyright}`}/>
      </article>
    )
}

export default ArticleDetail
