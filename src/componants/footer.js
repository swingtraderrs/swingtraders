import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className='container'>
      <style>
          {`
            .container {
              overflow: hidden; /* Prevents horizontal scrolling */
            }

            ul {
              padding-left: 0; /* Remove default padding */
            }

            ul li {
              margin-bottom: 10px; /* Add space between list items */
            }

            h5 {
              margin-bottom: 10px; /* Space below headings */
            }

            /* Remove text decoration from all Link components */
            ul li a {
              text-decoration: none; /* Remove default underline from links */
              color: inherit; /* Make link color inherit from the parent */
            }

            /* Optional: Change link color on hover */
            ul li a:hover {
              text-decoration: underline; /* Underline on hover for better UX */
            }
          `}
        </style>
        <div className='container-fluid'>
          {/* First Row */}
          <div className='row d-flex justify-content-between py-4'>
            <div className='col-6'>
              <button className='btn bg-black text-white text-center px-5'>Get Started</button><br />
              <p>See Our Plans</p>
            </div>
            <div className='col-6 text-end'>
              <p>0:00 AM to 6 PM, Monday - Friday Semurh <br />
              The Nice Office,D-32, 2nd floor, Laxmi Nagar-110092</p>
            </div>
          </div>

          {/* Second Row */}
          <div className='row d-flex justify-content-center border py-4'>
            <div className='col-6 text-center'>
              <p>The Nice Office,D-32, 2nd floor, Laxmi Nagar-110092</p>
            </div>
            <div className='col-6 text-center'>
              <p>info@swingtraderrs.com</p>
            </div>
          </div>

          {/* Links Section */}
          <div className='row d-flex justify-content-between mt-4'>
            {/* Product Links */}
            <div className='col-md-2 col-sm-6 mb-3'>
              <h5>Product</h5>
              <ul className='list-unstyled'>
                <li><Link to="/email-marketing">Email Marketing</Link></li>
                <li><Link to="/website-builder">Website Builder</Link></li>
                <li><Link to="/market-automation">Market Automation</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className='col-md-2 col-sm-6 mb-3'>
              <h5>Support</h5>
              <ul className='list-unstyled'>
                <li><Link to="/generate-lead">Generate Lead</Link></li>
                <li><Link to="/size-guide">Size Guide</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
                <li><Link to="/payment-security">Payment Security</Link></li>
              </ul>
            </div>

            {/* Solutions Links */}
            <div className='col-md-2 col-sm-6 mb-3'>
              <h5>Solutions</h5>
              <ul className='list-unstyled'>
                <li><Link to="/generate-lead-solution">Generate Lead</Link></li>
                <li><Link to="/self-knowledge">Self Knowledge</Link></li>
                <li><Link to="/work-from-home">Work from Home</Link></li>
                <li><Link to="/engage-customers">Engage Customers</Link></li>
                <li><Link to="/boost-online-sales">Boost Online Sales</Link></li>
              </ul>
            </div>

            {/* Visit Us Links */}
            <div className='col-md-2 col-sm-6 mb-3'>
              <h5>Visit Us</h5>
              <ul className='list-unstyled'>
                <li><Link to="/mayfair">Mayfair</Link></li>
                <li><Link to="/melbourne">Melbourne</Link></li>
                <li><Link to="/wimbledon">Wimbledon</Link></li>
              </ul>
            </div>

            {/* Pricing Links */}
            <div className='col-md-2 col-sm-6 mb-3'>
              <h5>Pricing</h5>
              <ul className='list-unstyled'>
                <li><Link to="/integration">Integration</Link></li>
                <li><Link to="/affiliate-program">Affiliate Program</Link></li>
                <li><Link to="/agency-partner">Agency Partner</Link></li>
              </ul>
            </div>

            {/* Entrepreneur Links */}
            <div className='col-md-2 col-sm-6 mb-3'>
              <h5>Entrepreneur</h5>
              <ul className='list-unstyled'>
                <li><Link to="/online-marketer">Online Marketer</Link></li>
                <li><Link to="/marketing-manager">Marketing Manager</Link></li>
                <li><Link to="/mid-large-companies">Mid and Large Companies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
               <div className='col-auto'>
                   <h2>Blogs</h2>
               </div>
          </div>
        </div>
      </div>
      <div className='container'>
      <style>
        {`
          .blog-card {
            display: flex;
            flex-direction: row; /* Horizontal layout for larger screens */
            margin: 20px 0;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            height: 200px; /* Adjust height for the blog card */
          }

          .blog-image {
            width: 40%; /* Image takes 40% of the width on larger screens */
            height: auto;
          }

          .blog-content {
            padding: 10px; /* Reduced padding */
            display: flex;
            flex-direction: column; /* Content layout */
            justify-content: center; /* Center content vertically */
            height: 100%; /* Ensure it takes the full height */
          }

          .blog-title {
            font-size: 20px; /* Reduced font size */
            margin: 0;
            line-height: 1.2; /* Reduced line height */
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .blog-card {
              flex-direction: column; /* Stack elements for smaller screens */
              align-items: center; /* Center horizontally */
            }

            .blog-image {
              width: 100%; /* Full width for mobile */
            }

            .blog-content {
              text-align: center; /* Center text on mobile */
            }
          }
        `}
      </style>

      <div className='blog-card'>
        <img
          src='https://via.placeholder.com/300' // Placeholder image URL
          alt='Blog Post'
          className='blog-image'
        />
        <div className='blog-content'>
          <h2 className='blog-title'>
            <Link to="/blog/post-title">Blog Post Title</Link>
          </h2>
          <p>
            This is a brief description of the blog post. It provides a short overview of the content and invites users to read more.
          </p>
        </div>
        
      </div>
      <div className='blog-card'>
        <img
          src='https://via.placeholder.com/300' // Placeholder image URL
          alt='Blog Post'
          className='blog-image'
        />
        <div className='blog-content'>
          <h2 className='blog-title'>
            <Link to="/blog/post-title">Blog Post Title</Link>
          </h2>
          <p>
            This is a brief description of the blog post. It provides a short overview of the content and invites users to read more.
          </p>
        </div>
      </div>
        <h5> <Link to="">View More Post</Link></h5>
        <div className='d-flex justify-content-center gap-5 py-3'>
      <Link to="">
        <FaFacebook size={40} />
      </Link>
      <Link to="https://www.instagram.com/swingtraderrs?igsh=MTJtajNrY2ZkeTkxdw==">
        <FaInstagram size={40} />
      </Link>
      <Link to="">
        <FaWhatsapp size={40} />
      </Link>
      <Link to="https://youtube.com/@swingtraderrs?si=7ZFJeVonMz1cJw-o">
        <FaYoutube size={40} />
      </Link>
    </div>
    </div>
       
    </>
  );
};

export default Footer;
