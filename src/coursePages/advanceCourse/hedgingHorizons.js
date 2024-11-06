
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import image from '../../images/bannerImages/img1.jpg'
import IntroVideos from "../../componants/introvideos";

function HedgingHorizon(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Hedging Horizons course focuses on the art and science of hedging strategies in trading. You’ll learn how to protect your investments against market volatility and unexpected price movements using various hedging techniques. This course covers options, futures, and other derivatives, providing you with practical insights into risk management and asset protection. Designed for traders and investors at all levels, this course equips you with the knowledge and skills needed to navigate the complexities of hedging and safeguard your trading portfolio effectively."
                 title="HEDGING HORIZONS"
                 imageone = {image}
                 imagetwo = {image}
              />
               <IntroVideos 
        vone="" 
        vtwo="" 
         topic = ""
      />
         <Footer/>
       </>)
}

export default HedgingHorizon;