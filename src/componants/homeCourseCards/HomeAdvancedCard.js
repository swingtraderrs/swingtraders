import React, { useState } from 'react';
import Card from "../card";

import masteringinmoneymanagment from '../../images/cardpageimages/advanced/masteringinmoneymanagement.png';

import artofinvestinginnutualfunds from '../../images/cardpageimages/advanced/artofinvestinginmutualfunds.png';
import artoffutureandoptiontrading from '../../images/cardpageimages/advanced/artoffutureandoptiontrading.png';

function HomeAdvancedCard() {
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
                                title="MASTRING MONEY MANGEMENT"
                                navigateurl="/masteringMoneyManagement"
                                text="Develop essential skills for effective money management strategies."
                                image={masteringinmoneymanagment}
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="ART INVESTING IN MUTUAL FUND"
                                navigateurl="/artInvestingInMutualFunds"
                                text="Learn strategies for successful investing in mutual funds."
                                image={artofinvestinginnutualfunds}
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="ART OF FUTURE AND OPTIONS"
                                navigateurl="/artOfFutureAndOptios"
                                text="Master the strategies and techniques of futures and options trading."
                                image={artoffutureandoptiontrading}
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="MASTER WITH PATTERNS"
                                navigateurl="/masterWithPattern"
                                text="Master market patterns effectively for achieving consistent trading success and profitability."
                                image=""
                            />
                        </div>
                    </div>

                    {/* Second Row - Conditional Rendering */}
                    {showMore && (
                        <div className="row d-block d-md-flex justify-content-evenly mt-3">
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="FUTURES & OPTIONS ALCHEMY"
                                    navigateurl="/futureAndOptionsAlchemy"
                                    text="Transform your trading skills with futures and options mastery."
                                    image=""
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="THE F&O EDGE"
                                    navigateurl="/theEdge"
                                    text="The F&O Edge: Unlock essential strategies to enhance trading success and manage risks effectively."
                                    image=""
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="UNLOCKING MARKET SECRETS"
                                    navigateurl="/unlockingMarketSecret"
                                    text="Discover hidden strategies for successful market investing."
                                    image=""
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="HEDGING HORIZONS"
                                    navigateurl="/hedgingHorizons"
                                    text="Hedging Horizons: Discover techniques to mitigate risks while optimizing potential profits."
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

export default HomeAdvancedCard;
