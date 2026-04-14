import ListingCard from './ListingCard.jsx'

/**
 * Responsive listings grid: 1 col mobile, 3 desktop.
 * @param {{
 *   listings: Array<{ id: string, title: string, artist?: string, imageUrl: string, imageAlt?: string, relevanceScore?: number }>,
 *   title?: string,
 *   description?: string,
 *   headingId?: string,
 * }} props
 */
export default function ListingsGridSection({
  listings,
  title,
  description,
  headingId = 'listings-heading',
}) {
  return (
    <section className="listings-grid-section" aria-labelledby={headingId}>
      {title || description ? (
        <header className="mb-4">
          {title ? (
            <h2 id={headingId} className="h4 text-body mb-2">
              {title}
            </h2>
          ) : (
            <h2 id={headingId} className="visually-hidden">
              Art listings
            </h2>
          )}
          {description ? <p className="text-muted small mb-0">{description}</p> : null}
        </header>
      ) : (
        <h2 id={headingId} className="visually-hidden">
          Art listings
        </h2>
      )}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 gy-4">
        {listings.map((listing) => (
          <div key={listing.id} className="col">
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </section>
  )
}
