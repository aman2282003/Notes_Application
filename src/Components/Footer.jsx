import React from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaRegUserCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-violet-500 pt-8 pb-6 mt-32">
      <div className="container bg-violet-500 mx-auto px-4">
        <div className="bg-violet-500 flex flex-wrap text-left lg:text-left">
          <div className="bg-violet-500 w-full lg:w-6/12 px-4">
            <h4 className="bg-violet-500 text-3xl fonat-semibold ">
              Let's keep in touch!
            </h4>
            <h5 className="bg-violet-500 text-lg mt-0 mb-2 ">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="bg-violet-500 mt-6 lg:mb-0 mb-6 flex flex-wrap">
              <a href="https://www.instagram.com/aman228_2003/" target="blank">
                <FaInstagram className="h-[50px]  w-[50px] m-5 text-pink-900" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VaA8Vxr1Hspor73uES0y"
                target="blank"
              >
                <FaWhatsapp className="h-[50px] w-[50px] m-5 text-green-500" />
              </a>
              <a href="https://github.com/aman2282003" target="blank">
                <FaGithub className="h-[50px] w-[50px]  m-5 text-grey-600" />
              </a>
            </div>
          </div>
          <div className=" bg-violet-500 w-full lg:w-6/12 px-4">
            <div className="bg-violet-500 flex flex-wrap items-top mb-6">
              <div className="bg-violet-500 w-full lg:w-4/12 px-4 ml-auto">
                <span className="bg-violet-500 block uppercase font-bold text-xl mb-2">
                  Useful Links
                </span>
                <ul className="bg-violet-500 list-unstyled">
                  <li className="bg-violet-500 text-2xl">About Us</li>
                  <li className="bg-violet-500 text-2xl">Blog</li>
                  <li className="bg-violet-500 text-2xl">Github</li>
                  <li className="bg-violet-500 text-2xl">Free Products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="bg-violet-500  font-bold flex justify-center text-2xl mx-5 mt-5 text-center items-center text-black">
        @Copyright Made with love by Aman
      </p>
    </footer>
  );
};
export default Footer;
