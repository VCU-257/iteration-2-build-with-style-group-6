import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SectionOutline from "../components/SectionOutline.jsx";
import "./Listing.css";

const BASE_URL = "https://iteration-2-build-with-style-group-6.onrender.com/api";

export default function Listing() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isSavedForLater, setIsSavedForLater] = useState(false);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`${BASE_URL}/listings/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch listing:", err);
      }
    };

    fetchListing();
  }, [id]);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  const handleWishlistSave = () => {
    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!currentWishlist.includes(product._id)) {
      const updatedWishlist = [...currentWishlist, product._id];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }

    setIsSaved(true);
  };

  const handleSaveForLater = () => {
    const savedItems = JSON.parse(localStorage.getItem("savedForLater")) || [];

    if (!savedItems.includes(product._id)) {
      const updatedItems = [...savedItems, product._id];
      localStorage.setItem("savedForLater", JSON.stringify(updatedItems));
    }

    setIsSavedForLater(true);
  };

  return (
    <SectionOutline label="Listing page">
      <div className="container py-4 listing-page">

        <h2 className="mb-4">{product.title}</h2>

        <div className="row">

          {/* LEFT COLUMN */}
          <div className="col-md-5">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded mb-3 border w-100"
              style={{ height: "350px", objectFit: "contain" }}
            />

            <h4 className="mb-3">Price: ${product.price}</h4>

            <p className="text-muted">
              {product.description}
            </p>

            <button
              className={`btn mt-3 ${isSaved ? "btn-success" : "btn-primary"}`}
              onClick={handleWishlistSave}
              disabled={isSaved}
            >
              {isSaved ? "Saved to Wishlist" : "Save to Wishlist"}
            </button>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="col-md-2 d-flex flex-column gap-3">

            <button
              className={`btn ${isAddedToCart ? "btn-warning" : "btn-primary"}`}
              onClick={() => setIsAddedToCart(true)}
            >
              {isAddedToCart ? "Added to Cart" : "Add to Cart"}
            </button>

            <button
              className="btn btn-secondary"
              onClick={handleSaveForLater}
              disabled={isSavedForLater}
            >
              {isSavedForLater ? "Saved for Later" : "Save for Later"}
            </button>

          </div>

          {/* RIGHT COLUMN */}
          {isAddedToCart && (
            <div className="col-md-5">
              <div className="item-added-card p-4 text-center h-100 d-flex flex-column justify-content-center align-items-center">
                <h4 className="mb-4">✓ Item Added</h4>

                <p className="text-muted mb-4">
                  {product.title} has been added to your cart.
                </p>

                <div className="d-flex flex-column gap-3 w-75">
                  <Link to="/checkout" className="btn btn-primary">
                    Proceed to Checkout
                  </Link>

                  <Link to="/" className="btn btn-outline-secondary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </SectionOutline>
  );
}