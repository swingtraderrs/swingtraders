
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";

import masteringinmoneymanagment from '../../images/cardpageimages/advanced/masteringinmoneymanagement.png';
import IntroVideos from "../../componants/introvideos";

function MasteringMoneyManagement(){
  
       return(<>
         <Header/>
              <BannerForAll
                 text = "Our Mastering Money Management course focuses on the crucial skills needed to effectively manage your trading capital and minimize risks. You’ll learn key concepts such as position sizing, risk-reward ratios, and emotional discipline, alongside practical strategies to develop a robust trading plan. Ideal for traders at any level, this course empowers you to protect your investments and enhance your overall trading performance through sound money management practices."
                 title="MASTRING MONEY MANGEMENT"
                 imageone = {masteringinmoneymanagment}
                 imagetwo = {masteringinmoneymanagment}
              />
               <IntroVideos 
        vone="" 
        vtwo="" 
         topic = ""
      />
         <Footer/>
       </>)
}

export default MasteringMoneyManagement;