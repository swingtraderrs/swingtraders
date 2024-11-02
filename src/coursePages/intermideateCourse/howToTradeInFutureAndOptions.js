
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import image from '../../images/bannerImages/img1.jpg'

function HowToTradeInFutureAndOptions(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our How to Trade in Futures & Options course offers a comprehensive guide for traders interested in exploring these dynamic financial instruments. Covering the fundamentals of futures and options, you'll learn about contract specifications, trading strategies, risk management, and market analysis techniques. This course is designed for beginners and aspiring traders, providing the essential knowledge and practical skills needed to navigate the futures and options markets effectively and make informed trading decisions."
                 title="HOW TO TRADE IN FUTURE & OPTIONS"
                 imageone = {image}
                 imagetwo = {image}
              />
         <Footer/>
       </>)
}

export default HowToTradeInFutureAndOptions;