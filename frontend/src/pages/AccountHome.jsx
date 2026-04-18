import { useNavigate } from 'react-router-dom';

export default function AccountHome() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?.token) {
    navigate('/login');
    return null;
  }

  return (
  <div className="d-flex flex-column align-items-center pt-5">

    <h1 className="mb-4">
        Welcome, {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
    </h1>

    <div className="d-flex flex-column gap-3" style={{ width: '300px' }}>

      <button
        className="btn btn-primary py-3 w-100"
        style={{ borderRadius: '8px', fontSize: '18px' }}
        onClick={() => navigate('/account')}
      >
        Account
      </button>

      <button
        className="btn btn-success py-3 w-100"
        style={{ borderRadius: '8px', fontSize: '18px' }}
        onClick={() => navigate('/wishlist')}
      >
        Wishlist
      </button>

    </div>
  </div>
);
}