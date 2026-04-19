import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionOutline from "../components/SectionOutline.jsx";

export default function Checkout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // form state for guest users
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    payment: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loggedInView = (
    <div className="card">

      <div className="card-header">
        <ul className="list-group list-group-flush">

          {/* ITEMS */}
          <li className="list-group-item">
            <h4>Items</h4>
            <dt className="col-sm-8">Painting</dt>
            <dd className="col-sm-4">$67.00</dd>

            <dt className="col-sm-8">Giant Metal Sculpture</dt>
            <dd className="col-sm-4">$1000.00</dd>
          </li>

          {/* SHIPPING */}
          <li className="list-group-item">
            <h4>Shipping</h4>
            <dt className="col-sm-8">Free</dt>
          </li>

          {/* ADDRESS */}
          <li className="list-group-item">
            <h4>Address</h4>
            <p>
              123 ABC Street<br />
              Neverland, OH 23220
            </p>
          </li>

          {/* PAYMENT */}
          <li className="list-group-item">
            <h4>Payment Method</h4>
            <dt className="col-sm-8">Card Type:</dt>
            <dd className="col-sm-4">Visa ending in 1234</dd>
          </li>

          {/* DELIVERY */}
          <li className="list-group-item">
            <h4>Estimated Delivery Date</h4>
            <p>Friday, Oct 13th</p>
          </li>

        </ul>
      </div>

      <Link
        className="btn btn-primary"
        to="/order-confirmation"
      >
        Checkout
      </Link>
    </div>
  );

  const guestView = (
  <div className="card p-3">

    <h4 className="mb-3">Guest Checkout</h4>

    {/* 🧾 CUSTOMER INFO */}
    <div className="mb-3">
      <h5 className="mb-2">Shipping Information</h5>

      <input
        className="form-control mb-2"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        className="form-control mb-2"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />

      <div className="row">
        <div className="col-md-6 mb-2">
          <input
            className="form-control"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 mb-2">
          <input
            className="form-control"
            name="zip"
            placeholder="ZIP Code"
            value={form.zip}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>

    {/* 💳 PAYMENT SECTION (SEPARATE CONTAINER) */}
    <div className="border rounded p-3 mb-3 bg-light">
      <h5 className="mb-3">Payment Information</h5>

      <input
        className="form-control mb-2"
        name="payment"
        placeholder="Card Number"
        value={form.payment}
        onChange={handleChange}
      />

      <div className="row">
        <div className="col-md-6 mb-2">
          <input
            className="form-control"
            placeholder="MM/YY"
          />
        </div>

        <div className="col-md-6 mb-2">
          <input
            className="form-control"
            placeholder="CVC"
          />
        </div>
      </div>
    </div>

    {/* CTA */}
    <Link
      className="btn btn-primary w-100"
      to="/order-confirmation"
    >
      Place Order
    </Link>

  </div>
);

  return (
    <SectionOutline label="Checkout">
      {isLoggedIn ? loggedInView : guestView}
    </SectionOutline>
  );
}