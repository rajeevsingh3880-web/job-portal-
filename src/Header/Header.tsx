import { Avatar, Indicator } from '@mantine/core';
import {
  IconBrandVolkswagen,
  IconBellRinging,
  IconSettings2
} from '@tabler/icons-react';
import Navlinks from './Navlinks';

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-900 px-6 text-white h-20 flex justify-between items-center">

      {/* Logo */}
      <div className="flex gap-3 items-center text-bright-sun-400">
        <IconBrandVolkswagen className="h-10 w-10" stroke={1.25} />
        <div className="text-2xl font-semibold">Job Portal</div>
      </div>

      <Navlinks />

      {/* User section */}
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2">
          <div>Golu</div>
          <Avatar src={"avatar image.png"} alt="Golu" />
        </div>

        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings2 stroke={1.5} />
        </div>

        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator size={12} withBorder processing>
            <IconBellRinging />
          </Indicator>
        </div>
      </div>

    </div>
  );
};

export default Header;