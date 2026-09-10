import { useState } from "react";
import { Carousel } from "@mantine/carousel";

const jobCategories = [
  {
    title: "Finance",
    description: "Manage financial records and business transactions",
    jobs: "800+ new job posted",
    image: "/catogry/Finance.png",
  },
  {
    title: "Human Resource",
    description: "Recruit, manage, and support company employees",
    jobs: "600+ new job posted",
    image: "/catogry/Human Resource.png",
  },
  {
    title: "Digital Marketing",
    description: "Promote brands online with marketing strategies",
    jobs: "1k+ new job posted",
    image: "/catogry/Digital marketing.png",
  },
  {
    title: "Web Developer",
    description: "Build and maintain websites for clients",
    jobs: "2k+ new job posted",
    image: "/catogry/Web Developer.png",
  },
  {
    title: "Arts & Design",
    description: "Create visual content for branding and media",
    jobs: "500+ new job posted",
    image: "/catogry/Arts & Design.png",
  },
];

const Jobcatogry = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  return (
    <section className="mt-20 pb-10">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="mb-3 text-center text-4xl font-semibold text-mine-shaft-100">
          Browse{" "}
          <span className="text-bright-sun-400">Job</span> Category
        </h2>

        <p className="mx-auto w-1/2 text-center text-lg text-mine-shaft-300">
          Explore diverse job opportunities tailored to your skills. Start
          your career journey today.
        </p>
      </div>

      {/* Carousel */}
      <div className="mx-auto w-full max-w-[1300px] px-4">
        <Carousel
          slideSize="22%"
          slideGap="lg"
          withControls
          onSlideChange={setActiveSlide}
          emblaOptions={{
            loop: true,
            dragFree: false,
            align: "center",
          }}
          styles={{
            control: {
              backgroundColor: "#ffcc33",
              border: "none",
              color: "#222",
              width: 48,
              height: 48,
              minWidth: 48,
              borderRadius: "50%",
            },
          }}
        >
          {jobCategories.map((category, index) => {
            const isActive = index === activeSlide;

            return (
              <Carousel.Slide key={category.title}>
                <div
                  className={`
                    group
                    flex h-[240px]
                    cursor-pointer flex-col
                    items-center justify-center
                    rounded-2xl
                    border
                    bg-mine-shaft-800
                    p-6
                    text-center
                    transition-all
                    duration-300
                    ease-in-out

                    ${
                      isActive
                        ? "border-bright-sun-400 shadow-[0_0_15px_3px_rgba(255,204,51,0.75)]"
                        : "border-bright-sun-400/70"
                    }

                    hover:-translate-y-1
                    hover:border-bright-sun-400
                    hover:shadow-[0_0_15px_3px_rgba(255,204,51,0.5)]
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-4
                      flex h-[72px] w-[72px]
                      items-center justify-center
                      rounded-full
                      bg-bright-sun-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-2xl font-semibold text-mine-shaft-100">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 max-w-[260px] text-base leading-6 text-mine-shaft-300">
                    {category.description}
                  </p>

                  {/* Jobs */}
                  <p className="text-xl font-medium text-bright-sun-400">
                    {category.jobs}
                  </p>
                </div>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Jobcatogry;