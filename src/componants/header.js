import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import logo from '.././images/logo/mainlogo.png'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Inline styles for hover effect
    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
    };

    const linkHoverStyle = {
        textDecoration: 'underline',
        color: 'white',
    };

    return (
        <>
            {/* Top Navbar with Logo and Search (only for medium and above) */}
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid d-md-flex justify-content-between align-items-center">
                    {/* Logo on medium and larger screens */}
                    <Link className="navbar-brand d-block" to="#">
                        <img src={logo} alt="Logo" style={{ height: '100px', marginTop: "-20px", marginBottom: '-20px' }} />
                    </Link>

                    {/* Search box and button for medium and larger screens */}
                    <form className="d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search here..."
                            style={{ width: '300px' }}
                        />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            {/* Black Navbar with Links */}
            <nav className="navbar navbar-expand-md bg-black navbar-dark sticky-top">
                <div className="container">
                    {/* Logo on left for small screens only */}
                    <Link className="navbar-brand d-md-none d-block" to="/"></Link>

                    {/* Hamburger Icon for small screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <FaBars className="text-light" size={25} />
                    </button>

                    {/* Links and Menu */}
                    <div
                        className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
                        id="navbarNavDropdown"
                        style={{ zIndex: 1050 }} // Ensure dropdown menu is above other content
                    >
                        {/* Centered Links on Desktop */}
                        <ul className="navbar-nav mx-auto d-none d-md-flex align-items-center">
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>Home</Link>
                            </li>
                            <li className="nav-item dropdown mx-3">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={linkStyle}
                                    onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}
                                >
                                    Course
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/basiccourse">Basic Courses</Link></li>
                                    <li><Link className="dropdown-item" to="/intermideatecourse">Intermediate Courses</Link></li>
                                    <li><Link className="dropdown-item" to="/advancecourse">Advanced Courses</Link></li>
                                    <li><Link className="dropdown-item" to="/allcourse">View All Courses</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/about" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/contact" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>Contact Us</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/blogs" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>Blogs</Link>
                            </li>
                        </ul>

                        {/* Desktop Social Icons and Login Button */}
                        <div className="d-none d-md-flex align-items-center">
                            <li className="dropdown">
                                <button
                                    className="dropdown-toggle btn bg-light"
                                    id="navbarDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Login
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/adminlogin">ADMIN LOGIN</Link></li>
                                    <li><Link className="dropdown-item" to="/login">STUDENT LOGIN</Link></li>
                                </ul>
                            </li>
                        </div>

                        {/* Mobile View Links and Login Button */}
                        <div
                            className={`d-md-none ${isOpen ? 'd-block' : 'd-none'}`}
                            style={{ zIndex: 1050 }}
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to="#"
                                        id="navbarDropdownMobile"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={linkStyle}
                                        onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}
                                    >
                                        Course
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMobile">
                                        <li><Link className="dropdown-item" to="/basiccourse">Basic Course</Link></li>
                                        <li><Link className="dropdown-item" to="/intermideatecourse">Intermediate Courses</Link></li>
                                        <li><Link className="dropdown-item" to="/advancecourse">Advanced Courses</Link></li>
                                        <li><Link className="dropdown-item" to="/allcourse">View All Courses</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact" style={linkStyle} onMouseEnter={(e) => e.target.style = linkHoverStyle} onMouseLeave={(e) => e.target.style = linkStyle}>Contact Us</Link>
                                </li>
                                <li className="nav-item dropdown w-100">
                                    <Link
                                        className="btn btn-light w-100 dropdown-toggle"
                                        to="#"
                                        id="loginDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Login
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                                        <li><Link className="dropdown-item" to="/adminlogin">ADMIN LOGIN</Link></li>
                                        <li><Link className="dropdown-item" to="/login">STUDENT LOGIN</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
