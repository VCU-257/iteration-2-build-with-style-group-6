import { useNavigate } from 'react-router-dom';

export default function AccountMenu() {
  const navigate = useNavigate();

  // Get stored user data
  const user = JSON.parse(localStorage.getItem("user"));

  // Determine login state
  const isLoggedIn = !!user?.token;
  const userName = user?.username || '';

  const handleClick = () => {
    if (isLoggedIn) {
      navigate('/account-home');
    } else {
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
        {isLoggedIn
          ? `Hello, ${userName.charAt(0).toUpperCase() + userName.slice(1)}`
          : 'Sign in'}
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