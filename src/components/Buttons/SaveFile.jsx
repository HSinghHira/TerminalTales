import { ChevronDown, Download } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const SaveFile = ({ formats = [], content }) => {
  const [selectedFormat, setSelectedFormat] = useState(formats[0] || 'txt')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    // Update selectedFormat if formats prop changes
    if (formats.length > 0 && !formats.includes(selectedFormat)) {
      setSelectedFormat(formats[0])
    }
  }, [formats, selectedFormat])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const generateFileName = (format) => {
    const randomNum = Math.floor(Math.random() * 10000)
    return `output_${randomNum}.${format}`
  }

  const handleSaveFile = (format) => {
    const fileName = generateFileName(format)
    const blob = new Blob([content], { type: 'text/plain' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = fileName
    link.click()
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  if (formats.length === 0) {
    return (
      <button
        onClick={() => handleSaveFile('txt')}
        className="btn btn-secondary flex"
      >
        <Download className="mr h-5 w-5" />{' '}
        <span className="ml-2 hidden sm:block"> Save as .TXT</span>
      </button>
    )
  }

  if (formats.length === 1) {
    return (
      <button
        onClick={() => handleSaveFile(formats[0])}
        className="btn btn-secondary flex"
      >
        <Download className="mr h-5 w-5" />{' '}
        <span className="ml-2 hidden sm:block">
          {' '}
          Save as .{formats[0].toUpperCase()}{' '}
        </span>
      </button>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="btn btn-secondary flex"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center justify-center">
          <Download className="h-5 w-5" />{' '}
          <span className="ml-2 hidden sm:block"> Save as</span>
          <ChevronDown
            className={`ml-2 h-5 w-5 ${isDropdownOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md bg-base-200 shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {formats.map((format) => (
              <a
                key={format}
                href="#"
                className="block px-4 py-2 text-sm hover:bg-base-300"
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedFormat(format)
                  setIsDropdownOpen(false)
                  handleSaveFile(format)
                }}
              >
                Save as .{format.toUpperCase()} Format
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SaveFile
