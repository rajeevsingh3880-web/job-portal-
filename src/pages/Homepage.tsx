
import Dreamjob from "../LandingPage/Dreamjob";
import Companies from "../LandingPage/Companies";
import Jobcatogry from "../LandingPage/Jobcatogry";
import Working from "../LandingPage/Working";
import Testimonials from "../LandingPage/Testimonials";
import Subscribe from "../LandingPage/Subscribe";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-900 font-['Poppins']">
      <Dreamjob />
      <Companies/>
      <Jobcatogry/>
      <Working/>
      <Testimonials/>
      <Subscribe/>
    </div>
  );
};

export default Homepage;