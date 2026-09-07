import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const Dreamjob = () =>{
    return (
        <div className="flex items-center px-20">
            <div className="flex flex-col w-[45%] gap-3">
               <div className="text-6xl font-bold leading-tight text-mine-shaft-100">
                Find your <span className="text-bright-sun-400"> dream </span> <span className="text-bright-sun-400"> job </span> with us 
               </div>
               <div className="text-lg text-mine-shaft-200">
                Good Life begins with a good company. sart explore thousands of jobs in one place. 
               </div>
               <div className="flex gap-3">
                 <TextInput className="bg-mine-shaft-800 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                 variant="unstyled" label="Job Title" placeholder="Software Engineer"/>

                <TextInput className="bg-mine-shaft-800 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Type" placeholder="Full Time"/>          
               <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
               <IconSearch className="h-[85%]"/>
               </div>
            </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
               <div className="w-[30rem] relative">
                 <img src="image_4a67d28-Photoroom.png" alt="boy" />
                 <div className="absolute right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                    <div className="text-center mb-1 text-sm  text-mine-shaft-100">10k+ got job</div>
                    <Avatar.Group>
                       <Avatar src="Avatar.png" />
                       <Avatar src="Avatar1.png" />
                       <Avatar src="Avatar2.png" />
                       <Avatar>+9k</Avatar>
                    </Avatar.Group>
                 </div>
                 <div className="absolute -left-10 w-fit top-[20%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                    <div className="flex gap-2 items-center">
                       <div className="w-12 h-12 p-1">
                          <img src="Google-Photoroom.png" alt="" />
                       </div>
                    <div className="text-sm text-mine-shaft-200 text-xs">
                        <div>Software Engineer</div>
                        <div>New York</div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
            </div>
    );
}
export default Dreamjob;