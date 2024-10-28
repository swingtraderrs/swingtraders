import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h2 align="center">Find Us Here</h2>
        <div className="row mt-5">
          {/* Left Box for Map */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div style={{ width: '100%', height: '400px', backgroundColor: '#eaeaea' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.737283599898!2d77.2789285!3d28.6317305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdfc8597a195%3A0x438046b32c3e3729!2sSwingtraderrs!5e0!3m2!1sen!2sin!4v1730102592007!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Box for Four Boxes */}
          <div className="col-md-6">
            <div className="row">
              {/* Box 1 */}
              <div className="col-6 mb-3">
                <div style={{ width: '100%', height: '180px', backgroundColor: '#f2f0f2', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <FaMapMarkerAlt size={30} />
                  <h5>Address</h5>
                  <p>123 Main St, Anytown, USA</p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="col-6 mb-3">
                <div style={{ width: '100%', height: '180px', backgroundColor: '#f2f0f2', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <FaPhoneAlt size={30} />
                  <h5>Phone</h5>
                  <p>(123) 456-7890</p>
                  <p>(098) 765-4321</p>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Box 3 */}
              <div className="col-6 mb-3">
                <div style={{ width: '100%', height: '180px', backgroundColor: '#f2f0f2', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <FaEnvelope size={30} />
                  <h5>Email</h5>
                  <p>info@example.com</p>
                  <p>support@example.com</p>
                </div>
              </div>

              {/* Box 4 */}
              <div className="col-6 mb-3">
                <div style={{ width: '100%', height: '180px', backgroundColor: '#f2f0f2', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <FaFacebook size={20} />
                    <FaInstagram size={20} />
                    <FaWhatsapp size={20} />
                    <FaYoutube size={20} />
                  </div>
                  <h5>Follow Us</h5>
                  <p>Stay connected with us on social media!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
