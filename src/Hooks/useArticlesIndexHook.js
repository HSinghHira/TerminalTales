import { useSearchBox } from "./Hook";

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
