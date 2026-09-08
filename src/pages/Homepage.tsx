import Header from "../Header/Header";
import Dreamjob from "../LandingPage/Dreamjob";
import Companies from "./Companies";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-900 font-['Poppins']">
      <Header />
      <Dreamjob />
      <Companies/>
    </div>
  );
};

export default Homepage;