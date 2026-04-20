// Base URL for the Express API (set VITE_API_URL in .env, e.g. http://localhost:5050)
const base = import.meta.env.VITE_API_URL || "http://localhost:5050";

export const API_URL = `${base.replace(/\/$/, "")}/api/auth`;

export const SIGNUP_URL = `${API_URL}/signup`;
export const LOGIN_URL = `${API_URL}/login`;

// /auth/login
const BASE_URL = "https://iteration-2-build-with-style-group-6.onrender.com/api";

// LISTINGS
export const getListings = async () => {
  const res = await fetch(`${BASE_URL}/listings`);
  return res.json();
};

// CART
export const getCart = async (userId) => {
  const res = await fetch(`${BASE_URL}/cart/${userId}`);
  return res.json();
};

export const addToCart = async (data) => {
  const res = await fetch(`${BASE_URL}/cart/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// WISHLIST
export const addToWishlist = async (data) => {
  const res = await fetch(`${BASE_URL}/wishlist/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// ORDERS
export const checkout = async (data) => {
  const res = await fetch(`${BASE_URL}/orders/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
/** Parse JSON bodies; handles empty or non-JSON (e.g. wrong port / proxy HTML). */
export async function readApiJson(response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { message: text.slice(0, 200) };
  }
}
