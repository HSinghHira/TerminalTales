// datascript.js
import { useState } from 'react'

const words = [
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'sed',
  'do',
  'eiusmod',
  'tempor',
  'incididunt',
  'ut',
  'labore',
  'et',
  'dolore',
  'magna',
  'aliqua',
  'enim',
  'ad',
  'minim',
  'veniam',
  'quis',
  'nostrud',
  'exercitation',
  'ullamco',
  'laboris',
  'nisi',
  'ut',
  'aliquip',
  'ex',
  'ea',
  'commodo',
  'consequat',
  'duis',
  'aute',
  'irure',
  'dolor',
  'in',
  'reprehenderit',
  'voluptate',
  'velit',
  'esse',
  'cillum',
  'dolore',
  'eu',
  'fugiat',
  'nulla',
  'pariatur',
  'excepteur',
  'sint',
  'occaecat',
  'cupidatat',
  'non',
  'proident',
  'sunt',
  'in',
  'culpa',
  'qui',
  'officia',
  'deserunt',
  'mollit',
  'anim',
  'id',
  'est',
  'laborum'
]

export const useLoremIpsum = () => {
  const [paragraphCount, setParagraphCount] = useState(3)
  const [wordCount, setWordCount] = useState(50)
  const [startWithLorem, setStartWithLorem] = useState(true)
  const [htmlElements, setHtmlElements] = useState([])
  const [outputText, setOutputText] = useState('')

  const generateRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)]
  }

  const wrapWithRandomTag = (text, tag) => {
    const random = Math.random()
    switch (tag) {
      case 'a':
        return random < 0.2 ? `<a href="#">${text}</a>` : text
      case 'bi':
        if (random < 0.1) return `<b>${text}</b>`
        if (random < 0.2) return `<i>${text}</i>`
        return text
      case 'headers':
        if (random < 0.1) {
          const level = Math.floor(Math.random() * 5) + 1
          return `<h${level}>${text}</h${level}>`
        }
        return text
      case 'blockquote':
        return random < 0.15 ? `<blockquote>${text}</blockquote>` : text
      case 'code':
        return random < 0.1 ? `<pre><code>${text}</code></pre>` : text
      default:
        return text
    }
  }

  const generateList = (type, items = 3) => {
    const tag = type === 'ul' ? 'ul' : 'ol'
    const listItems = Array(items)
      .fill(null)
      .map(() => {
        const words = Array(Math.floor(Math.random() * 5) + 3)
          .fill(null)
          .map(generateRandomWord)
          .join(' ')
        return `  <li>${words}</li>`
      })
      .join('\n')
    return `<${tag}>\n${listItems}\n</${tag}>`
  }

  const generateDescriptionList = () => {
    const items = Array(Math.floor(Math.random() * 3) + 2)
      .fill(null)
      .map(() => {
        const term = generateRandomWord()
        const description = Array(Math.floor(Math.random() * 5) + 3)
          .fill(null)
          .map(generateRandomWord)
          .join(' ')
        return `  <dt>${term}</dt>\n  <dd>${description}</dd>`
      })
      .join('\n')
    return `<dl>\n${items}\n</dl>`
  }

  const generateParagraph = (isFirst) => {
    let paragraph = []

    if (isFirst && startWithLorem) {
      paragraph = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet']
      for (let i = 5; i < wordCount; i++) {
        paragraph.push(generateRandomWord())
      }
    } else {
      for (let i = 0; i < wordCount; i++) {
        paragraph.push(generateRandomWord())
      }
    }

    // Apply HTML elements if enabled
    if (htmlElements.length > 0) {
      paragraph = paragraph.map((word) => {
        let result = word
        htmlElements.forEach((tag) => {
          result = wrapWithRandomTag(result, tag)
        })
        return result
      })
    }

    // Add lists and description lists if enabled
    if (htmlElements.includes('lists') && Math.random() < 0.2) {
      return Math.random() < 0.5 ? generateList('ul') : generateList('ol')
    }
    if (htmlElements.includes('dl') && Math.random() < 0.15) {
      return generateDescriptionList()
    }

    // Capitalize first word and add period
    let text = paragraph.join(' ') + '.'
    text = text.charAt(0).toUpperCase() + text.slice(1)

    // Wrap in paragraph tags if enabled
    if (htmlElements.includes('p')) {
      return `<p>${text}</p>`
    }

    return text
  }

  const generateText = () => {
    const paragraphs = []
    for (let i = 0; i < paragraphCount; i++) {
      paragraphs.push(generateParagraph(i === 0))
    }
    setOutputText(paragraphs.join('\n\n'))
  }

  const clearOutput = () => {
    setOutputText('')
  }

  return {
    paragraphCount,
    setParagraphCount,
    wordCount,
    setWordCount,
    startWithLorem,
    setStartWithLorem,
    htmlElements,
    setHtmlElements,
    outputText,
    generateText,
    clearOutput
  }
}
