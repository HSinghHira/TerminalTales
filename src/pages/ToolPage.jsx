// index.jsx
import { Eraser, Hammer, Hash } from 'lucide-react'
import React, { useState } from 'react'

import ChooseFile from '../../../components/Buttons/ChooseFile'
import CopyButton from '../../../components/Buttons/Copy'
import SaveFile from '../../../components/Buttons/SaveFile'
import Related from '../../../components/Related/Related'

const Description =
  'Minify HTML code effortlessly Reduce file size, improve page load times, and boost website performance.'

const ToolIcon = 'Code'

const HTMLMinifier = () => {
  return (
    <>
      <SEO />
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
                {/* Options */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                            {customLabels[key]} {/* Use custom label here */}
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
                      <Hammer className="h-5 w-5" />{' '}
                      <span className=""> Minify</span>
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

        {/* Information Area Ends */}
      </article>
    </>
  )
}

export default HTMLMinifier
