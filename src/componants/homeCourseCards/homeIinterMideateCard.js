import React, { useState } from 'react';
import Card from "../card";
import IntroductionToOptionTrading from '../../images/cardpageimages/intermideate/introductiontooptiontrading.jpg'
import intermideateoptionstratigies from '../../images/cardpageimages/intermideate/intermideateoptionstratigies.jpg'
import masterclassimage from '../../images/cardpageimages/intermideate/mastetrclassimage.jpg'
import masteringofoptionchainimage from '../../images/cardpageimages/intermideate/masteringofoptonchain.jpg'

import fandotradingimage from '../../images/cardpageimages/intermideate/fandotrading.jpg'
import optiontradingtechnique from '../../images/cardpageimages/intermideate/optionstradingtechnique.jpg'
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
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="INTRODUCTION TO OPTIONS TRADING"
                                navigateurl="/introductionOptionTrading"
                                text="Discover the essentials of options trading for beginners."
                                image={IntroductionToOptionTrading}
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="INTERMEDIATE OPTIONS STRATEGIES"
                                navigateurl="/intermideateOptionStratigies"
                                text="Advanced techniques for effective options trading strategies"
                                image={intermideateoptionstratigies}
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="OPTIONS ANALYSIS MASTERCLASS"
                                navigateurl="/optionAnalysisMasterclass"
                                text="Comprehensive training for mastering options analysis techniques"
                                image={masterclassimage}
                            />
                        </div>
                        <div className="col-md-3 mt-0 mt-sm-3">
                            <Card
                                title="ADVANCED OPTIONS AND FUTURES TRADING"
                                navigateurl="/advancedOptionAndFutureTrade"
                                text="Expert strategies for advanced options and futures trading"
                                image={fandotradingimage}
                            />
                        </div>
                    </div>

                    {/* Second Row - Conditional Rendering */}
                    {showMore && (
                        <div className="row d-block d-md-flex justify-content-evenly mt-3">
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="INTERMEDIATE OPTIONS TRADING"
                                    navigateurl="/intermideateOptionTrading"
                                    text="Explore the art of visual coe design techniques."
                                    image="Skills and strategies for successful intermediate options trading"
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="OPTIONS TRADING TECHNIQUES"
                                    navigateurl="/optionsTradingTechnique"
                                    text="Proven techniques for successful options trading strategies."
                                    image={optiontradingtechnique}
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="MASTERING OPTIONS CHAIN"
                                    navigateurl="/masteringOptionsChain"
                                    text="Comprehensive guide to understanding options chain dynamics."
                                    image={masteringofoptionchainimage}
                                />
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3">
                                <Card
                                    title="HOW TO TRADE IN FUTURE & OPTIONS"
                                    navigateurl="/howToTradeInFutureAndOptions"
                                    text="Unlock the secrets of trading futures and options effortlessly"
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
