import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src="/assets/logo.png" alt="Bootstrap" width="100" />
          </Link>

          <div className="d-flex align-items-center">
            <div className="field has-addons border border-dark d-flex" style={{ borderRadius: '100px', padding: '5px' }}>
              <input type="text" className="input mx-1 border-0 bg-transparent" style={{ padding: '5px', borderRadius: '100px', minWidth: '150px' }} placeholder="Search Destination" />
              <input type="date" className="input mx-1 border-0 bg-transparent" style={{ padding: '5px', borderRadius: '100px', minWidth: '120px' }} placeholder="Start date" />
              <input type="date" className="input mx-1 border-0 bg-transparent" style={{ padding: '5px', borderRadius: '100px', minWidth: '120px' }} placeholder="End date" />
              <input type="text" className="input mx-1 border-0 bg-transparent" style={{ padding: '5px', borderRadius: '100px', minWidth: '120px' }} placeholder="Add guests" />
              <button type="button" className="mx-1 btn border-0 bg-transparent"><img src="/assets/magnifying-glass.png" width="25" alt="" /></button>
            </div>
            <button type="button" className="mx-1 btn border-0 bg-transparent"><img src="/assets/filter.png" width="30" alt="" /></button>
            <button type="button" className="mx-1 btn border-0 bg-transparent"><img src="/assets/loginicon.png" width="30" alt="" /></button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
