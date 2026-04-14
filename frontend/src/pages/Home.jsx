import SectionOutline from '../components/SectionOutline.jsx'
import ListingsGridSection from '../components/listings/ListingsGridSection.jsx'
import { sampleListings } from '../data/sampleListings.js'

export default function Home() {
  return (
    <div className="d-flex flex-column gap-4">
      <SectionOutline label="Home page" />

      <ListingsGridSection
        title="Discover artwork"
        description="Curated pieces in sample relevance order. Same grid for home and search wireframes."
        listings={sampleListings}
        headingId="home-listings-heading"
      />
    </div>
  )
}
