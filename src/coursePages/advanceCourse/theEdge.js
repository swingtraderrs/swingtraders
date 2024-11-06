
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import image from '../../images/bannerImages/img1.jpg'
import IntroVideos from "../../componants/introvideos";

function TheEdge(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our The F&O Edge course provides traders with a competitive advantage in the futures and options markets. You will learn about advanced strategies, market analysis techniques, and risk management practices that can help you capitalize on market movements. This course covers essential topics such as option greeks, volatility analysis, and trading psychology, empowering you to make informed decisions and enhance your trading performance. Ideal for intermediate to advanced traders, this course equips you with the insights and tools needed to gain a strategic edge in F&O trading."
                 title="THE F&O EDGE"
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

export default TheEdge;