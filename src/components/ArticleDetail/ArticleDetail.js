const ArticleDetail = ({ section,
  subsection,
  title,
  abstract,
  url,
  uri,
  byline,
  item_type,
  updated_date,
  created_date,
  published_date,
  material_type_facet,
  kicker,
  des_facet,
  org_facet,
  per_facet,
  geo_facet,
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
