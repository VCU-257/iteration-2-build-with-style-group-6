import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="container py-4">

      <h2 className="mb-4">Your Cart</h2>

      {/* CURRENT CART */}
      <div className="row mb-4 border p-3 rounded">
        <div className="col-md-3">
          <img
            src="https://picsum.photos/id/252/200/300"
            alt="Placeholder Product"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h4>Placeholder Name</h4>
          <p className="text-muted">Placeholder Description</p>
          <h5>$99.99</h5>
        </div>

        <div className="col-md-3 d-flex flex-column justify-content-center">
          <button className="btn btn-secondary mb-2">
            Save for Later
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to="/checkout" className="btn btn-primary mb-5">
            Proceed to Checkout
        </Link>
      </div>

      {/* SAVED FOR LATER */}
      <h3 className="mb-3">Saved for Later</h3>

      <div className="row mb-4 border p-3 rounded bg-light">
        <div className="col-md-3">
          <img
            src="https://picsum.photos/id/252/200/300"
            alt="Saved Item"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h4>Saved Item Name</h4>
          <p className="text-muted">Saved item description</p>
          <h5>$99.99</h5>
        </div>

        <div className="col-md-3 d-flex flex-column justify-content-center">
          <button className="btn btn-secondary">
            Move to Cart
          </button>
        </div>
      </div>

    </div>
  );
}