import { X } from "lucide-react";
import React from "react";
import Sidebar from "./Sidebar";

const OffCanvas = () => {
  return (
    <div
      id="Sidebar"
      class="top-0 z-[80] fixed border-s dark:border-gray-700 hidden bg-white dark:bg-gray-800 w-full max-w-md h-full transform transition-all as-overlay-open:translate-x-0 duration-300 as-overlay as-overlay-body end-0"
      tabindex="-1"
    >
      <div className="h-full as-overlay-body">
        <div className="flex justify-between items-center dark:border-gray-700 px-4 py-3 border-b">
          <h3 className="font-bold text-gray-800 dark:text-white">Sidebar</h3>
          <button
            type="button"
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
  );
};

export default OffCanvas;
