import { LayoutDashboard, X } from "lucide-react";
import React from "react";
import { Offcanvas, Ripple, initTWE } from "tw-elements";
import Sidebar from "./Sidebar";

initTWE({ Offcanvas, Ripple });

const MobileSidebar = () => {
  return (
    <>
      <div className="sm:block hidden">
        <button
          className="header-icon"
          type="button"
          data-twe-offcanvas-toggle
          data-twe-target="#Sidebar"
          aria-controls="Sidebar"
          data-twe-ripple-init
        >
          <LayoutDashboard />
        </button>
      </div>

      <div
        id="Sidebar"
        data-twe-offcanvas-init
        className="top-0 right-0 bottom-0 z-[1045] fixed flex flex-col dark:border-gray-700 bg-clip-padding bg-white dark:bg-[#2d2d30] shadow-sm border-none w-96 max-w-full data-[twe-offcanvas-show]:transform-none transition translate-x-full duration-300 invisible ease-in-out outline-none"
      >
        <div className="h-full as-overlay-body">
          <div className="flex justify-between items-center dark:border-gray-700 px-4 py-3 border-b">
            <h3 className="font-bold text-gray-800 dark:text-white">Sidebar</h3>
            <button
              type="button"
              data-twe-offcanvas-dismiss
              className="flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 border border-transparent rounded-full font-semibold text-gray-800 text-sm dark:text-white disabled:pointer-events-none size-7"
              data-as-overlay-close="#Sidebar"
            >
              <span className="sr-only">Close modal</span>
              <X />
            </button>
          </div>
          <div className="p-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
