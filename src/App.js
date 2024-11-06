
import { BrowserRouter,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./componants/home";
import About from "./componants/about";
import Contact from "./componants/contact";
import Error from "./componants/errorpage";
import Blogs from "./componants/blogs";
// basic course start 
import BasicOfStockMarket from "./coursePages/basicCourse/basicOfStockMarket";
import EquityMarketEssentials from "./coursePages/basicCourse/EquityMarketEssentials";
import CoreConceptOfStockInvesting from "./coursePages/basicCourse/coreConceptOfStockInvesting";
import StockMarketForBiginners from "./coursePages/basicCourse/stockMarketForBiginners";
import FundamentalStockMarket from "./coursePages/basicCourse/fundamentalStockMarket";
import UnderstandigOfStockMarket from "./coursePages/basicCourse/underStandingOfstockMarket";
import NavigatingStockMarket from "./coursePages/basicCourse/navigatingStockMarket";
import BasicOfTechnicalAnalysis from "./coursePages/basicCourse/basicOfTechnicalAnalysis"; // basic course end

// intermideate course start 
import AdnacedOptionsAndFutureTrade from "./coursePages/intermideateCourse/advancedOptionAndFutureTrade";
import HowToTradeInFutureAndOptions from "./coursePages/intermideateCourse/howToTradeInFutureAndOptions";
import IntermideateOptionStratiges from "./coursePages/intermideateCourse/intermideateOptionStratigies";
import IntermideateStockMarket from "./coursePages/intermideateCourse/intermideateOptionTrading";
import IntroductionToOptionTrading from "./coursePages/intermideateCourse/introductionOptionTrading";
import MasteringOptionChain from "./coursePages/intermideateCourse/masteringOptionsChain";
import OptionsAnalysisMasterclass from "./coursePages/intermideateCourse/optionAnalysisMasterclass";
import OptionsTradingTechnique from "./coursePages/intermideateCourse/optionsTradingTechnique"; // intermideate course end here

// advanced course start form here

import ArtInvestingInMutualFunds from "./coursePages/advanceCourse/artInvestingInMutualFunds";
import ArtOfFutureAndOptions from "./coursePages/advanceCourse/artOfFutureAndOptios";
import FutureAndOptionAlchemy from "./coursePages/advanceCourse/futureAndOptionsAlchemy";
import HedgingHorizon from "./coursePages/advanceCourse/hedgingHorizons";
import MasteringMoneyManagement from "./coursePages/advanceCourse/masteringMoneyManagement";
import MasterWithPattern from "./coursePages/advanceCourse/masterWithPattern";
import TheEdge from "./coursePages/advanceCourse/theEdge";
import UnlockingMarketSecret from "./coursePages/advanceCourse/unlockingMarketSecret";

function App() {
  return (
    
   <>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="*" element={<Error />} />
          <Route path="/basicOfStockMarket" element={<BasicOfStockMarket/>}/>
          <Route path="/equityMarketEssentials" element={<EquityMarketEssentials/>}/>
          <Route path="/coreConceptOfStockInvesting" element={<CoreConceptOfStockInvesting/>}/>
          <Route path="/stockMarketForBiginners" element={<StockMarketForBiginners/>}/>
          <Route path="/fundamentalStockMarket" element={<FundamentalStockMarket/>}/>
          <Route path="/understandingOfstockMarket" element={<UnderstandigOfStockMarket/>}/>
          <Route path="/navigatingStockMarket" element={<NavigatingStockMarket/>}/>
          <Route path="/basicOfTechnicalAnalysis" element={<BasicOfTechnicalAnalysis/>}/>

          <Route path="/advancedOptionAndFutureTrade" element={<AdnacedOptionsAndFutureTrade/>}/>
          <Route path="/howToTradeInFutureAndOptions" element={<HowToTradeInFutureAndOptions/>}/>
          <Route path="/intermideateOptionStratigies" element={<IntermideateOptionStratiges/>}/>
          <Route path="/intermideateOptionTrading" element={<IntermideateStockMarket/>}/>
          <Route path="/introductionOptionTrading" element={<IntroductionToOptionTrading/>}/>
          <Route path="/masteringOptionsChain" element={<MasteringOptionChain/>}/>
          <Route path="/optionAnalysisMasterclass" element={<OptionsAnalysisMasterclass/>}/>
          <Route path="/optionsTradingTechnique" element={<OptionsTradingTechnique/>}/>

          <Route path="artInvestingInMutualFunds" element={<ArtInvestingInMutualFunds/>}/>
          <Route path="/artOfFutureAndOptios" element={<ArtOfFutureAndOptions/>}/>
          <Route path="/futureAndOptionsAlchemy" element={<FutureAndOptionAlchemy/>}/>
          <Route path="/hedgingHorizons" element={<HedgingHorizon/>}/>
          <Route path="/masteringMoneyManagement" element={<MasteringMoneyManagement/>}/>
          <Route path="/masterWithPattern" element={<MasterWithPattern/>}/>
          <Route path="/theEdge" element={<TheEdge/>}/>
          <Route path="/unlockingMarketSecret" element={<UnlockingMarketSecret/>}/>
          
         </Routes>
       </BrowserRouter>
   </>
  );
}

export default App;
