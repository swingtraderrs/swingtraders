function IntroVideos({ vone, vtwo , topic }) {
    return (
      <>
        <div className="container-fluid my-3 py-5">
          <div className="container">
              <h2 className="text-center py-5">Intorduction of {topic}</h2>
            <div className="row justify-content-center">
              {/* Video 1 */}
              <div className="col-12 col-md-5 mb-3 d-flex justify-content-center">
                <iframe
                  src={vone}
                  title="Introductory Video 1"
                  className="w-100"
                  style={{ height: '250px', maxWidth: '100%' }}
                  allowFullScreen
                ></iframe>
              </div>
  
              {/* Video 2 */}
              <div className="col-12 col-md-5 mb-3 d-flex justify-content-center">
                <iframe
                  src={vtwo}
                  title="Introductory Video 2"
                  className="w-100"
                  style={{ height: '250px', maxWidth: '100%' }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default IntroVideos;
  