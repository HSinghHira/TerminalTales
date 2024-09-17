import React from "react";
import { LayoutDashboard, MoonStar, Sun } from "lucide-react";
import { Offcanvas, Ripple, initTWE } from "tw-elements";
import useDarkMode from "use-react-dark-mode";
import SearchBox from "./SearchBox";

initTWE({ Offcanvas, Ripple });

const Header = () => {
  const { isDark, toggle } = useDarkMode();
  return (
    <>
      <header className="flex justify-between items-center bg-white dark:bg-[#2d2d30] shadow-sm px-6 py-6 rounded-full w-full max-w-4xl">
        <div className="flex items-center ml-4">
          <div className="logo">
            <a href="/">
              <img
                src="https://ghost.estudiopatagon.com/zento/content/images/2024/01/logo-zento.svg"
                alt="Zento"
                width="170"
                height="60"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4 mr-4">
          <SearchBox />

          <button className="header-icon" onClick={toggle}>
            {isDark ? <Sun /> : <MoonStar />}
          </button>

          <button className="lg:hidden header-icon" data-as-overlay="#Sidebar">
            <LayoutDashboard />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
