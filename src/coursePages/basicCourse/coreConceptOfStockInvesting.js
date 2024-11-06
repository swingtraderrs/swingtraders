
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import coreconcept from '../../images/cardpageimages/basicimages/core_concept.jpg'
import IntroVideos from "../../componants/introvideos";
function CoreConceptOfStockInvesting(){
  
       return(<>
         <Header/>
              <BannerForAll
                 title="CORE CONCEPTS OF STOCK INVESTING"
                 text = "Our Core Concepts of Stock Investing course dives into the fundamental principles of long-term investing. Covering key topics like value investing, portfolio diversification, risk assessment, and financial analysis, this course equips you to make informed decisions. Perfect for those aiming to build a strong, sustainable investment portfolio, it provides essential tools for financial growth."
                 imageone = {coreconcept}
                 imagetwo = {coreconcept}
              />

<IntroVideos 
        vone="" 
        vtwo="" 
         topic = ""
      />
         <Footer/>
       </>)
}

export default CoreConceptOfStockInvesting;