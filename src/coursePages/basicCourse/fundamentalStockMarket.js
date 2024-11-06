
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import  fundamentsofstockmarket from '../../images/cardpageimages/basicimages/fundamentsofstockmarket.jpg'
import IntroVideos from "../../componants/introvideos";

function FundamentalStockMarket(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = " Our Fundamentals of the Stock Market course offers a deep dive into the essential principles that drive stock market movements. Covering topics like market structure, stock valuation, economic indicators, and the roles of supply and demand, this course is ideal for those looking to build a solid understanding of how the stock market operates. Perfect for anyone interested in mastering the basics and beyond."
                 title="FUNDAMENTALS OF THE STOCK MARKET"
                 imageone = {fundamentsofstockmarket}
                 imagetwo = {fundamentsofstockmarket}
              />
               <IntroVideos 
        vone="" 
        vtwo="" 
         topic = ""
      />
         <Footer/>
       </>)
}

export default FundamentalStockMarket;