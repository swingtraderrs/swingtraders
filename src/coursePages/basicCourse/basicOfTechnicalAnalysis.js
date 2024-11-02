
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";

import  basicoftechnicalanalysis from '../../images/cardpageimages/basicimages/basicoftechnicalAnalysis.jpg'
function BasicOfTechnicalAnalysis(){
  
       return(<>
         <Header/>
              <BannerForAll
                 title = "BASIC OF TECHNICAL ANALYSIS"
                 text=" Our Basics of Technical Analysis course provides a foundational understanding of analyzing stock price movements and market trends using charts, patterns, and indicators. Learn how to interpret data, identify entry and exit points, and develop strategies to make informed trading decisions. Ideal for beginners, this course empowers you to predict market behavior with confidence."
                 imageone = {basicoftechnicalanalysis}
                 imagetwo = {basicoftechnicalanalysis}
              />
         <Footer/>
       </>)
}

export default BasicOfTechnicalAnalysis;