// SearchBox.jsx
import React from "react";
import { Search, Command } from "lucide-react";
import { useSearchBox } from "../Hooks/SearchBoxHook";

const SearchBox = () => {
  const {
    isOpen,
    setIsOpen,
    searchTerm,
    setSearchTerm,
    searchResults,
    loading,
    inputRef,
  } = useSearchBox();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const highlightSearchTerm = (text, term) => {
    if (!term.trim()) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  if (loading) {
    return (
      <button className="header-icon">
        <Search />
      </button>
    );
  }

  return (
    <>
      <button
        className="header-icon"
        onClick={handleOpen}
        aria-label="Open search"
        aria-expanded={isOpen}
      >
        <Search />
      </button>

      {isOpen && (
        <div
          id="search-overlay"
          className="z-[80] fixed inset-0 bg-black bg-opacity-50 overflow-y-auto"
          role="dialog"
          aria-labelledby="search-overlay-label"
          onClick={handleClose}
        >
          <div
            className="m-3 sm:mx-auto mt-10 sm:w-full sm:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm rounded-xl">
              <div className="border-gray-200 dark:border-neutral-700 p-4 border-b">
                <div className="relative">
                  <label
                    id="search-overlay-label"
                    htmlFor="search-input"
                    className="sr-only"
                  >
                    Search input
                  </label>
                  <div className="left-0 absolute inset-y-0 flex items-center pl-3">
                    <Search className="w-5 h-5 text-gray-400 dark:text-white/60" />
                  </div>
                  <input
                    ref={inputRef}
                    id="search-input"
                    className="block border-gray-200 dark:border-neutral-700 dark:bg-neutral-900 py-3 pr-20 pl-10 focus:border-blue-500 rounded-lg focus:ring-blue-500 w-full text-sm dark:text-neutral-400"
                    type="text"
                    placeholder="Search blog posts"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="right-0 absolute inset-y-0 flex items-center pr-3 pointer-events-none">
                    <span className="flex items-center gap-x-1 text-gray-400 text-sm dark:text-neutral-600">
                      <kbd className="inline-flex justify-center items-center rounded-md min-h-[20px] font-mono text-gray-400 text-xs dark:text-neutral-600">
                        <Command className="w-3 h-3" />
                      </kbd>
                      +
                      <kbd className="inline-flex justify-center items-center rounded-md min-h-[20px] font-mono text-gray-400 text-xs dark:text-neutral-600">
                        /
                      </kbd>
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-80 overflow-y-auto">
                {searchResults.map((post, index) => {
                  if (post.title && post.content) {
                    return (
                      <div
                        key={index}
                        className="hover:bg-gray-100 dark:hover:bg-neutral-700 p-3 cursor-pointer"
                      >
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <h3
                            className="font-semibold text-gray-800 dark:text-neutral-200"
                            dangerouslySetInnerHTML={{
                              __html: highlightSearchTerm(
                                post.title,
                                searchTerm
                              ),
                            }}
                          />
                          <p
                            className="mt-1 text-gray-600 text-sm dark:text-neutral-400"
                            dangerouslySetInnerHTML={{
                              __html: highlightSearchTerm(
                                post.content.substring(0, 150),
                                searchTerm
                              ),
                            }}
                          />
                        </a>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBox;
