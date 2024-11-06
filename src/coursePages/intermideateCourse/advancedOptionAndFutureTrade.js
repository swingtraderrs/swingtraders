
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import fandotradingimage from '../../images/cardpageimages/intermideate/fandotrading.jpg'
import IntroVideos from "../../componants/introvideos";

function AdnacedOptionsAndFutureTrade(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Advanced Options and Futures Trading course is designed for seasoned traders looking to refine their skills in complex trading strategies. Covering advanced concepts in options and futures markets, this course includes in-depth discussions on hedging techniques, spread strategies, risk management, and market analysis. Ideal for those aiming to maximize their trading potential, this course empowers you to navigate the dynamic world of derivatives with confidence and expertise."
                 title="ADVANCED OPTIONS AND FUTURES TRADING"
                 imageone = {fandotradingimage}
                 imagetwo = {fandotradingimage}
              />
               <IntroVideos 
        vone="" 
        vtwo="" 
         topic = ""
      />
         <Footer/>
       </>)
}

export default AdnacedOptionsAndFutureTrade;