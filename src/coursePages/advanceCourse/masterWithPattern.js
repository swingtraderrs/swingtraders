
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import image from '../../images/bannerImages/img1.jpg'

function MasterWithPattern(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Master with Patterns course focuses on recognizing and utilizing chart patterns to enhance your trading strategies. You'll learn to identify key formations such as head and shoulders, double tops, and flags, and understand their implications for price movement. This course also covers the psychology behind patterns, helping you to make informed trading decisions. Ideal for traders at all levels, this course equips you with the skills to leverage patterns effectively for improved market analysis and trading success."
                 title="MASTER WITH PATTERNS"
                 imageone = {image}
                 imagetwo = {image}
              />
         <Footer/>
       </>)
}

export default MasterWithPattern;