
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";

import stockmarketforbiginner from '../../images/cardpageimages/basicimages/stockmarketforbiginner.jpg'
function StockMarketForBiginners(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Stock Market for Beginners course is designed to help newcomers understand the fundamentals of the stock market. Covering essential topics like how stocks work, trading basics, market trends, and risk management, this course provides the groundwork needed to start investing with confidence. Perfect for beginners aiming to make informed decisions in the stock market."
                 title = "STOCK MARKET FOR BIGINNER'S"
                 imageone = {stockmarketforbiginner}
                 imagetwo = {stockmarketforbiginner}
              />
         <Footer/>
       </>)
}

export default StockMarketForBiginners;