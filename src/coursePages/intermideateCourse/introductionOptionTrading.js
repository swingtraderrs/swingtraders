
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import IntroductionToOptionTradingg from '../../images/cardpageimages/intermideate/introductiontooptiontrading.jpg'
import IntroVideos from "../../componants/introvideos";

function IntroductionToOptionTrading(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Introduction to Options Trading course offers a foundational understanding of options and how they work in the financial markets. Covering essential concepts such as call and put options, strike prices, expiration dates, and basic trading strategies, this course is designed for beginners looking to expand their trading toolkit. Gain the knowledge needed to make informed decisions and explore the opportunities that options trading can provide."
                 title="INTRODUCTION TO OPTIONS TRADING"
                 imageone = {IntroductionToOptionTradingg}
                 imagetwo = {IntroductionToOptionTradingg}
              />
               <IntroVideos 
        vone="" 
        vtwo="" 
         topic = ""
      />
         <Footer/>
       </>)
}

export default IntroductionToOptionTrading;