
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";

import artofinvestinginnutualfunds from '../../images/cardpageimages/advanced/artofinvestinginmutualfunds.png';

function ArtInvestingInMutualFunds(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Art of Investing in Mutual Funds course provides a comprehensive understanding of mutual funds as an investment vehicle. You'll learn about different types of mutual funds, asset allocation strategies, and the benefits of diversification. This course also covers how to analyze fund performance, fees, and risk factors to make informed investment decisions. Ideal for beginners and those looking to enhance their investment portfolio, this course equips you with the skills to navigate the mutual fund landscape effectively."
                 title="ART INVESTING IN MUTUAL FUND"
                 imageone = {artofinvestinginnutualfunds}
                 imagetwo = {artofinvestinginnutualfunds}
              />
         <Footer/>
       </>)
}

export default ArtInvestingInMutualFunds;