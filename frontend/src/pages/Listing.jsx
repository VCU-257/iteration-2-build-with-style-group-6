import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectionOutline from '../components/SectionOutline.jsx';
import { sampleListings } from '../data/sampleListings.js';
import './Listing.css'; 

export default function Listing() {
  const { id } = useParams(); 
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const product = sampleListings.find(item => item.id === id);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary mt-3">Return to Home</Link>
      </div>
    );
  }

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
            <button className="btn btn-secondary">
              Save for Later
            </button>
          </div>

          {isAddedToCart && (
            <div className="col-md-5">
              <div 
                className="bg-secondary bg-opacity-25 p-4 text-center h-100 d-flex flex-column justify-content-center align-items-center border border-secondary"
              >
                <h4 className="mb-5">Item Added</h4>
                
                <div className="d-flex flex-column gap-3 w-50">
                  <Link 
                    to="/" 
                    className="btn btn-light border-secondary"
                  >
                    Continue Shopping
                  </Link>
                  
                  <Link to="/checkout" className="btn btn-light border-secondary">
                    Checkout
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