import { Eraser, Hammer, Hash, ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

import ChooseFile from '../../components/Buttons/ChooseFile'
import CopyButton from '../../components/Buttons/Copy'
import SaveFile from '../../components/Buttons/SaveFile'
import Related from '../../components/Related/Related'

const Description =
  'Minify HTML code effortlessly Reduce file size, improve page load times, and boost website performance.'

const ToolIcon = 'Code'

const HTMLMinifier = () => {
  const [inputHtml, setInputHtml] = useState('')
  const [outputHtml, setOutputHtml] = useState('')
  const [options, setOptions] = useState({
    removeComments: true,
    removeWhitespace: true,
    removeEmptyAttributes: true,
    minifyInlineCss: true,
    minifyInlineJs: true,
    removeQuotes: true
  })

  const minifyHTML = (html) => {
    let result = html

    // Remove comments
    if (options.removeComments) {
      result = result.replace(/<!--[\s\S]*?-->/g, '')
    }

    // Remove whitespace
    if (options.removeWhitespace) {
      // Preserve whitespace within text content
      result = result
        .replace(/>\s+</g, '><') // Remove whitespace between tags
        .replace(/^\s+|\s+$/gm, '') // Remove leading/trailing whitespace
        .replace(/\s{2,}/g, ' ') // Replace multiple spaces with single space
    }

    // Remove empty attributes
    if (options.removeEmptyAttributes) {
      result = result.replace(/\s+(?:class|style|id|title)=["']\s*["']/g, '')
    }

    // Minify inline CSS
    if (options.minifyInlineCss) {
      result = result.replace(
        /<style[^>]*>([\s\S]*?)<\/style>/gi,
        function (match, css) {
          return (
            '<style>' +
            css
              .replace(/\s+/g, ' ')
              .replace(/:\s+/g, ':')
              .replace(/;\s+/g, ';')
              .replace(/{\s+/g, '{')
              .replace(/}\s+/g, '}')
              .trim() +
            '</style>'
          )
        }
      )
    }

    // Minify inline JavaScript
    if (options.minifyInlineJs) {
      result = result.replace(
        /<script[^>]*>([\s\S]*?)<\/script>/gi,
        function (match, js) {
          return (
            '<script>' +
            js
              .replace(/\/\*[\s\S]*?\*\//g, '')
              .replace(/\/\/.*/g, '')
              .replace(/\s+/g, ' ')
              .trim() +
            '</script>'
          )
        }
      )
    }

    // Remove unnecessary quotes from attributes
    if (options.removeQuotes) {
      result = result.replace(/=["']([^"'<>` ]+)["']/g, '=$1')
    }

    return result
  }

  const handleMinify = () => {
    try {
      const minified = minifyHTML(inputHtml)
      setOutputHtml(minified)
    } catch (error) {
      console.error('Minification error:', error)
      setOutputHtml('Error occurred during minification')
    }
  }

  const handleClear = () => {
    setInputHtml('')
    setOutputHtml('')
  }

  const handleOptionChange = (optionName) => {
    setOptions((prev) => ({
      ...prev,
      [optionName]: !prev[optionName]
    }))
  }

  return (
    <>
      <article>
        {/* Tool Area Starts */}
        <div className="mt-4 p-4">
          <h2 className="mb-4 flex items-center text-2xl font-semibold">
            <Hash className="mr-2 duration-300 hover:rotate-12" size={30} />
            HTML Minify
          </h2>
          <div className="card w-full bg-base-200/30 p-4 shadow-xl">
            <div className="card">
              <div className="card-content space-y-4">
                {/* Input and Output Textareas */}
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex-1">
                    <textarea
                      value={inputHtml}
                      onChange={(e) => setInputHtml(e.target.value)}
                      rows="10"
                      placeholder="Enter your HTML code here"
                      className="textarea textarea-bordered w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={outputHtml}
                      readOnly
                      rows="10"
                      placeholder="Minified HTML will appear here"
                      className="textarea textarea-bordered w-full"
                    />
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(options).map(([key, value]) => (
                    <div key={key} className="form-control">
                      <label className="label cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="toggle"
                            checked={value}
                            onChange={() => handleOptionChange(key)}
                          />
                          <span className="label-text">
                            {key.split(/(?=[A-Z])/).join(' ')}
                          </span>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col justify-between md:flex-row">
                  {/* Button Toolbar Start */}
                  <div
                    className="my-2 flex items-center space-x-1"
                    role="toolbar"
                    aria-label="Settings toolbar"
                  >
                    <ChooseFile
                      onFileContent={(content) => setInputHtml(content)}
                    />
                    <CopyButton text={outputHtml} output={outputHtml} />
                    <SaveFile content={outputHtml} formats={['html', 'txt']} />
                    <button className="btn btn-secondary" onClick={handleClear}>
                      <Eraser className="w-5" />{' '}
                      <span className="ml-2 hidden sm:block"> Clear</span>
                    </button>
                  </div>
                  {/* Button Toolbar End */}

                  {/* Main Button Start */}
                  <div
                    className="my-2 flex items-center space-x-1"
                    role="toolbar"
                    aria-label="Settings toolbar"
                  >
                    <button className="btn btn-primary" onClick={handleMinify}>
                      <Hammer className="h-5 w-5" /> Minify
                    </button>
                  </div>
                  {/* Main Button End */}
                </div>
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
        <div className="mt-4 p-4">
          <h2 className="mb-4 flex items-center text-2xl font-semibold">
            <Hash /> What is HTML Minify?
          </h2>
          <div className="card prose w-full max-w-none bg-base-200/30 px-6 shadow-xl">
            <div className="card">
              <div className="card-content">
                <p>
                  HTML minification is the process of removing unnecessary
                  characters from HTML code, such as whitespace, line breaks,
                  comments and unnecessary tags. This compression reduces the
                  file size, making websites load faster and improving user
                  experience. The process involves analyzing the HTML code,
                  identifying redundant elements and removing them without
                  compromising the website's functionality.
                </p>
                <p>
                  The benefits of HTML minification are numerous. Faster page
                  loads enhance visitor engagement, while improved SEO boosts
                  search engine rankings. Reduced bandwidth usage lowers hosting
                  costs, and better mobile performance ensures a smooth user
                  experience across devices. Additionally, faster-loading
                  websites have higher conversion rates, contributing to
                  improved business outcomes.
                </p>
                <p>
                  Our HTML Minify Tool offers a convenient solution. Simply
                  paste your HTML code and click "Minify" to instantly compress
                  your files. Our tool is free, secure, and online, eliminating
                  the need for software downloads or registration. With these
                  features, you can optimize your website's performance quickly
                  and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Information Area Ends */}
      </article>
    </>
  )
}

export default HTMLMinifier