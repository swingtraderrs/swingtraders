
import Header from "./header";
import BannerCarousel from "./banner";
import { useNavigate } from "react-router-dom";
import HomebasicCard from "./homeCourseCards/homeBasicCards";
import HomeIntermideateCard from "./homeCourseCards/homeIinterMideateCard";
import HomeAdvancedCard from "./homeCourseCards/HomeAdvancedCard";
import ContactForm from "./contactcomponents/contactform";
import Footer from "./footer";
import Feedback from "./feedbackcomponent/feedback";
import Faq from "./homefaq";
import Team from "./teamComponents/team";
// import TeamSlider from "./teamComponents/teamslider";
function Home(){
     const navigate = useNavigate();
     return (<>
     <Header/>
     <BannerCarousel/>
     <div className="container-fluid py-5 bg-gray text-white">
                <div className="container bg-gray">
                    <div className="row d-flex flex-row justify-content-between py-3">
                        <div className="col-auto">
                            <h2 className="text-black">Our Popular Courses</h2>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-danger text-light rounded" onClick={() => { navigate("/totalcourseservice") }}>All Courses</button>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-center py-3">Basic Courses</h2>
             <HomebasicCard/>
             <h2 className="text-center py-3">Intermideate Courses</h2>
             <HomeIntermideateCard/>
             <h2 className="text-center py-3">Advanced Courses</h2>
             <HomeAdvancedCard/>
             <Team/>
               <ContactForm/>
                {/* <Feedback/> */}
                
                 {/* <Faq/> */}
               <Footer/>

     </>)
}

export default Home;