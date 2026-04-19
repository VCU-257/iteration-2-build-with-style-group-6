import SectionOutline from '../components/SectionOutline.jsx'
import ListingsGridSection from '../components/listings/ListingsGridSection.jsx'
import { sampleListings } from '../data/sampleListings.js'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page d-flex flex-column gap-4">
      <SectionOutline label="Home page" className="home-intro border-0 shadow-sm">
        <div className="p-4 p-md-5">
          <p className="text-uppercase fw-semibold small mb-2">Featured Collection</p>
          <h1 className="display-6 mb-2">Find the next piece for your space</h1>
          <p className="mb-0">
            Discover curated art from independent creators with trusted checkout and fast browsing.
          </p>
        </div>
      </SectionOutline>

      <ListingsGridSection
        title="Discover artwork"
        description="Curated pieces in sample relevance order. Same grid for home and search wireframes."
        listings={sampleListings}
        headingId="home-listings-heading"
      />
    </div>
  )
}
