
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";

import artOfFutureAndOptiostraindg from '../../images/cardpageimages/advanced/artoffutureandoptiontrading.png';
import IntroVideos from "../../componants/introvideos";

function ArtOfFutureAndOptions(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Art of Futures and Options course offers a deep dive into the intricacies of trading futures and options as powerful financial instruments. You’ll explore advanced strategies, market analysis techniques, and risk management practices to enhance your trading skills. This course emphasizes the art of crafting effective trading plans, understanding market psychology, and executing trades with precision. Perfect for intermediate to advanced traders, this course equips you with the knowledge and confidence needed to navigate the complexities of futures and options markets successfully."
                 title="ART OF FUTURE AND OPTIONS"
                 imageone = {artOfFutureAndOptiostraindg}
                 imagetwo = {artOfFutureAndOptiostraindg}
              />
               <IntroVideos 
        vone="" 
        vtwo="" 
         topic = ""
      />
         <Footer/>
       </>)
}

export default ArtOfFutureAndOptions;