import React, { useState } from "react";

export default function Feedback() {
  const [show, setShow] = useState(true);

  return (
    <div className="bg-light py-4">
      <div className="container">
        <div className="row justify-content-center py-4">
          {show ? (
            <div className="col-12 col-md-10 col-lg-8 bg-white p-4 shadow rounded position-relative">
              <svg
                onClick={() => setShow(false)}
                className="position-absolute"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                  position: "absolute",
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                  fill="#333"
                />
              </svg>
              <h3 className="text-center mb-3">Your feedback is valuable to us</h3>
              <p className="text-center text-muted mb-4">
                Would you mind sharing your feedback?
              </p>
              <p className="text-center fw-semibold mb-4">
                How likely are you to recommend this product to friends?
              </p>
              <div className="d-flex justify-content-between">
                {[...Array(10)].map((_, idx) => (
                  <div key={idx} className="text-center">
                    <input
                      type="radio"
                      name="rating"
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        cursor: "pointer",
                      }}
                    />
                    <p className="mb-0">{idx + 1}</p>
                  </div>
                ))}
              </div>
              <div className="row mt-2">
                <div className="col text-start">Not likely</div>
                <div className="col text-end">Extremely likely</div>
              </div>
              <div className="form-group my-4">
                <textarea
                  rows="3"
                  placeholder="Why do you feel that way?"
                  className="form-control border rounded"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
              <div className="d-flex gap-3">
                <button className="btn btn-dark w-50">Submit</button>
                <button className="btn btn-outline-secondary w-50" onClick={() => setShow(false)}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={() => setShow(true)}>
              Open Feedback Form
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
