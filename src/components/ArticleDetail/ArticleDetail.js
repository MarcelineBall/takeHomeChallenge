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
        <p>Type of Article {section}, {subsection}</p>
        <p>{abstract}</p>
      </article>
    )
}

export default ArticleDetail
