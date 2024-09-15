import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../Components/ArticleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useArticlesIndex } from "../Hooks/Hook";

const Articles = () => {
  const {
    searchResults,
    loading,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    createUrlFriendlyTitle,
  } = useArticlesIndex();

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : searchResults.length > 0 ? (
        searchResults.map((post, index) => (
          <Link to={`/post/${createUrlFriendlyTitle(post.title)}`} key={index}>
            <ArticleCard
              title={post.title}
              snippet={post.content.substring(0, 150) + "..."}
              image={post.image}
              author={post.author}
              authorImage={post.authorImage}
              date={post.date}
              readTime={post.readTime}
              categories={post.categories}
            />
          </Link>
        ))
      ) : (
        <p>No articles found.</p>
      )}

      {searchResults.length > 0 && (
        <div className="flex justify-between mt-6">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`btn-primary ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="flex">
              <ChevronLeft size={20} /> Previous
            </span>
          </button>
          <span className="px-7 py-3 text-gray-600 dark:text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`btn-primary ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="flex">
              Next <ChevronRight size={20} />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Articles;
