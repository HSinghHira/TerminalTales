// Buttons.jsx
import React from 'react'

const Buttons = ({
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
  removeEnter
}) => {
  return (
    <div
      className="my-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      role="toolbar"
      aria-label="Settings toolbar"
    >
      <button className="btn btn-primary" onClick={convertToSentenceCase}>
        Sentence Case
      </button>
      <button className="btn btn-primary" onClick={convertToCapitalizedCase}>
        Capitalized Case
      </button>
      <button className="btn btn-primary" onClick={convertToTitleCase}>
        Title Case
      </button>
      <button className="btn btn-primary" onClick={convertToLowerCase}>
        lower case
      </button>
      <button className="btn btn-primary" onClick={convertToUpperCase}>
        UPPER CASE
      </button>
      <button className="btn btn-primary" onClick={convertToSnakeCase}>
        snake_case
      </button>
      <button className="btn btn-primary" onClick={convertToDotCase}>
        dot.case
      </button>
      <button className="btn btn-primary" onClick={convertToHyphenCase}>
        hyphen-case
      </button>
      <button className="btn btn-primary" onClick={removeExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary" onClick={removeAllSpaces}>
        Remove All Spaces
      </button>
      <button className="btn btn-primary" onClick={removeEnter}>
        Remove Enter
      </button>
    </div>
  )
}

export default Buttons
