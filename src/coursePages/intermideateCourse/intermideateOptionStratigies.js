
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";

import intermideateoptionstratigies from '../../images/cardpageimages/intermideate/intermideateoptionstratigies.jpg'
import IntroVideos from "../../componants/introvideos";

function IntermideateOptionStratiges(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text ="Our Intermediate Options Strategies course delves deeper into the world of options trading, equipping you with advanced techniques for maximizing profits and managing risk. You'll learn strategies like spreads, straddles, strangles, and covered calls, along with their applications in different market conditions. Ideal for those with a basic understanding of options, this course enhances your trading skills and helps you navigate complex market scenarios with confidence."
                 title="INTERMEDIATE OPTIONS STRATEGIES"
                 imageone = {intermideateoptionstratigies}
                 imagetwo = {intermideateoptionstratigies}
              />
               <IntroVideos 
        vone="" 
        vtwo="" 
         topic = ""
      />
         <Footer/>
       </>)
}

export default IntermideateOptionStratiges;