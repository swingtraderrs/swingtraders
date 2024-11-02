import React, { useState } from 'react';
import Card from "../card";

function HomebasicCard() {
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
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="BASIC OF STOCK MARKET"
                                navigateurl="/graphicdesign"
                                text="Basics of Stock Market by SWINGTRADERRS: essential knowledge for beginners."
                                image=""
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="LEARN TO EQUITY MARKET ESSENTIALS"
                                navigateurl="/webdevelopment"
                                text="Master essential concepts for successful equity market investing."
                                image=""
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="CORE CONCEPTS OF STOCK INVESTING"
                                navigateurl="/python"
                                text="Understand fundamental principles to enhance your stock investing strategy."
                                image=""
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="STOCK MARKET FOR BIGINNER'S"
                                navigateurl="/python"
                                text="Beginner's Stock Market Mastery: Learn to Invest Wisely and Confidently"
                                image=""
                            />
                        </div>
                    </div>

                    {/* Second Row - Conditional Rendering */}
                    {showMore && (
                        <div className="row d-block d-md-flex justify-content-evenly mt-3">
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="FUNDAMENTALS OF THE STOCK MARKET"
                                    navigateurl="/graphicdesign"
                                    text="Learn essential principles and strategies for stock market success"
                                    image=""
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="UNDERSTANDING OF STOCK MARKET ESSENTIALS"
                                    navigateurl="/webdevelopment"
                                    text="Gain essential insights into core principles of stock market"
                                    image=""
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="NAVIGATING THE STOCK MARKET"
                                    navigateurl="/python"
                                    text="Learn strategies for effectively navigating the stock market."
                                    image=""
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="BASIC OF TECHNICAL ANALYSIS"
                                    navigateurl="/python"
                                    text="Foundational concepts for mastering technical analysis fundamentals"
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

export default HomebasicCard;
