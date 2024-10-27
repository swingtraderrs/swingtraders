import React from 'react';

function ContactForm() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center py-5 bg-light">
      <div
        className="container p-4 shadow-lg rounded bg-white"
        style={{
          maxWidth: '600px',
          width: '100%', // Full width on small screens to avoid overflow
          margin: '0 1rem' // Side spacing on small devices
        }}
      >
        <h2 className="text-center mb-4">Contact Us</h2>
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
  );
}

export default ContactForm;
