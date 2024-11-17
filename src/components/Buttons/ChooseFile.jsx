import { Upload } from 'lucide-react'
import React from 'react'

const ChooseFile = ({ onFileContent }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        const content = e.target.result
        // Call the parent's callback function with the file content
        if (onFileContent) {
          onFileContent(content)
        }
      }

      reader.onerror = (error) => {
        console.error('Error reading file:', error)
      }

      reader.readAsText(file)
    }
  }

  return (
    <>
      <label
        htmlFor="fileUpload"
        className="btn btn-secondary"
      >
        <Upload className="w-5 h-5 mr" />
        <span className="sm:block hidden">Choose File</span>
      </label>
      <input
        id="fileUpload"
        type="file"
        className="hidden"
        accept=".html,.txt"
        onChange={handleFileUpload}
      />
    </>
  )
}

export default ChooseFile