import { useNavigate } from 'react-router-dom';

export default function ReturnsOrders() {
  const navigate = useNavigate();

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Determine login state
  const isLoggedIn = !!user?.token;

  const handleClick = () => {
    if (isLoggedIn) {
      // Navigate to orders page
      navigate('/orders');
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
        Returns
      </span>

      {/* Bottom bold text */}
      <span
        className="fw-bold"
        style={{ color: 'white', fontSize: '14px', lineHeight: '15px' }}
      >
        & Orders
      </span>
    </div>
  );
}