import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectionOutline from '../components/SectionOutline.jsx';
import { sampleListings } from '../data/sampleListings.js';
import './Listing.css'; 

export default function Listing() {
  const { id } = useParams(); 
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isSaved, setIsSaved] = useState(false); 

  const product = sampleListings.find(item => item.id === id);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary mt-3">Return to Home</Link>
      </div>
    );
  }

  const handleSaveForLater = () => {
    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    if (!currentWishlist.includes(product.title)) {
      const updatedWishlist = [...currentWishlist, product.title];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
    
    setIsSaved(true);
  };

  return (
    <SectionOutline label="Listing page">
      <div className="container py-4 listing-page">
        
        <h2 className="mb-4">{product.title}</h2>

        <div className="row">
          
          <div className="col-md-5">
            <img 
              src={product.imageUrl} 
              alt={product.imageAlt} 
              className="img-fluid rounded mb-3 border border-secondary w-100 object-fit-cover"
              style={{ height: '350px' }}
            />
            
            <h4 className="mb-3">Price: ${product.price || '99.99'}</h4>
            <p className="text-muted">
              {product.description || `A beautiful piece by ${product.artist}`}
            </p>
          </div>

          <div className="col-md-2 d-flex flex-column gap-3">
            <button 
              className={`btn ${isAddedToCart ? 'btn-warning' : 'btn-primary'}`}
              onClick={() => setIsAddedToCart(true)}
            >
              Add to Cart
            </button>
            
            <button 
              className={`btn ${isSaved ? 'btn-success' : 'btn-secondary'}`}
              onClick={handleSaveForLater}
              disabled={isSaved}
            >
              {isSaved ? 'Saved to Wishlist' : 'Save to Wishlist'}
            </button>
          </div>

          {isAddedToCart && (
            <div className="col-md-5">
              <div className="item-added-card p-4 text-center h-100 d-flex flex-column justify-content-center align-items-center">
                <h4 className="mb-4">✓ Item Added</h4>
      
                <p className="text-muted mb-4">
                  {product.title} has been added to your cart.
                </p>
      
                <div className="d-flex flex-column gap-3 w-75">
                  <Link 
                    to="/checkout" 
                    className="btn btn-primary shadow-sm"
                  >
                    Proceed to Checkout
                  </Link>

                  <Link 
                    to="/" 
                    className="btn btn-outline-custom"
                  >
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