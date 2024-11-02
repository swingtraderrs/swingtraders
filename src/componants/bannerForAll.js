import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaShare, FaFacebook, FaWhatsapp, FaTelegram, FaTwitter, FaInstagram, FaLinkedin, FaCopy } from "react-icons/fa";
// import { toast } from "react-toastify";

function BannerForAll({ imageone, imagetwo, title, text }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShareClick = () => {
    setShowModal(!showModal);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 p-0">
            <img src={imageone} className="w-100" style={{ height: "75vh", objectFit: "100% 100%" }} />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-black p-0">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center gap-5 m-0">
            <div className="col-md-5 col-12 text-center text-md-start">
              <button className="btn btn-danger text-white my-2">Popular</button>
              <h2 className="fw-bold text-white">{title}</h2>
              <p className="text-white">{text}</p>
              <h3 className="text-white">Classes Starting Soon, Enroll Now!</h3>
              <div className="d-flex justify-content-center justify-content-md-between w-75 mx-auto mx-md-0">
                <div className="col-auto">
                  <button className="btn btn-light rounded" onClick={handleShareClick}>
                    <FaShare /> Share
                  </button>
                </div>
                <div className="col-auto">
                  <button className="btn btn-danger text-light rounded" onClick={() => { navigate(); }}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <img src={imagetwo} alt="img not found" className="w-100 object-fit-cover rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showModal && (
        <div
          className="position-fixed top-50 start-50 translate-middle"
          style={{
            width: '80%',
            maxWidth: '400px',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            padding: '20px',
            borderRadius: '10px',
            zIndex: '1000',
          }}
        >
          <h5 className="text-center text-white mb-3">Share this page</h5>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex w-100 justify-content-around mb-2">
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-light rounded-circle p-3">
                  <FaFacebook size={24} color="#4267B2" />
                </div>
              </Link>
              <Link to="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-light rounded-circle p-3">
                  <FaWhatsapp size={24} color="#25D366" />
                </div>
              </Link>
              <Link to="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <div className="bg-light rounded-circle p-3">
                  <FaTelegram size={24} color="#0088cc" />
                </div>
              </Link>
            </div>
            <div className="d-flex w-100 justify-content-around mb-2">
              <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-light rounded-circle p-3">
                  <FaTwitter size={24} color="#1DA1F2" />
                </div>
              </Link>
              <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-light rounded-circle p-3">
                  <FaInstagram size={24} color="#C13584" />
                </div>
              </Link>
              <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-light rounded-circle p-3">
                  <FaLinkedin size={24} color="#0077B5" />
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="text-white">Share Link: {window.location.href}</p>
            <button className="btn btn-light" onClick={handleCopyLink}>
              <FaCopy /> Copy Link
            </button>
          </div>
          <div className="text-center mt-2">
            <button className="btn btn-danger" onClick={handleShareClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BannerForAll;
