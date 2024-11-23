import { useState } from 'react'

export const useCaseConvert = () => {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [searchText, setSearchText] = useState('')
  const [replaceText, setReplaceText] = useState('')
  const [highlightedText, setHighlightedText] = useState('')

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

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

  const keepText = () => {
    if (outputText) {
      setInputText(outputText)
      setOutputText('')
      setHighlightedText('')
    }
  }

  const convertToSentenceCase = () => {
    const sentenceCase =
      inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase()
    setOutputText(sentenceCase)
  }

  const convertToCapitalizedCase = () => {
    const capitalizedCase = inputText
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    setOutputText(capitalizedCase)
  }

  const convertToTitleCase = () => {
    const titleCase = inputText
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    setOutputText(titleCase)
  }

  const convertToLowerCase = () => {
    const lowerCase = inputText.toLowerCase()
    setOutputText(lowerCase)
  }

  const convertToUpperCase = () => {
    const upperCase = inputText.toUpperCase()
    setOutputText(upperCase)
  }

  const convertToSnakeCase = () => {
    const snakeCase = inputText.split(' ').join('_').toLowerCase()
    setOutputText(snakeCase)
  }

  const convertToDotCase = () => {
    const dotCase = inputText.split(' ').join('.').toLowerCase()
    setOutputText(dotCase)
  }

  const convertToHyphenCase = () => {
    const hyphenCase = inputText.split(' ').join('-').toLowerCase()
    setOutputText(hyphenCase)
  }

  const removeExtraSpaces = () => {
    const extraSpacesRemoved = inputText.replace(/\s+/g, ' ').trim()
    setOutputText(extraSpacesRemoved)
  }

  const removeAllSpaces = () => {
    const allSpacesRemoved = inputText.replace(/\s+/g, '')
    setOutputText(allSpacesRemoved)
  }

  const removeEnter = () => {
    const enterRemoved = inputText.replace(/\n/g, '')
    setOutputText(enterRemoved)
  }

  return {
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
    setInputText,
    setOutputText
  }
}
