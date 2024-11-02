import React from 'react';
import contactimage  from '../../images/contadtpageimage/contact.avif';
import axios from 'axios';
import { useState } from 'react';
function ContactForm() {

  const [contactFormData,setContactFormData] = useState({
       name:"",
       email:"",
       phone:"",
       message:"",
       subject:""
  })

  const inputhandler = (e) =>{
      setContactFormData({...contactFormData,[e.target.name]:e.target.value});
  }

  const formHandler = (e)=>{
      e.preventDefault();
    console.log(contactFormData);
    axios.post("http://localhost:8000/api/user/contactmail",contactFormData)
    .then((res)=>{
      alert("Your message has been sent");
       console.log(res)
    })
    .catch(()=>{
        alert("email not sent")
    })

  }

  return (
    <div className="container-fluid py-5 bg-light my-4">
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
            <form onSubmit={formHandler}>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name='name'
                  value={contactFormData.name}
                  onChange={inputhandler}

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
                  name='email'
                  value={contactFormData.email}
                  onChange={inputhandler}

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
                  name='phone'
                  maxLength={10}
                  value={contactFormData.phone}
                  onChange={inputhandler}
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
                  name='subject'
                  value={contactFormData.subject}
                  onChange={inputhandler}
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
                  name='message'
                  value={contactFormData.message}
                  onChange={inputhandler}
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
