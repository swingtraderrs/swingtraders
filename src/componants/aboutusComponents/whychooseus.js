import React from 'react';

const Why = () => (
  <div style={{ overflowY: 'hidden' }}>
    <div className="container-fluid px-4 py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 mb-4">
          <h2 className="display-6 fw-bold text-dark">Why choose us</h2>
          <p className="lead text-muted mt-3">
            Whether article spirits new her covered hastily sitting her. Money witty books nor son add
          </p>
          {/* Image for mobile and tablet */}
          <div className="d-lg-none mt-4">
            <img
              src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
              alt="ongoing meeting"
              className="img-fluid"
            />
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 mt-5 g-4">
            <div className="col d-flex">
              <div style={{ width: '64px', height: '64px' }}>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg"
                  alt="clock"
                  className="img-fluid"
                />
              </div>
              <div className="ms-3">
                <h4 className="h6 fw-semibold text-dark">Time Prompt</h4>
                <p className="text-muted">Whether article spirits new her covered.</p>
              </div>
            </div>

            <div className="col d-flex">
              <div style={{ width: '64px', height: '64px' }}>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg"
                  alt="Friendly"
                  className="img-fluid"
                />
              </div>
              <div className="ms-3">
                <h4 className="h6 fw-semibold text-dark">User Friendly</h4>
                <p className="text-muted">Whether article spirits new her covered.</p>
              </div>
            </div>

            <div className="col d-flex">
              <div style={{ width: '64px', height: '64px' }}>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg"
                  alt="Creative"
                  className="img-fluid"
                />
              </div>
              <div className="ms-3">
                <h4 className="h6 fw-semibold text-dark">Creative Ideas</h4>
                <p className="text-muted">Whether article spirits new her covered.</p>
              </div>
            </div>

            <div className="col d-flex">
              <div style={{ width: '64px', height: '64px' }}>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg"
                  alt="Achievements"
                  className="img-fluid"
                />
              </div>
              <div className="ms-3">
                <h4 className="h6 fw-semibold text-dark">Achievements</h4>
                <p className="text-muted">Whether article spirits new her covered.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="col-lg-6 d-none d-lg-block">
          <img
            src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
            alt="ongoing meeting"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Why;
