export { useSearchBox } from "./useSearchBoxHook";
export { useBlogPost } from "./useBlogPostHook";
export { useArticlesIndex } from "./useArticlesIndexHook";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

