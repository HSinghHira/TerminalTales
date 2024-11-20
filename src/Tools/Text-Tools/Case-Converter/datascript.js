import { useState } from 'react'

export const useCaseConvert = () => {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleInputChange = (e) => {
    setInputText(e.target.value)
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
  }
}
