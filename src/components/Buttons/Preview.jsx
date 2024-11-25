import { Eye } from 'lucide-react'
import React from 'react'

const PreviewButton = ({ content }) => {
  const handlePreview = () => {
    // Create a new window/tab
    const previewWindow = window.open('', '_blank')

    // If the content appears to be HTML, render it directly
    const isHTML = /<[a-z][\s\S]*>/i.test(content)

    // Set the content of the new window
    if (isHTML) {
      previewWindow.document.write(content)
      // Add base styles to make the preview more readable
      previewWindow.document.write(`
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.5;
            padding: 2rem;
            max-width: 80ch;
            margin: 0 auto;
          }
        </style>
      `)
    } else {
      // For plain text, wrap in pre tag to preserve formatting
      previewWindow.document.write(`
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.5;
            padding: 2rem;
            max-width: 80ch;
            margin: 0 auto;
          }
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        </style>
        <pre>${content}</pre>
      `)
    }

    previewWindow.document.close()
  }

  return (
    <button onClick={handlePreview} className="btn btn-secondary">
      <Eye className="h-5 w-5" />
      <span className="ml-2 hidden sm:block">Preview</span>
    </button>
  )
}

export default PreviewButton
