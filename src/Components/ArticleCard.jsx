// ArticleCard.jsx
import React from "react";
import { Calendar, Clock } from "lucide-react";

const ArticleCard = ({
  title,
  snippet,
  image,
  author,
  authorImage,
  date,
  readTime,
  categories,
}) => {
  return (
    <div className="bg-white shadow-md mb-6 p-6 rounded-lg">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {categories.map((category, index) => (
          <span
            key={index}
            className="bg-purple-100 px-2.5 py-0.5 rounded-full font-medium text-purple-800 text-xs"
          >
            {category}
          </span>
        ))}
      </div>
      <h2 className="mb-3 font-bold text-2xl">{title}</h2>
      <p className="mb-4 text-gray-600">{snippet}</p>

      <div className="flex sm:flex-row flex-col justify-between">
        <div className="flex flex-row items-center text-gray-500 text-sm">
          <Calendar className="mr-1 w-4 h-4" />
          <span className="mr-4">{date}</span>
          <Clock className="mr-1 w-4 h-4" />
          <span className="mr-4">{readTime} min read</span>
        </div>
        <div className="md:flex items-center hidden">
          <span className="font-semibold text-gray-600 text-sm">{author}</span>
          <img
            src={authorImage}
            alt={author}
            className="ml-2 rounded-full w-7 h-7"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
