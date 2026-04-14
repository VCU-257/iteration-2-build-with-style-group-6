import { Link } from 'react-router-dom';

/**
 * Wireframe listing card (no navigation or interactive behavior yet).
 * @param {{ listing: { id: string, title: string, artist?: string, imageUrl: string, imageAlt?: string } }} props
 */
export default function ListingCard({ listing }) {
  return (
    <Link to={`/listing/${listing.id}`} className="card h-100 border-0 shadow-sm position-relative overflow-hidden rounded">
      <div className="ratio ratio-4x3 bg-light">
        <img
          src={listing.imageUrl}
          alt={listing.imageAlt ?? listing.title}
          className="object-fit-cover w-100 h-100"
        />
      </div>
      <button
        type="button"
        disabled
        className="btn btn-light border-0 shadow-sm position-absolute top-0 end-0 m-3 rounded-circle p-2 lh-1 z-3 text-secondary"
        aria-label="Wishlist (wireframe, not functional)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
        </svg>
      </button>
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5 mb-1 text-body pe-4">{listing.title}</h3>
        {listing.artist ? (
          <p className="card-text small text-muted mb-0 flex-grow-1">{listing.artist}</p>
        ) : (
          <div className="flex-grow-1" />
        )}
      </div>
      {/* Wireframe: visual full-card hit target only; no real link yet */}
      <span className="stretched-link pe-none" aria-hidden="true" />
    </Link>
  )
}
