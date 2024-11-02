import React, { useState } from 'react';
import Card from "../card";
import stockmarketimage from '../../images/cardpageimages/basicimages/basic_of_stock_market.jpg'
import coreconcept from '../../images/cardpageimages/basicimages/core_concept.jpg'
import EquityMarketEssentials from '../../images/cardpageimages/basicimages/equitymarketessential.jpg'
import stockmarketforbiginner from '../../images/cardpageimages/basicimages/stockmarketforbiginner.jpg'
import  fundamentsofstockmarket from '../../images/cardpageimages/basicimages/fundamentsofstockmarket.jpg'
import  understandingstockmarket from '../../images/cardpageimages/basicimages/understandingofstockmarket.jpg'
import  basicoftechnicalanalysis from '../../images/cardpageimages/basicimages/basicoftechnicalAnalysis.jpg'
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
                                navigateurl="/basicOfStockMarket"
                                text="Basics of Stock Market by SWINGTRADERRS: essential knowledge for beginners."
                                image={stockmarketimage}
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="LEARN TO EQUITY MARKET ESSENTIALS"
                                navigateurl="/equityMarketEssentials"
                                text="Master essential concepts for successful equity market investing."
                                image={EquityMarketEssentials}
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="CORE CONCEPTS OF STOCK INVESTING"
                                navigateurl="/coreConceptOfStockInvesting"
                                text="Understand fundamental principles to enhance your stock investing strategy."
                                image={coreconcept}
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="STOCK MARKET FOR BIGINNER'S"
                                navigateurl="/stockMarketForBiginners"
                                text="Beginner's Stock Market Mastery: Learn to Invest Wisely and Confidently"
                                image={fundamentsofstockmarket}
                            />
                        </div>
                    </div>

                    {/* Second Row - Conditional Rendering */}
                    {showMore && (
                        <div className="row d-block d-md-flex justify-content-evenly mt-3">
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="FUNDAMENTALS OF THE STOCK MARKET"
                                    navigateurl="/fundamentalStockMarket"
                                    text="Learn essential principles and strategies for stock market success"
                                    image={fundamentsofstockmarket}
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="UNDERSTANDING OF STOCK MARKET ESSENTIALS"
                                    navigateurl="/understandingOfstockMarket"
                                    text="Gain essential insights into core principles of stock market"
                                    image={understandingstockmarket}
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="NAVIGATING THE STOCK MARKET"
                                    navigateurl="/navigatingStockMarket"
                                    text="Learn strategies for effectively navigating the stock market."
                                    image=""
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="BASIC OF TECHNICAL ANALYSIS"
                                    navigateurl="/basicOfTechnicalAnalysis"
                                    text="Foundational concepts for mastering technical analysis fundamentals"
                                    image={basicoftechnicalanalysis}
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
