// BlogPostPageHook.js
import { useState, useEffect } from "react";
import $ from "jquery";
import { formatDate, applyStylesToContent } from "./utils";

const BLOGGER_API_URL =
  "https://www.blogger.com/feeds/6428958383452564318/posts/default/-/Project?max-results=600&alt=json";

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