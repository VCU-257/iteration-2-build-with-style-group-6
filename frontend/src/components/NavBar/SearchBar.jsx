export default function SearchBar() {
  return (
    <div className="d-flex w-100" style={{ minWidth: '200px' }}>
      <div className="input-group overflow-hidden rounded-2 w-100">
        
        {/* Dropdown */}
        <select 
          className="form-select bg-light border-0 d-none d-md-block" 
          style={{ maxWidth: '65px', fontSize: '13px', cursor: 'pointer' }}
        >
          <option>All</option>
          <option>Art</option>
          <option>Frames</option>
        </select>

        {/* Input */}
        <input
          type="text"
          className="form-control border-0 px-3"
          placeholder="Search Art E-commerce"
          style={{ height: '40px', boxShadow: 'none' }}
        />

        {/* Search Button */}
        <button 
          className="btn border-0 d-flex align-items-center" 
          type="button"
          style={{ backgroundColor: '#febd69', padding: '0 15px' }}
        >
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
            <i className="bi bi-search"></i>
          </span>
        </button>
        
      </div>
    </div>
  );
}