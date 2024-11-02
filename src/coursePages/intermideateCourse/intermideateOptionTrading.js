
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import image from '../../images/bannerImages/img1.jpg'

function IntermideateStockMarket(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Intermediate Options Trading course is tailored for traders looking to deepen their understanding of options strategies and market dynamics. This course covers essential topics such as options pricing, volatility analysis, and various trading strategies, including vertical spreads, iron condors, and calendar spreads. Designed for those with basic knowledge of options, this course enhances your skills and confidence in executing more complex trades and managing risk effectively."
                 title="INTERMEDIATE OPTIONS TRADING"
                 imageone = {image}
                 imagetwo = {image}
              />
         <Footer/>
       </>)
}

export default IntermideateStockMarket;