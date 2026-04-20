import { useEffect, useState } from "react";
import SectionOutline from "../components/SectionOutline.jsx";
import ListingsGridSection from "../components/listings/ListingsGridSection.jsx";
import { getListings } from "../../src/api/api.js"; // <-- your API helper
import "./Home.css";

export default function Home() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadListings = async () => {
      try {
        const data = await getListings();
        // Log listing data
        console.log("API LISTINGS:", data); 
        setListings(data);
      } catch (err) {
        console.error("Failed to load listings:", err);
      } finally {
        setLoading(false);
      }
    };

    loadListings();
  }, []);

  return (
    <div className="home-page d-flex flex-column gap-4">
      <SectionOutline label="Home page" className="home-intro border-0 shadow-sm">
        <div className="p-4 p-md-5">
          <p className="text-uppercase fw-semibold small mb-2">
            Featured Collection
          </p>
          <h1 className="display-6 mb-2">
            Find the next piece for your space
          </h1>
          <p className="mb-0">
            Discover curated art from independent creators with trusted checkout and fast browsing.
          </p>
        </div>
      </SectionOutline>

      {loading ? (
        <p className="px-4">Loading listings...</p>
      ) : (
        <ListingsGridSection
          title="Discover artwork"
          description="Curated pieces in sample relevance order. Same grid for home and search wireframes."
          listings={listings}
          headingId="home-listings-heading"
        />
      )}
    </div>
  );
}