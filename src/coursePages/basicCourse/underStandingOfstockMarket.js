
import Header from "../../componants/header";
import Footer from "../../componants/footer";
import BannerForAll from "../../componants/bannerForAll";
import understandingstockmarket from '../../images/cardpageimages/basicimages/understandingofstockmarket.jpg'
import IntroVideos from "../../componants/introvideos";

function UnderstandigOfStockMarket() {

  return (<>
    <Header />
    <BannerForAll
      text="Our Understanding Stock Market Essentials course provides a comprehensive overview of the key elements that shape the stock market. Covering topics such as market functions, types of securities, trading mechanisms, and the impact of economic indicators, this course is perfect for those seeking to grasp the foundational concepts necessary for effective investing and trading in the stock market."
      title="UNDERSTANDING OF STOCK MARKET ESSENTIALS"
      imageone={understandingstockmarket}
      imagetwo={understandingstockmarket}
    />
    <IntroVideos
      vone=""
      vtwo=""
      topic=""
    />
    <Footer />
  </>)
}

export default UnderstandigOfStockMarket;