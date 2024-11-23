import { Hash, Lock, Replace, Search } from 'lucide-react'
import React from 'react'

import ChooseFile from '../../../components/Buttons/ChooseFile'
import Clear from '../../../components/Buttons/Clear'
import CopyButton from '../../../components/Buttons/Copy'
import SaveFile from '../../../components/Buttons/SaveFile'
import Related from '../../../components/Related/Related'
import Article from './Article'
import Buttons from './Buttons'
import SEO from './SEO'
import { useCaseConvert } from './datascript'

const Description =
  'Easily convert text between lower case, UPPER CASE, Sentence case, Capitalized Case, aLtErNaTiNg cAsE, and much more.'

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
      <SEO />
      <article>
        {/* Tool Area Starts */}
        <div className="mt-4 p-4">
          <h2 className="flex items-center mb-4 font-semibold text-2xl">
            <Hash className="mr-2 duration-300 hover:rotate-12" size={30} />
            Case Convertor
          </h2>
          <div className="bg-base-200/30 shadow-xl p-4 w-full card">
            <div className="card">
              <div className="space-y-4 card-content">
                {/* Main Area */}
                <div className="flex md:flex-row flex-col gap-4">
                  <div className="flex-1">
                    <textarea
                      className="textarea-bordered w-full h-48 textarea"
                      placeholder="Enter your text here..."
                      value={inputText}
                      onChange={handleInputChange}
                      style={{ display: 'none' }}
                    ></textarea>
                    <div
                      className="p-4 textarea-bordered max-w-full h-48 break-all overflow-auto textarea"
                      dangerouslySetInnerHTML={{
                        __html: highlightedText || outputText || inputText
                      }}
                      contentEditable
                      onInput={(e) => setInputText(e.currentTarget.innerText)}
                    ></div>
                  </div>
                </div>

                <div className="flex 2xl:flex-row flex-col justify-between space-y-2 2xl:space-y-0">
                  <div className="flex sm:flex-row flex-col sm:space-x-2 space-y-2 sm:space-y-0">
                    <div className="flex-1 join">
                      <input
                        className="input-bordered rounded-l-lg w-full input join-item focus:outline-none"
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        onChange={handleSearchChange}
                      />
                      <button
                        className="btn btn-primary join-item"
                        onClick={handleSearch}
                      >
                        <Search className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex-1 join">
                      <input
                        className="input-bordered rounded-l-lg w-full input join-item focus:outline-none"
                        type="text"
                        placeholder="Replace with"
                        value={replaceText}
                        onChange={handleReplaceChange}
                      />
                      <button
                        className="btn btn-primary join-item"
                        onClick={handleReplace}
                      >
                        <Replace className="w-5 h-5" />
                      </button>
                    </div>

                    <button
                      className="flex-shrink-0 btn btn-secondary md:btn-wide"
                      onClick={keepText}
                    >
                      <Lock className="w-4 h-4" /> Keep Text
                    </button>
                  </div>

                  <div
                    className="flex flex-wrap items-center space-x-1 mt-2"
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
