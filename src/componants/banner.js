import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import img1 from '.././images/bannerImages/img1.jpg';
import img1 from '../images/cardpageimages/intermideate/masteringofoptonchain.jpg'
import img2 from '../images/cardpageimages/intermideate/introductiontooptiontrading.jpg'
import img3 from '../images/cardpageimages/basicimages/core_concept.jpg'
import img4 from '../images/cardpageimages/basicimages/basicoftechnicalAnalysis.jpg'

const BannerCarousel = () => {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img 
                        src={img1} 
                        className="d-block w-100 img-fluid" 
                        alt="Slide 1" 
                        style={{ objectFit: '100% 100%', height: '80vh' }} // Adjust height for large devices
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src={img2}
                        className="d-block w-100" 
                        alt="Slide 2" 
                        style={{ objectFit: '100% 100%', height: '80vh' }}
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src={img3} // Placeholder image
                        className="d-block w-100" 
                        alt="Slide 3" 
                        style={{ objectFit: '100% 100%', height: '80vh' }}
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src={img4} 
                        className="d-block w-100" 
                        alt="Slide 4" 
                        style={{ objectFit: '100% 100%', height: '80vh' }}
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201606/animals2_647_062916094940.jpg?VersionId=PbrvnFaz1I4p1N6B.qJ1.zHtqTyJunn4&size=690:388" 
                        className="d-block w-100" 
                        alt="Slide 5" 
                        style={{ objectFit: 'cover', height: '75vh' }}
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            {/* CSS to adjust height for smaller devices */}
            <style>
                {`
                    @media (max-width: 768px) {
                        .carousel-item img {
                            height: 50vh; // Set height for small devices
                            object-fit:contain
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default BannerCarousel;
