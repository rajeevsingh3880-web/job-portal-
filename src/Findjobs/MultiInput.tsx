import {
  IconSearch,
  IconMapPin,
  IconBriefcase,
  IconCoinRupee,
  IconChevronUp,
  IconChevronDown,
  IconBolt,
} from "@tabler/icons-react";
import { useState } from "react";

const MultiInput = () => {
  const [salary, setSalary] = useState(300);

  return (
    <div className="w-full bg-[#2b2b2b] px-6 py-12">

      {/* Top Border */}
      <div className="border-t border-gray-700 mb-12"></div>

      <div className="flex flex-col lg:flex-row items-center">

        {/* Job Title */}
        <div className="w-full lg:flex-1 flex items-center gap-3 px-2 lg:px-5 py-4 lg:border-r border-gray-700">

          <div className="h-10 w-10 rounded-full bg-[#353535] flex items-center justify-center">
            <IconSearch
              size={25}
              stroke={2}
              className="text-bright-sun-400"
            />
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Job Title"
              className="w-full bg-transparent outline-none
                         text-gray-300 text-lg
                         placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col text-gray-500">
            <IconChevronUp size={18} />
            <IconChevronDown size={18} />
          </div>
        </div>


        {/* Location */}
        <div className="w-full lg:flex-1 flex items-center gap-3 px-2 lg:px-5 py-4 lg:border-r border-gray-700">

          <div className="h-10 w-10 rounded-full bg-[#353535] flex items-center justify-center">
            <IconMapPin
              size={25}
              stroke={2}
              className="text-bright-sun-400"
            />
          </div>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Location"
              className="w-full bg-transparent outline-none
                         text-gray-300 text-lg
                         placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col text-gray-500">
            <IconChevronUp size={18} />
            <IconChevronDown size={18} />
          </div>
        </div>


        {/* Experience */}
        <div className="w-full lg:flex-1 flex items-center gap-3 px-2 lg:px-5 py-4 lg:border-r border-gray-700">

          <div className="h-10 w-10 rounded-full bg-[#353535] flex items-center justify-center">
            <IconBriefcase
              size={25}
              stroke={2}
              className="text-bright-sun-400"
            />
          </div>

          <div className="flex-1">
            <select
              className="w-full bg-transparent outline-none
                         text-gray-300 text-lg
                         appearance-none cursor-pointer"
              defaultValue=""
            >
              <option
                value=""
                disabled
                className="bg-[#2b2b2b]"
              >
                Experience
              </option>

              <option value="fresher" className="bg-[#2b2b2b]">
                Fresher
              </option>

              <option value="1-2" className="bg-[#2b2b2b]">
                1 - 2 Years
              </option>

              <option value="3-5" className="bg-[#2b2b2b]">
                3 - 5 Years
              </option>

              <option value="5-10" className="bg-[#2b2b2b]">
                5 - 10 Years
              </option>

              <option value="10+" className="bg-[#2b2b2b]">
                10+ Years
              </option>
            </select>
          </div>

          <div className="flex flex-col text-gray-500">
            <IconChevronUp size={18} />
            <IconChevronDown size={18} />
          </div>
        </div>


        {/* Job Type */}
        <div className="w-full lg:flex-1 flex items-center gap-3 px-2 lg:px-5 py-4 lg:border-r border-gray-700">

          <div className="h-10 w-10 rounded-full bg-[#353535] flex items-center justify-center">
            <IconBolt
              size={25}
              stroke={2}
              className="text-bright-sun-400"
            />
          </div>

          <div className="flex-1">
            <select
              className="w-full bg-transparent outline-none
                         text-gray-300 text-lg
                         appearance-none cursor-pointer"
              defaultValue=""
            >
              <option
                value=""
                disabled
                className="bg-[#2b2b2b]"
              >
                Job Type
              </option>

              <option value="full-time" className="bg-[#2b2b2b]">
                Full Time
              </option>

              <option value="part-time" className="bg-[#2b2b2b]">
                Part Time
              </option>

              <option value="internship" className="bg-[#2b2b2b]">
                Internship
              </option>

              <option value="contract" className="bg-[#2b2b2b]">
                Contract
              </option>
            </select>
          </div>

          <div className="flex flex-col text-gray-500">
            <IconChevronUp size={18} />
            <IconChevronDown size={18} />
          </div>
        </div>


        {/* Salary */}
        <div className="w-full lg:flex-1 px-2 lg:px-5 py-4">

          <div className="flex justify-between items-center mb-3">

            <span className="text-gray-300 text-lg">
              Salary
            </span>

            <span className="text-gray-300 text-lg">
              ₹0 LPA - ₹{salary} LPA
            </span>

          </div>

          {/* Range Slider */}
          <input
            type="range"
            min="0"
            max="300"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="
              w-full
              h-1
              appearance-none
              cursor-pointer
              bg-bright-sun-400
              rounded-full
              accent-bright-sun-400
            "
          />

        </div>

      </div>

      {/* Bottom Border */}
      <div className="border-b border-gray-700 mt-12"></div>

    </div>
  );
};

export default MultiInput;