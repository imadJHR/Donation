import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const importantLinks = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Service",
  },
  {
    name: "Login",
  },
];

const Links = [
  {
    name: "Privacy Policy",
  },
  {
    name: "Services",
  },
  {
    name: "About Us",
  },
];

const Footer = () => {
  return (
    <div className="text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-700 ">
      <div className="mx-auto max-w-[1200px] p-4">
        {/*footer containt section */}
        <div className="grid md:grid-cols-3 py-5">
          <div className="px-4 py-8">
            <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
              <a href="/home" className="font-bold uppercase">
                Imad
                <span className="text-violet-600">Johar</span>
              </a>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              reiciendis ut! Ut aperiam totam itaque?
            </p>
            <div className="flex items-center gap-3">
              <FaLocationDot />
              <p className="line-clamp-1 w-full">
                123 Street, casablanca, Maroc
              </p>
            </div>
            <div className="items-center flex gap-3">
              <FaMobileAlt />
              <p className="line-clamp-1 w-full">+212 656629707</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2 ">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <FooterLinks links={importantLinks} />
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <FooterLinks links={Links} />
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                Social Links
              </h1>
              <div className="space-y-3">
                <h1>Subscribe to our newsletter </h1>
                <input
                  type="text"
                  placeholder="Enter Your Email "
                  className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500   "
                />
                <div className="flex items-center mt-6  gap-3">
                    <a href="" className="duration-200 hover:scale-110"><FaFacebook className="text-2xl"/></a>
                    <a href="" className="duration-200 hover:scale-110"><FaInstagram className="text-2xl"/></a>
                    <a href="" className="duration-200 hover:scale-110"><CiLinkedin className="text-2xl"/></a>



                </div>
              </div>
            </div>
          </div>
        </div>
        {/*footer copyright section */}
        <div className="bottom-footer">
          <p className="text-center border-t-2 border-gray-300/50 text-sm">
            Copyright © 2022. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
