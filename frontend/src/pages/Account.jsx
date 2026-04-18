import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Account() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser?.token) {
      navigate('/login');
    } else {
      setUser(storedUser);
    }

    // load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, [navigate]);

  // Decode JWT
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  };

  const decoded = user?.token ? parseJwt(user.token) : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/login');
  };

  const removeFromWishlist = (index) => {
    const updated = wishlist.filter((_, i) => i !== index);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5 gap-4">

      {/* Account Info */}
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-3">Account Info</h2>

        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Email:</strong> {user?.email}</p>

        {decoded && (
          <>
            <p><strong>User ID:</strong> {decoded.id}</p>
            <p>
              <strong>Token Expires:</strong>{" "}
              {new Date(decoded.exp * 1000).toLocaleString()}
            </p>
          </>
        )}

        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}