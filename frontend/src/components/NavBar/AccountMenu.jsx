import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AccountMenu() {
  const navigate = useNavigate();

  // Test State: true = "user is logged in, will navigate to profile page", false = "user not logged in, go to login page" 
  // Replace this with an actual user authentication check later
  const [isLoggedIn] = useState(false);
  const [userName] = useState('Joey'); // placeholder name

  const handleClick = () => {
    if (isLoggedIn) {
      // Navigate to profile page
      navigate('/account');
    } else {
      // Navigate to login page
      navigate('/login');
    }
  };

  return (
    <div
      className="d-flex flex-column px-2 py-1 cursor-pointer text-white"
      style={{ minWidth: 'fit-content' }}
      onClick={handleClick}
    >
      {/* Top small text */}
      <span
        style={{ fontSize: '12px', color: 'white', lineHeight: '14px' }}
      >
        {isLoggedIn ? `Hello, ${userName}` : 'Sign in'}
      </span>

      {/* Bottom bold text */}
      <span
        className="fw-bold"
        style={{ color: 'white', fontSize: '14px', lineHeight: '15px' }}
      >
        Account & Lists
      </span>
    </div>
  );
}