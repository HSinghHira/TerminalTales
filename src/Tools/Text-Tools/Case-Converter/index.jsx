// index.jsx
import { Eraser, Hammer, Hash, Replace, Search } from 'lucide-react'
import React, { useState } from 'react'

import ChooseFile from '../../../components/Buttons/ChooseFile'
import Clear from '../../../components/Buttons/Clear'
import CopyButton from '../../../components/Buttons/Copy'
import SaveFile from '../../../components/Buttons/SaveFile'
import Related from '../../../components/Related/Related'
import Buttons from './Buttons'
import { useCaseConvert } from './datascript'

const Description =
  'Minify HTML code effortlessly Reduce file size, improve page load times, and boost website performance.'

const ToolIcon = 'Code'

const CaseConvert = () => {
  const {
    inputText,
    outputText,
    handleInputChange,
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
    setInputText,
    setOutputText
  } = useCaseConvert()

  const [searchText, setSearchText] = useState('')
  const [replaceText, setReplaceText] = useState('')
  const [highlightedText, setHighlightedText] = useState('')

  const handleFileContent = (content) => {
    setInputText(content)
  }

  const clearInput = () => {
    setInputText('')
    setOutputText('')
    setSearchText('')
    setReplaceText('')
    setHighlightedText('')
  }

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleReplaceChange = (e) => {
    setReplaceText(e.target.value)
  }

  const handleReplace = () => {
    const replacedText = inputText.replace(
      new RegExp(searchText, 'g'),
      replaceText
    )
    setOutputText(replacedText)
    setHighlightedText('') // Clear highlighting after replace
  }

  const handleSearch = () => {
    if (searchText) {
      const regex = new RegExp(`(${searchText})`, 'gi')
      const highlighted = inputText.replace(regex, '<mark>$1</mark>')
      setHighlightedText(highlighted)
    } else {
      setHighlightedText(inputText)
    }
  }

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
                {/* --------- */}
                {/* Main Area */}
                {/* --------- */}

                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex-1">
                    <textarea
                      className="textarea textarea-bordered h-48 w-full"
                      placeholder="Enter your text here..."
                      value={inputText}
                      onChange={handleInputChange}
                      style={{ display: 'none' }} // Hide the textarea
                    ></textarea>
                    <div
                      className="textarea textarea-bordered h-48 w-full p-4"
                      rows="10"
                      dangerouslySetInnerHTML={{
                        __html: highlightedText || outputText || inputText
                      }}
                      contentEditable
                      onInput={(e) => setInputText(e.currentTarget.innerText)}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <div className="join">
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

                  <div className="join">
                    <input
                      className="hover: input join-item input-bordered w-full rounded-l-lg focus:outline-none"
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
                </div>

                {/* --------- */}
                {/* Main Ends */}
                {/* --------- */}

                {/* Main Button Start */}
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
                {/* Main Button End */}
                {/* Button Toolbar Start */}
                <div
                  className="my-2 flex items-center space-x-1"
                  role="toolbar"
                  aria-label="Settings toolbar"
                >
                  <ChooseFile onFileContent={handleFileContent} />
                  <CopyButton content={outputText} />
                  <SaveFile formats={['txt']} content={outputText} />
                  <Clear onClear={clearInput} />
                </div>
                {/* Button Toolbar End */}
              </div>
            </div>
          </div>
        </div>
        {/* Tool Area Ends */}
        {/* Related Area Starts */}
        <div>
          <Related />
        </div>
        {/* Related Area Ends */}
        {/* Information Area Starts */}

        {/* Information Area Ends */}
      </article>
    </>
  )
}

export default CaseConvert
