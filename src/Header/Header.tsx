import { Avatar } from '@mantine/core';
import {
  IconAsset,
  IconBellRinging,
  IconSettings2,
} from '@tabler/icons-react';

const Header = () => {
  return (
    <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <IconAsset className="h-10 w-10" stroke={1.25} />
        <div className="text-2xl font-semibold">ijobs</div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3">
        <a href="">Find Jobs</a>
        <a href="">Find Talent</a>
        <a href="">Upload Job</a>
        <a href="">About Us</a>
      </div>

      {/* User section */}
      <div className="flex gap-5 items-center">
        <IconBellRinging />

        <div className="flex items-center gap-2">
          <div>job</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>

        <IconSettings2 />
      </div>
      
    </div>
  );
};

export default Header;