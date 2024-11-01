import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '.././images/bannerImages/img1.jpg'

const BannerCarousel = () => {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img 
                        src={img1} 
                        className="d-block w-100" 
                        alt="Slide 1" 
                        style={{ objectFit: 'cover', height: '75vh' }} // Adjust height for large devices
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src="https://assets.cntraveller.in/photos/65d87904d224970ac4f465cc/16:9/w_1024%2Cc_limit/COVER-BABY-ANIMALS.jpg" 
                        className="d-block w-100" 
                        alt="Slide 2" 
                        style={{ objectFit: 'cover', height: '75vh' }}
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src="https://via.placeholder.com/800x400.png?text=Slide+3" // Placeholder image
                        className="d-block w-100" 
                        alt="Slide 3" 
                        style={{ objectFit: 'cover', height: '75vh' }}
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src="https://cdn.britannica.com/94/494-004-BAA096C7/Fallow-deer.jpg" 
                        className="d-block w-100" 
                        alt="Slide 4" 
                        style={{ objectFit: 'cover', height: '75vh' }}
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
