import { Marquee } from "@mantine/core";

const companies = [
  "Microsoft.png",
  "Figma.png",
  "Flipkart.png",
  "Netflix.png",
  "oracle.png",
  "Youtube.png",
  "Amazon.png",
  "Pintrest.png",
  "spotify.png",
];

const Companies = () => {
  return (
    <section className="mt-20 py-10">
      <h2 className="text-center text-4xl font-semibold text-mine-shaft-100">
        Trusted by{" "}
        <span className="text-bright-sun-400">1000+</span> Companies
      </h2>

      <div className="mt-10">
        <Marquee pauseOnHover={true}>
          {companies.map((company) => (
            <img
              key={company}
              src={`/Companies/${company}`}
              alt={company}
              className="mx-10 h-12 w-auto object-contain"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Companies;