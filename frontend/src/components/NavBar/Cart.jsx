import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  const itemCount = 3; // test value

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div
      className="d-flex align-items-center px-2 py-1 cursor-pointer text-white gap-1"
      style={{ minWidth: 'fit-content' }}
      onClick={handleClick}
    >
      {/* Icon wrapper */}
      <div style={{ position: 'relative', fontSize: '22px' }}>
        🛒

        {itemCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-6px',
              right: '-8px',
              backgroundColor: 'orange',
              color: 'black',
              borderRadius: '50%',
              padding: '2px 5px',
              fontSize: '11px',
              fontWeight: 'bold',
              lineHeight: '1',
            }}
          >
            {itemCount}
          </span>
        )}
      </div>

      {/* Optional text */}
      <span style={{ fontSize: '14px' }}>Cart</span>
    </div>
  );
}