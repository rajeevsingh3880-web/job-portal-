const Testimonials = () => {
  const testimonials = [
    {
      name: "Shivam Patel",
      rating: 5,
      review:
        "This job portal made job search easy and quick. Recommended to all job seekers!",
      image: "/Testimonials/user.png",
    },
    {
      name: "Abhishek Kullu",
      rating: 5,
      review:
        "Found my dream job within a week! The application process was smooth.",
      image: "/Testimonials/user.png",
    },
    {
      name: "Swapnil Pandey",
      rating: 4,
      review:
        "I secured a job offer within days of applying. Exceptional user experience and support.",
      image: "/Testimonials/user.png",
    },
    {
      name: "Pavan Barnana",
      rating: 4,
      review:
        "Highly efficient job portal with excellent resources. Helped me land a great position.",
      image: "/Testimonials/user.png",
    },
  ];

  return (
    <section className="mt-20 pb-10">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-mine-shaft-100">
          What{" "}
          <span className="text-bright-sun-400">User</span>{" "}
          says about us?
        </h2>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-7">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="
              border
              border-bright-sun-400
              rounded-2xl
              p-5
              bg-mine-shaft-900
              min-h-[210px]
            "
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-20 w-20 rounded-full object-cover"
              />

              <div>
                <h3 className="text-xl font-semibold text-mine-shaft-100">
                  {testimonial.name}
                </h3>

                {/* Stars */}
                <div className="flex gap-1 mt-1 text-2xl">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        star <= testimonial.rating
                          ? "text-bright-sun-400"
                          : "text-mine-shaft-500"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Review */}
            <p className="text-mine-shaft-300 text-lg mt-7 leading-6">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;