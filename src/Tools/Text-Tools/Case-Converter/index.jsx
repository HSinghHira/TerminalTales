import { Hash, Lock, Replace, Search } from 'lucide-react'
import React from 'react'

import ChooseFile from '../../../components/Buttons/ChooseFile'
import Clear from '../../../components/Buttons/Clear'
import CopyButton from '../../../components/Buttons/Copy'
import SaveFile from '../../../components/Buttons/SaveFile'
import Related from '../../../components/Related/Related'
import Article from './Article'
import Buttons from './Buttons'
import { useCaseConvert } from './datascript'

const Description =
  'Easily convert text between lower case, UPPER CASE, Sentence case, Capitalized Case, etc.'

const ToolIcon = 'ALargeSmall'

const CaseConvert = () => {
  const {
    inputText,
    outputText,
    searchText,
    replaceText,
    highlightedText,
    handleInputChange,
    handleFileContent,
    clearInput,
    handleSearchChange,
    handleReplaceChange,
    handleReplace,
    handleSearch,
    keepText,
    convertToSentenceCase,
    convertToCapitalizedCase,
    convertToTitleCase,
    convertToLowerCase,
    convertToUpperCase,
    convertToSnakeCase,
    convertToDotCase,
    convertToHyphenCase,
    removeExtraSpaces,
    removeAllSpaces,
    removeEnter,
    setInputText
  } = useCaseConvert()

  return (
    <>
      <article>
        {/* Tool Area Starts */}
        <div className="mt-4 p-4">
          <h2 className="mb-4 flex items-center text-2xl font-semibold">
            <Hash className="mr-2 duration-300 hover:rotate-12" size={30} />
            Case Convertor
          </h2>
          <div className="card w-full bg-base-200/30 p-4 shadow-xl">
            <div className="card">
              <div className="card-content space-y-4">
                {/* Main Area */}
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex-1">
                    <textarea
                      className="textarea textarea-bordered h-48 w-full"
                      placeholder="Enter your text here..."
                      value={inputText}
                      onChange={handleInputChange}
                      style={{ display: 'none' }}
                    ></textarea>
                    <div
                      className="textarea textarea-bordered h-48 max-w-full overflow-auto break-all p-4"
                      dangerouslySetInnerHTML={{
                        __html: highlightedText || outputText || inputText
                      }}
                      contentEditable
                      onInput={(e) => setInputText(e.currentTarget.innerText)}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-col justify-between space-y-2 2xl:flex-row 2xl:space-y-0">
                  <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                    <div className="join flex-1">
                      <input
                        className="input join-item input-bordered w-full rounded-l-lg focus:outline-none"
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        onChange={handleSearchChange}
                      />
                      <button
                        className="btn btn-primary join-item"
                        onClick={handleSearch}
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="join flex-1">
                      <input
                        className="input join-item input-bordered w-full rounded-l-lg focus:outline-none"
                        type="text"
                        placeholder="Replace with"
                        value={replaceText}
                        onChange={handleReplaceChange}
                      />
                      <button
                        className="btn btn-primary join-item"
                        onClick={handleReplace}
                      >
                        <Replace className="h-5 w-5" />
                      </button>
                    </div>

                    <button
                      className="btn btn-secondary flex-shrink-0 md:btn-wide"
                      onClick={keepText}
                    >
                      <Lock className="h-4 w-4" /> Keep Text
                    </button>
                  </div>

                  <div
                    className="mt-2 flex flex-wrap items-center space-x-1"
                    role="toolbar"
                    aria-label="Settings toolbar"
                  >
                    <div className="flex space-x-2">
                      <ChooseFile onFileContent={handleFileContent} />
                      <CopyButton output={outputText} />
                      <SaveFile formats={['txt']} content={outputText} />
                      <Clear onClear={clearInput} />
                    </div>
                  </div>
                </div>

                {/* Main Button Area */}
                <Buttons
                  convertToSentenceCase={convertToSentenceCase}
                  convertToCapitalizedCase={convertToCapitalizedCase}
                  convertToTitleCase={convertToTitleCase}
                  convertToLowerCase={convertToLowerCase}
                  convertToUpperCase={convertToUpperCase}
                  convertToSnakeCase={convertToSnakeCase}
                  convertToDotCase={convertToDotCase}
                  convertToHyphenCase={convertToHyphenCase}
                  removeExtraSpaces={removeExtraSpaces}
                  removeAllSpaces={removeAllSpaces}
                  removeEnter={removeEnter}
                />

                {/* Button Toolbar */}
              </div>
            </div>
          </div>
        </div>

        {/* Related Area */}
        <div>
          <Related />
        </div>

        {/* Information Area */}
        <Article />
      </article>
    </>
  )
}

export default CaseConvert
