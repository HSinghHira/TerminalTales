import React from "react";
import { useParams } from "react-router-dom";
import { CalendarDays, User } from "lucide-react";
import { useBlogPost } from "../Hooks/Hook";

function BlogPostPage() {
  const { title } = useParams();
  const post = useBlogPost(title);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md mb-6 p-6 rounded-lg">
      <h1 className="flex justify-center items-center m-5 font-extrabold text-3xl text-center text-gray-900 dark:text-white">
        {post.title}
      </h1>
      {post.author && post.date && (
        <div className="flex flex-row justify-center items-center mb-5 px-6 rounded-lg overflow-hidden">
          <div className="flex flex-row items-center space-x-3 text-gray-600 text-sm dark:text-gray-300">
            <span className="flex items-center space-x-1">
              <User />
              <a className="font-semibold" href="#">
                {post.author}
              </a>
            </span>
            <span className="flex items-center space-x-1">
              <CalendarDays />
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
    </div>
  );
}

export default BlogPostPage;
