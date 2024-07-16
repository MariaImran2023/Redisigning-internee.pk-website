import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.webp'; 


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navItemStyle = {
    margin: '0 10px', 
    fontSize: '18px',
    fontWeight: 'bold'
  };

  const buttonStyle = {
    backgroundColor: '#29b816',
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bolder',
    margin: '0 15px',
    color: "white",
    border: "none"
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={logo} alt="logo" style={{ maxWidth: "200px" }} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={navItemStyle}>
              <Link className={`nav-link ${activeLink === '/' ? 'active' : ''}`} to="/" style={{ color: activeLink === '/' ? '#29b816' : 'black' }}>Home</Link>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <Link className={`nav-link ${activeLink === '/Internships' ? 'active' : ''}`} to="/Internships" style={{ color: activeLink === '/Internships' ? '#29b816' : 'black' }}>Internships</Link>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <Link className={`nav-link ${activeLink === '/Collaborations' ? 'active' : ''}`} to="/Collaborations" style={{ color: activeLink === '/Collaborations' ? '#29b816' : 'black' }}>Company Collaborations</Link>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <Link className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`} to="/contact" style={{ color: activeLink === '/contact' ? '#29b816' : 'black' }}>Contact Us</Link>
            </li>
          </ul>
          <Link to="/job-portal">
            <button className="btn btn-success" style={buttonStyle}>
              Job Portal
            </button>
          </Link>
          <Link to="/another-button">
            <button className="btn btn-success" style={buttonStyle}>
              Internee Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
