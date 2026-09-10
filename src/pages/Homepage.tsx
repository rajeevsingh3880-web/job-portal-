import Header from "../Header/Header";
import Dreamjob from "../LandingPage/Dreamjob";
import Companies from "../LandingPage/Companies";
import Jobcatogry from "../LandingPage/Jobcatogry";
import Working from "../LandingPage/Working";
import Testimonials from "../LandingPage/Testimonials";
import Subscribe from "../LandingPage/Subscribe";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-900 font-['Poppins']">
      <Header />
      <Dreamjob />
      <Companies/>
      <Jobcatogry/>
      <Working/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default Homepage;