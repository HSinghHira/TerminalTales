import React from "react";
import { Star, Clock } from "lucide-react";

const ArticleCard = ({ color, category, title, author, readTime }) => (
  <div className={`p-6 rounded-xl ${color} text-white`}>
    <div className="top-4 right-4 absolute">
      <Star className="w-6 h-6 text-white" />
    </div>
    <div className="bg-[rgba(255,255,255,0.12)!important] mb-2 ml-[-25px] px-[25px] py-2 rounded-r-full w-full max-w-fit font-medium text-sm">
      {category}
    </div>
    <h3 className="mb-4 font-bold text-xl">{title}</h3>
    <div className="flex items-center mb-2">
      <img
        src="https://github.com/hsinghhira.png"
        alt={author}
        className="mr-2 rounded-full w-6 h-6"
      />
      <span className="text-sm">{author}</span>
    </div>
    <div className="flex items-center mb-4 text-sm">
      <Clock className="mr-1 w-4 h-4" />
      <span className="mr-4">{readTime}</span>
    </div>
    <button className="bg-black/20 hover:bg-black/30 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
      Read More
    </button>
  </div>
);

const FeaturedArticles = () => {
  const articles = [
    {
      color: "bg-purple-600",
      category: "Fundamentals",
      title: "Understanding how links works 🚀",
      author: "Harman Singh Hira",
      readTime: "2 min read",
    },
    {
      color: "bg-orange-400",
      category: "HTML",
      title: "Introduction to HTML 📘",
      author: "Harman Singh Hira",
      readTime: "1 min read",
    },
    {
      color: "bg-blue-500",
      category: "CSS",
      title: "CSS Selectors: Class and ID basic filtering for HTML elements",
      author: "Harman Singh Hira",
      readTime: "1 min read",
    },
  ];

  return (
    <div className="p-8">
      {/* Apply grid layout with responsive column counts */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
