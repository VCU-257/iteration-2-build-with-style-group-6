import React, { useState } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  return (
    <div className="container mt-5">
      <h2>My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul className="list-group">
          {wishlist.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}