import {
  IconAnchor,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconSend,
  IconBrandFacebook,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#2b2b2b] text-white">
      {/* Main Footer */}
      <div className="px-6 md:px-16 lg:px-28 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 text-bright-sun-400 mb-7">
              <IconAnchor className="h-7 w-7" stroke={2.5} />

              <div className="text-2xl font-semibold">
                JobHook
              </div>
            </div>

            <p className="text-gray-400 text-base leading-7 max-w-sm">
              Job portal with user profiles, skill updates,
              certifications, work experience and admin
              job postings.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-semibold text-bright-sun-400 mb-7">
              Product
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                Find Job
              </a>

              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                Find Company
              </a>

              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                Find Employee
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-bright-sun-400 mb-7">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                About Us
              </a>

              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold text-bright-sun-400 mb-7">
              Support
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                Help & Support
              </a>

              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                Feedback
              </a>

              <a
                href="#"
                className="hover:text-bright-sun-400 transition"
              >
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="py-12 flex flex-col items-center">

          {/* Developer */}
          <div className="text-xl font-semibold text-gray-300 text-center">
            Designed & Developed By{" "}
            <span className="text-bright-sun-400">
              Golu Patel
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            {/* Github */}
            <a
              href="https://github.com/rajeevsingh3880-web"
              className="h-14 w-14 rounded-full bg-[#353535] flex items-center justify-center
                         text-bright-sun-400 hover:bg-bright-sun-400 hover:text-[#2b2b2b]
                         transition-all duration-300"
            >
              <IconBrandGithub size={29} stroke={2} />
            </a>

            {/* Linkedin */}
            <a
              href="#"
              className="h-14 w-14 rounded-full bg-[#353535] flex items-center justify-center
                         text-bright-sun-400 hover:bg-bright-sun-400 hover:text-[#2b2b2b]
                         transition-all duration-300"
            >
              <IconBrandLinkedin size={29} stroke={2} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="h-14 w-14 rounded-full bg-[#353535] flex items-center justify-center
                         text-bright-sun-400 hover:bg-bright-sun-400 hover:text-[#2b2b2b]
                         transition-all duration-300"
            >
              <IconBrandInstagram size={29} stroke={2} />
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="h-14 w-14 rounded-full bg-[#353535] flex items-center justify-center
                         text-bright-sun-400 hover:bg-bright-sun-400 hover:text-[#2b2b2b]
                         transition-all duration-300"
            >
              <IconBrandFacebook size={29} stroke={2} />
            </a>

            {/* Youtube */}
            <a
              href="#"
              className="h-14 w-14 rounded-full bg-[#353535] flex items-center justify-center
                         text-bright-sun-400 hover:bg-bright-sun-400 hover:text-[#2b2b2b]
                         transition-all duration-300"
            >
              <IconBrandYoutube size={29} stroke={2} />
            </a>

            {/* Telegram */}
            <a
              href="#"
              className="h-14 w-14 rounded-full bg-[#353535] flex items-center justify-center
                         text-bright-sun-400 hover:bg-bright-sun-400 hover:text-[#2b2b2b]
                         transition-all duration-300"
            >
              <IconSend size={29} stroke={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;