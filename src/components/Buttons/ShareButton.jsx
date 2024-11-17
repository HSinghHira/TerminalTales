import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import React, { useRef } from "react";
import { FaXTwitter } from "react-icons/fa6";

const ShareButton = () => {
  const url = window.location.href;
  const title = document.title;
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    dropdownRef.current.classList.toggle("hidden");
  };

  return (
    <div className="relative ml-24">
      <button
        className="relative z-10 flex hover:opacity-100 p-2 border rounded-md sharebtn focus:outline-none bg-gray-100 dark:bg-gray-800"
        title="Share"
        onClick={toggleDropdown}
      >
        <span className="px-2 sm:block hidden font-semibold">Share</span>
        <AiOutlineShareAlt size={25} />
      </button>
      <div
        ref={dropdownRef}
        className="bg-white dark:bg-gray-800 right-0 z-20 absolute border-gray-100 hidden shadow-lg mt-0 border rounded-sm w-48 overflow-hidden sharebtn-dropdown"
      >
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          title="Share on Facebook"
          className="flex gap-2 px-4 py-2 border-b text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <FaFacebook size={20} />
          <span className="">Facebook</span>
        </a>
        <a
          target="_blank"
          href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
          title="Share on Twitter"
          className="flex gap-2 px-4 py-2 border-b text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <FaXTwitter size={20} />
          <span className="">Twitter</span>
        </a>
        <a
          target="_blank"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
          title="Share on LinkedIn"
          className="flex gap-2 px-4 py-2 border-b text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <FaLinkedinIn size={20} />
          <span className="">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default ShareButton;
