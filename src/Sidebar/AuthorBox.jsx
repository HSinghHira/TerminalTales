import React from "react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const AuthorBox = () => {
  return (
    <>
      <div className="bg-white dark:bg-[#252526] shadow-md pb-6 rounded-xl">
        <div className="flex flex-wrap justify-center">
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src="https://github.com/hsinghhira.png"
                className="border-8 border-white dark:border-[#252526] -m-16 -ml-18 lg:-ml-16 rounded-full max-w-[150px] align-middle"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <h3 className="mb-1 font-bold text-2xl text-gray-700 dark:text-gray-300 leading-normal">
            Harman Singh Hira
          </h3>
          <div className="flex flex-row justify-center space-x-2 mx-auto w-full text-center">
            <div className="font-bold font-mono text-gray-600 text-sm dark:text-gray-300 tracking-wide">
              Blogger / Coder / UI
            </div>
          </div>
          <div className="w-full text-center">
            <div className="flex justify-center pt-4 lg:pt-4">
              <div className="flex space-x-2">
                <a
                  className="-m-1 p-1 ring-primary focus-visible:ring-2 text-gray-400 hover:color-primary focus:outline-none"
                  href="https://www.twitter.com/HSinghHira"
                  rel="noopener"
                  aria-label="Harman Singh Hira on X/Twitter"
                  target="_blank"
                >
                  <SiX />
                </a>

                <a
                  className="-m-1 p-1 ring-primary focus-visible:ring-2 text-gray-400 hover:color-primary focus:outline-none"
                  href="https://www.github.com/HSinghHira"
                  rel="noopener"
                  aria-label="Harman Singh Hira on Github"
                  target="_blank"
                >
                  <SiGithub />
                </a>

                <a
                  className="-m-1 p-1 ring-primary focus-visible:ring-2 text-gray-400 hover:color-primary focus:outline-none"
                  href="https://www.linkedin.com/in/arielcerdahernandez/"
                  rel="noopener"
                  aria-label="Harman Singh Hira on Linkedin"
                  target="_blank"
                >
                  <SiLinkedin />
                </a>

                <a
                  className="-m-1 p-1 ring-primary focus-visible:ring-2 text-gray-400 hover:color-primary focus:outline-none"
                  href="https://www.instagram.com/HSinghHira"
                  rel="noopener"
                  aria-label="Harman Singh Hira on Instagram"
                  target="_blank"
                >
                  <SiInstagram />
                </a>

                <a
                  className="-m-1 p-1 ring-primary focus-visible:ring-2 text-gray-400 hover:color-primary focus:outline-none"
                  href="https://www.youtube.com/channel/"
                  rel="noopener"
                  aria-label="Harman Singh Hira on Youtube"
                  target="_blank"
                >
                  <SiYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-gray-200 dark:border-gray-700/50 mx-6 mt-6 pt-6 border-t text-center">
          <div className="flex flex-wrap justify-center">
            <div className="px-6 w-full">
              <p className="mb-4 font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                turpis orci, maximus sed purus a, cursus scelerisque purus.
                Morbi molestie, odio at sagittis rhoncus, felis massa iaculis
                mi, quis molestie erat ipsum vel risus.
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-b-xl h-6 translate-y-6 overflow-hidden">
          <div className="absolute flex -space-x-12 bg-gradient-to-r from-[#332277] to-[#9977ff] rounded-b-2xl w-full">
            <div className="group-hover:from-[#674aeb] group-hover:to-[#ffffff] z-10 bg-gradient-to-r from-[#332277] to-[#9977ff] skew-x-[35deg] w-full h-8 transform transition-colors duration-200 delay-75"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorBox;
