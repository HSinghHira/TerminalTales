import React from "react";
import { useParams } from "react-router-dom";
import { CalendarDays, User } from "lucide-react";
import { useBlogPost } from "../Hooks/Hook";

import SocialShareButtons from "../Components/SocialShare";

function BlogPostPage() {
  const { title } = useParams();
  const post = useBlogPost(title);

  if (!post) return <div>Loading...</div>;

  const categories = post.categories || [];

  return (
    <>
      <div className="bg-white dark:bg-[#252526] shadow-md mb-6 p-6 rounded-lg">
        <div className="flex justify-center items-center">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-purple-100 dark:bg-[#3e3e42] m-1 px-3 py-1 rounded-full text-purple-800 text-sm dark:text-gray-300"
            >
              {category}
            </span>
          ))}
        </div>
        <h1 className="flex justify-center items-center m-5 font-extrabold text-3xl text-center text-gray-900 dark:text-gray-300">
          {post.title}
        </h1>

        {post.author && post.date && (
          <div className="flex flex-row justify-center items-center mb-5 px-6 rounded-lg overflow-hidden">
            <div className="flex flex-row items-center space-x-3 text-gray-600 text-sm dark:text-gray-300">
              <span className="flex items-center space-x-1">
                <User size={15} />
                <a className="font-semibold" href="#">
                  {post.author}
                </a>
              </span>
              <span className="flex items-center space-x-1">
                <CalendarDays size={15} />
                <p className="font-semibold">{post.date}</p>
              </span>
            </div>
          </div>
        )}

        <div
          id="post-content"
          className="text-gray-800 dark:text-neutral-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <SocialShareButtons />
      </div>
    </>
  );
}

export default BlogPostPage;
