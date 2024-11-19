import { Eraser, Hammer, Hash } from 'lucide-react'
import React from 'react'

import ChooseFile from '../../components/Buttons/ChooseFile'
import CopyButton from '../../components/Buttons/Copy'
import SaveFile from '../../components/Buttons/SaveFile'
import Related from '../../components/Related/Related'

const ToolPage = () => {
  return (
    <>
      <article>
        {/* Tool Area Starts */}
        <div className="mt-4 p-4">
          <h2 className="mb-4 flex items-center text-2xl font-semibold">
            <Hash className="mr-2 duration-300 hover:rotate-12" size={30} />
            Tool Title
          </h2>
          <div className="card w-full bg-base-200/30 p-4 shadow-xl">
            <div className="card">
              <div className="card-content space-y-4">
                {/* ------------------ */}
                {/* Main Tool Content Start */}
                {/* ------------------ */}

                {/* ----------------- */}
                {/* Main Tool Content Ends */}
                {/* ----------------- */}
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
        <div className="mt-4 p-4">
          <h2 className="mb-4 flex items-center text-2xl font-semibold">
            <Hash className="mr-2 duration-300 hover:rotate-12" size={30} />{' '}
            What is This?
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
              </div>
            </div>
          </div>
        </div>
        {/* Information Area Ends */}
      </article>
    </>
  )
}

export default ToolPage
