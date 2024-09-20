import { LayoutDashboard, X } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Function to close the sidebar when clicking outside of it
  const handleOverlayClick = (e) => {
    // Check if the click is outside the sidebar
    if (e.target.id === "overlay") {
      closeSidebar();
    }
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="xs:block lg:hidden header-icon"
      >
        <LayoutDashboard />
      </button>

      {/* Overlay for dark background when sidebar is open */}
      {isSidebarOpen && (
        <div
          id="overlay"
          className="z-[1040] fixed inset-0 bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[1045] flex flex-col dark:border-gray-700 bg-clip-padding bg-white dark:bg-[#2d2d30] shadow-sm border-none w-96 max-w-full transition-transform duration-300 ease-in-out outline-none ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full invisible"
        }`}
      >
        <div className="h-full as-overlay-body">
          <div className="flex justify-between items-center dark:border-gray-700 px-4 py-3 border-b">
            <h3 className="font-bold text-gray-800 dark:text-white">Sidebar</h3>
            <button
              onClick={closeSidebar}
              type="button"
              className="flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 border border-transparent rounded-full font-semibold text-gray-800 text-sm dark:text-white disabled:pointer-events-none size-7"
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
