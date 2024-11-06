
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import equitymarketessentials from '../../images/cardpageimages/basicimages/equitymarketessential.jpg'
import IntroVideos from "../../componants/introvideos";

function EquityMarketEssentials(){
  
       return(<>
         <Header/>
              <BannerForAll
                 
                 title = "LEARN TO EQUITY MARKET ESSENTIALS"
                 text = "Our Learn Equity Market Essentials course offers a thorough introduction to the equity market, focusing on critical concepts such as stock valuation, market dynamics, and investment strategies. Designed for beginners, this course provides the foundational knowledge needed to navigate the equity market confidently and make sound investment decisions."
                 imageone = {equitymarketessentials}
                 imagetwo = {equitymarketessentials}
              />
               <IntroVideos 
        vone="" 
        vtwo="" 
         topic = ""
      />
         <Footer/>
       </>)
}

export default EquityMarketEssentials;