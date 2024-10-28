import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Top Navbar with Logo and Search (only for medium and above) */}
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid d-md-flex justify-content-between align-items-center">
                    {/* Logo on medium and larger screens */}
                    <Link className="navbar-brand d-block " to="#">
                        <img src="path/to/your/logo.png" alt="Logo" style={{ height: '40px' }} />
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
                    <Link className="navbar-brand d-md-none d-block" to="/">
                        {/* <img
                            src="path/to/your/mobile-logo.png"
                            width="40"
                            height="40"
                            alt="Logo"
                        /> */}
                    </Link>

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
                    >
                        {/* Centered Links on Desktop */}
                        <ul className="navbar-nav mx-auto d-none d-md-flex align-items-center">
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown mx-3">
                                <Link
                                    className="nav-link dropdown-toggle text-light"
                                    to="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
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
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-light" to="/contact">Contact Us</Link>
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
                                    <Link className="nav-link text-light" to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle text-light"
                                        to="#"
                                        id="navbarDropdownMobile"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
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
                                    <Link className="nav-link text-light" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/contact">Contact Us</Link>
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
