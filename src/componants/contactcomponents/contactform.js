import React from 'react';
import contactimage  from '../../images/contadtpageimage/contact.avif';
function ContactForm() {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container p-4 shadow-lg rounded bg-white">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          {/* SVG Image Column */}
          <div className="col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0">
            <img
              src={contactimage} // Replace with your SVG image URL
              alt="Contact Us"
              className="img-fluid" // Make the image responsive
              style={{ maxWidth: '80%' }} // Adjust max width as needed
            />
          </div>

          {/* Form Column */}
          <div className="col-md-6">
            <form>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Subject Field */}
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter the subject"
                  required
                />
              </div>

              {/* Query Field */}
              <div className="mb-3">
                <label htmlFor="query" className="form-label">Query</label>
                <textarea
                  className="form-control"
                  id="query"
                  rows="4"
                  placeholder="Enter your query"
                  required
                ></textarea>
              </div>

              {/* Send Query Button */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">Send Query</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
