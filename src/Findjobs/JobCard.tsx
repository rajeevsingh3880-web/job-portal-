import React from 'react';

interface Job {
  logo?: React.ReactNode;
  company?: string;
  title?: string;
  applicantsCount?: number;
  level?: string;
  type?: string;
  location?: string;
  description?: string;
  salary?: string;
  postedDaysAgo?: number;
}

interface JobCardProps {
  job?: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-[#24262b] text-gray-300 p-5 rounded-xl border border-gray-700/50 hover:border-amber-500 transition duration-200 flex flex-col justify-between w-full max-w-sm font-sans shadow-lg">
      
      {/* 1. Top Section: Header & Bookmark */}
      <div className="flex justify-between items-start mb-4">
        {/* Header Left: Logo + Info */}
        <div className="flex gap-3 items-center">
          {/* Company Logo Container */}
          <div className="w-10 h-10 rounded-lg bg-[#1a1b1e] flex items-center justify-center overflow-hidden shrink-0">
            {typeof job?.logo === 'string' ? (
              <img src={job.logo} alt={job.company} className="w-6 h-6 object-contain" />
            ) : (
              job?.logo
            )}
          </div>
          
          {/* Title and Subtitle */}
          <div>
            <h3 className="text-white font-bold text-base leading-tight">
              {job?.title || "Sr. UX Designer"}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {job?.company || "Netflix"} • {job?.applicantsCount ?? 0} Applicants
            </p>
          </div>
        </div>

        {/* Bookmark Icon */}
        <button className="text-gray-400 hover:text-white transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* 2. Middle Section: Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-[#322c1b] text-amber-500 text-xs px-3 py-1 rounded-md font-medium">
          {job?.level || "Expert"}
        </span>
        <span className="bg-[#322c1b] text-amber-500 text-xs px-3 py-1 rounded-md font-medium">
          {job?.type || "Part Time"}
        </span>
        <span className="bg-[#322c1b] text-amber-500 text-xs px-3 py-1 rounded-md font-medium">
          {job?.location || "San Francisco"}
        </span>
      </div>

      {/* 3. Description */}
      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-6">
        {job?.description || "Netflix is looking for a Sr. UX Designer to enhance user experience on streaming platforms."}
      </p>

      {/* 4. Bottom Section: Salary, Date & Button */}
      <div>
        <div className="flex justify-between items-center mb-4 text-xs">
          <span className="text-white font-bold text-base">
            {job?.salary || "₹40 LPA"}
          </span>
          <div className="flex items-center gap-1 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 9 0 0118 0z" />
            </svg>
            <span>Posted {job?.postedDaysAgo || "8"} days ago</span>
          </div>
        </div>

        <button className="w-full bg-[#383323] hover:bg-[#47402b] text-amber-500 font-semibold py-2.5 rounded-lg text-sm transition duration-150">
          View Job
        </button>
      </div>

    </div>
  );
};

export default JobCard;