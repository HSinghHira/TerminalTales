import React from "react";
import {
  SiFacebook,
  SiLinkedin,
  SiReddit,
  SiX,
} from "@icons-pack/react-simple-icons";
import { MdEmail } from "react-icons/md";

const SocialShareButtons = () => {
  const currentWindowURL = window.location.href;
  const currentWindowTitle = document.title;

  return (
    <div className="flex flex-wrap justify-center items-center w-full">
      <p className="border-gray-200 dark:border-gray-700/50 mx-2 mt-6 p-2 pt-6 border-t text-center text-gray-800 text-lg dark:text-neutral-200">
        ❤️ Love the Article? Please Share Mate❗
      </p>
      <div className="flex justify-center items-center space-x-2 mt-1 w-full">
        <a
          href={`https://x.com/intent/post?text=I%20love%20this%20Article%20titled%20%22${currentWindowTitle}%22%20at&url=${currentWindowURL}`}
          target="_blank"
          rel="nofollow"
          className="flex items-center bg-gray-800 hover:bg-gray-950 px-4 py-2 rounded text-white transition-colors duration-200"
        >
          <SiX className="mr-1 w-4" />
          <span className="sm:block hidden">Post</span>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${currentWindowURL}`}
          target="_blank"
          rel="nofollow"
          className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition-colors duration-200"
        >
          <SiFacebook className="mr-1 w-4" />
          <span className="sm:block hidden">Share</span>
        </a>
        <a
          href={`https://www.linkedin.com/cws/share?url=${currentWindowURL}`}
          target="_blank"
          rel="nofollow"
          className="flex items-center bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded text-white transition-colors duration-200"
        >
          <SiLinkedin className="mr-1 w-4" />
          <span className="sm:block hidden">Post</span>
        </a>
        <a
          href={`http://www.reddit.com/submit?url=${currentWindowURL}&title=${currentWindowTitle}`}
          target="_blank"
          rel="nofollow"
          className="flex items-center bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white transition-colors duration-200"
        >
          <SiReddit className="mr-1 w-4" />
          <span className="sm:block hidden">Post</span>
        </a>
        <a
          href={`mailto:?subject=${currentWindowTitle}&amp;amp;body=${currentWindowURL}`}
          target="_blank"
          rel="nofollow"
          title="via email"
          className="flex items-center bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white transition-colors duration-200"
        >
          <MdEmail className="mr-1 w-4" />
          <span className="sm:block hidden">Mail</span>
        </a>
      </div>
    </div>
  );
};

export default SocialShareButtons;
