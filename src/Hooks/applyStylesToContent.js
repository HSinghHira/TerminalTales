export { useBlogPost } from "./useBlogPostHook";

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