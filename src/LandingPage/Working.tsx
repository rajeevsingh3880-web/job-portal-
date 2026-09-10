const Working = () => {
  const steps = [
    {
      icon: "▤",
      title: "Build Your Resume",
      description: "Create a standout resume with your skills.",
    },
    {
      icon: "▣",
      title: "Apply for Job",
      description: "Find and apply for jobs that match your skills.",
    },
    {
      icon: "✓",
      title: "Get Hired",
      description: "Connect with employers and start your new job.",
    },
  ];

  return (
    <section className="mt-20 pb-10">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold text-mine-shaft-100">
          How it{" "}
          <span className="text-bright-sun-400">Works</span>
        </h2>

        <p className="text-lg mt-3 mx-auto text-mine-shaft-300 max-w-2xl">
          Effortlessly navigate through the process and land your dream job.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-20 px-6">
        
        {/* Left Side */}
        <div className="relative w-1/2 flex justify-center">
          {/* Girl Image */}
          <img
            className="w-[30rem] object-contain"
            src="/Working/Working girl.png"
            alt="Girl working on laptop"
          />

          {/* Profile Card */}
          <div
            className="
              absolute
              top-8
              right-0
              w-56
              rounded-2xl
              border
              border-bright-sun-400
              bg-mine-shaft-900/95
              backdrop-blur-sm
              p-4
              text-center
              shadow-xl
            "
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-3">
              <img
                src="/Working/profile.png"
                alt="Profile"
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>

            <div className="text-mine-shaft-100 text-xl font-semibold leading-tight">
              Complete your
              <br />
              profile
            </div>

            <div className="text-mine-shaft-300 mt-2">
              70% Completed
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 space-y-12">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-6"
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-24
                    w-24
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-bright-sun-400
                  "
                >
                  <span
                    aria-hidden="true"
                    className="text-4xl leading-none text-mine-shaft-900"
                  >
                    {step.icon}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-semibold text-mine-shaft-100">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-lg text-mine-shaft-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Working;