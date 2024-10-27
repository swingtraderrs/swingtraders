import React, { useState } from 'react';
import Card from "../card";

function HomeIntermideateCard() {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <div className="container-fluid py-4 bg-gray">
                <div className="container">
                    <div className="row d-md-flex d-block justify-content-evenly">
                        {/* First Row - Always Visible */}
                        <div className="col-md-4 mt-0 mt-sm-3">
                            <Card
                                title="Graphic Design"
                                navigateurl="/graphicdesign"
                                text="Explore the art of visual communication with creative design techniques."
                                image=""
                            />
                        </div>
                        <div className="col-md-4 mt-0 mt-sm-3">
                            <Card
                                title="Full Stack Web Development"
                                navigateurl="/webdevelopment"
                                text="Build dynamic web applications by mastering frontend and backend skills."
                                image=""
                            />
                        </div>
                        <div className="col-md-4 mt-0 mt-sm-3">
                            <Card
                                title="Python"
                                navigateurl="/python"
                                text="Master programming concepts and features of Python for versatile applications."
                                image=""
                            />
                        </div>
                    </div>

                    {/* Second Row - Conditional Rendering */}
                    {showMore && (
                        <div className="row d-block d-md-flex justify-content-evenly mt-3">
                            <div className="col-md-4 mt-0 mt-sm-3">
                                <Card
                                    title="Graphic Design"
                                    navigateurl="/graphicdesign"
                                    text="Explore the art of visual communication with creative design techniques."
                                    image=""
                                />
                            </div>
                            <div className="col-md-4 mt-0 mt-sm-3">
                                <Card
                                    title="Full Stack Web Development"
                                    navigateurl="/webdevelopment"
                                    text="Build dynamic web applications by mastering frontend and backend skills."
                                    image=""
                                />
                            </div>
                            <div className="col-md-4 mt-0 mt-sm-3">
                                <Card
                                    title="Python"
                                    navigateurl="/python"
                                    text="Master programming concepts and features of Python for versatile applications."
                                    image=""
                                />
                            </div>
                        </div>
                    )}

                    {/* View More / View Less Button */}
                    <div className="text-end mt-3">
                        <button
                            onClick={handleToggle}
                            className="btn"
                            style={{ backgroundColor: 'black', color: 'white' }}
                        >
                            {showMore ? 'View Less' : 'View More'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeIntermideateCard;
