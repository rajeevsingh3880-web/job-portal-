import JobCard from "../Findjobs/JobCard";
import Searchbar from "../Findjobs/Searchbar";

const Findjobs = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Searchbar />
            <JobCard/>
        </div>
    );
};

export default Findjobs;