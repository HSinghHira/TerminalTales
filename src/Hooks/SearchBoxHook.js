// SearchBoxHook.js
import { useState, useEffect, useRef } from "react";
import $ from "jquery";

const BLOGGER_API_URL =
  "https://www.blogger.com/feeds/6428958383452564318/posts/default/-/Project?max-results=600&alt=json";

const htmlToPlainText = (html) => {
  let temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
};

export const useSearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);

  const POSTS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await $.ajax({
          type: "GET",
          dataType: "jsonp",
          url: BLOGGER_API_URL,
        });

        const posts = data.feed.entry?.map((entry) => ({
          title: entry.title.$t || "",
          link: entry.link.find((link) => link.rel === "alternate").href,
          content: htmlToPlainText(entry.content.$t || ""),
          image: entry["media$thumbnail"]
            ? entry["media$thumbnail"].url.replace(/\/s72-w640-c-[^/]+\//, "/s500/")
            : "default-image-url.jpg",
          author: entry.author[0].name.$t,
          authorImage: entry.author[0]["gd$image"]?.src || "default-author-image.png",
          date: new Date(entry.published.$t).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          readTime: Math.floor(Math.random() * 10) + 1,
          categories: entry.category?.map((cat) => cat.term) || ["Tech"],
        })) || [];

        setAllPosts(posts);
        setSearchResults(posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredPosts = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredPosts);
      setCurrentPage(1);
    } else {
      setSearchResults(allPosts);
    }
  }, [searchTerm, allPosts]);

  const totalPages = Math.ceil(searchResults.length / POSTS_PER_PAGE);
  const paginatedPosts = searchResults.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    isOpen,
    setIsOpen,
    searchTerm,
    setSearchTerm,
    searchResults: paginatedPosts,
    loading,
    inputRef,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  };
};