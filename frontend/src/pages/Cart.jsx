import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Abstract Painting",
      description: "Colorful modern art piece",
      price: 99.99,
      image: "https://picsum.photos/id/1062/200/300",
    },
  ]);

  const [savedItems, setSavedItems] = useState([
    {
      id: 2,
      name: "Minimalist Sketch",
      description: "Simple black and white art",
      price: 49.99,
      image: "https://picsum.photos/id/252/200/300",
    },
  ]);

  const handleSaveForLater = (item) => {
    setCartItems((prev) => prev.filter((i) => i.id !== item.id));
    setSavedItems((prev) => [...prev, item]);
  };

  const handleMoveToCart = (item) => {
    setSavedItems((prev) => prev.filter((i) => i.id !== item.id));
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <div className="container py-4">

      {/* 🔥 CHECKOUT BAR (NOW AT TOP) */}
      <div className="d-flex justify-content-end mb-4">
        <Link
          to="/checkout"
          className="btn btn-primary"
          onClick={(e) => {
            if (cartItems.length === 0) {
              e.preventDefault();
              alert("Your cart is empty. Add items before checking out.");
            }
          }}
        >
          Proceed to Checkout
        </Link>
      </div>

      <h2 className="mb-4">Your Cart</h2>

      {/* CART ITEMS */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="row mb-4 border p-3 rounded">
            <div className="col-md-3">
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h4>{item.name}</h4>
              <p className="text-muted">{item.description}</p>
              <h5>${item.price}</h5>
            </div>

            <div className="col-md-3 d-flex flex-column justify-content-center">
              <button
                className="btn btn-secondary mb-2"
                onClick={() => handleSaveForLater(item)}
              >
                Save for Later
              </button>
            </div>
          </div>
        ))
      )}

      {/* SAVED FOR LATER */}
      <h3 className="mb-3 mt-5">Saved for Later</h3>

      {savedItems.length === 0 ? (
        <p>No saved items.</p>
      ) : (
        savedItems.map((item) => (
          <div
            key={item.id}
            className="row mb-4 border p-3 rounded bg-light"
          >
            <div className="col-md-3">
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h4>{item.name}</h4>
              <p className="text-muted">{item.description}</p>
              <h5>${item.price}</h5>
            </div>

            <div className="col-md-3 d-flex flex-column justify-content-center">
              <button
                className="btn btn-secondary"
                onClick={() => handleMoveToCart(item)}
              >
                Move to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}