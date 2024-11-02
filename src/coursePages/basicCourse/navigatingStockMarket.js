
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import image from '../../images/bannerImages/img1.jpg'

function NavigatingStockMarket(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Navigating the Stock Market course equips you with the skills needed to confidently explore and understand the complexities of the stock market. From analyzing trends and interpreting charts to learning trading strategies and risk management, this course is designed for those who want to make informed decisions and successfully navigate market fluctuations. Ideal for both beginners and aspiring traders."
                 title="NAVIGATING THE STOCK MARKET"
                 imageone = {image}
                 imagetwo = {image}
              />
         <Footer/>
       </>)
}

export default NavigatingStockMarket;