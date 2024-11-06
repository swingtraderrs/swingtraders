
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import basicofstockimage from '../../images/cardpageimages/basicimages/basic_of_stock_market.jpg'
import IntroVideos from "../../componants/introvideos";

function BasicOfStockMarket(){
  
       return(<>
         <Header/>
              <BannerForAll
                 title = "BASIC OF STOCK MARKET"
                 text="We offer a comprehensive Basics of Stock Market course designed to introduce essential concepts for beginners. This course covers stock market fundamentals, trading strategies, market trends, and risk management techniques. Perfect for those new to investing, it provides a solid foundation to help you navigate and make informed decisions in the stock market confidently."
                 imageone = {basicofstockimage}
                 imagetwo = {basicofstockimage}
              />
              <IntroVideos 
        vone="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        vtwo="https://www.youtube.com/embed/3JZ_D3ELwOQ" 
         topic = "BASIC OF STOCK MARKET"
      />
         <Footer/>
       </>)
}

export default BasicOfStockMarket;