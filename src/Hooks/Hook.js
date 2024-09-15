import { useState, useEffect, useRef } from "react";
import $ from "jquery";

const BLOGGER_API_URL =
  "https://www.blogger.com/feeds/6428958383452564318/posts/default/-/Project?max-results=600&alt=json";

const htmlToPlainText = (html) => {
  let temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const applyStylesToContent = (contentDiv) => {
  if (contentDiv) {
    // Add styles to <p> tags and images
    const paragraphs = contentDiv.querySelectorAll("p");
    paragraphs.forEach((p) => {
      p.classList.add(
        "text-lg",
        "p-2",
        "text-gray-800",
        "dark:text-neutral-200"
      );
    });

    // Add styles to images within the content
    const blogImages = contentDiv.querySelectorAll("img");
    blogImages.forEach((img) => {
      const parent = img.parentNode;
      if (parent.classList.contains("py-4")) {
        parent.parentNode.replaceChild(img, parent);
      }
      const wrapper = document.createElement("div");
      wrapper.classList.add("py-4");
      img.parentNode.replaceChild(wrapper, img);
      wrapper.appendChild(img);
      img.classList.add("w-full", "object-cover", "rounded-xl");
    });

    // Add styles to images within the content of anchor tags
    const images = contentDiv.querySelectorAll("a > div > img");
    images.forEach((img) => {
      const parentDiv = img.parentNode;
      const parentAnchor = parentDiv.parentNode;
      if (parentAnchor.tagName.toLowerCase() === "a") {
        // Remove the new div element
        parentDiv.replaceWith(img);
        // Replace the parent <a> tag with just the <img> tag
        parentAnchor.replaceWith(img);
      }
    });

    // Transform custom [link] tags into <a> tags
    const linkTags = contentDiv.innerHTML.match(/\[link(?: type="(.*?)")?(?: title="(.*?)")?\](.*?)\[\/link\]/g);
    if (linkTags) {
      linkTags.forEach((linkTag) => {
        const typeMatch = linkTag.match(/type="(.*?)"/);
        const titleMatch = linkTag.match(/title="(.*?)"/);
        const urlMatch = linkTag.match(/\](.*?)\[\/link\]/);

        const href = urlMatch ? urlMatch[1].trim() : "#";
        const title = titleMatch ? titleMatch[1] : href; // Use href as title if title is not provided

        const anchor = `<a class="${typeMatch ? typeMatch[1] : ''}" href="${href}" title="${title}" target="_blank"><BiLink /> ${title}</a>`;
        contentDiv.innerHTML = contentDiv.innerHTML.replace(linkTag, anchor);
      });
    }
  }
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

export const useBlogPost = (title) => {
  const [post, setPost] = useState(null);

  const createUrlFriendlyTitle = (postTitle) => {
    return postTitle
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await $.ajax({
          type: "GET",
          dataType: "jsonp",
          url: BLOGGER_API_URL,
        });

        const foundPost = data.feed.entry?.find(
          (entry) => createUrlFriendlyTitle(entry.title.$t) === title
        );

        if (foundPost) {
          const postDetails = {
            title: foundPost.title.$t || "",
            content: foundPost.content.$t || "",
            author: foundPost.author[0].name.$t,
            date: formatDate(foundPost.published.$t),
          };

          setPost(postDetails);
        } else {
          console.error("Post not found");
          setPost({
            title: "Post Not Found",
            content: "The requested post could not be found.",
          });
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setPost({
          title: "Error",
          content: "An error occurred while fetching the post.",
        });
      }
    };

    fetchPost();
  }, [title]);

  useEffect(() => {
    if (post) {
      const contentDiv = document.getElementById("post-content");
      applyStylesToContent(contentDiv);
    }
  }, [post]);

  return post;
};

export const useArticlesIndex = () => {
  const {
    searchResults,
    loading,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  } = useSearchBox();

  const createUrlFriendlyTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-") // Replace multiple hyphens with single hyphen
      .replace(/^-+/, "") // Trim hyphens from start of text
      .replace(/-+$/, ""); // Trim hyphens from end of text
  };

  return {
    searchResults,
    loading,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    createUrlFriendlyTitle,
  };
};
