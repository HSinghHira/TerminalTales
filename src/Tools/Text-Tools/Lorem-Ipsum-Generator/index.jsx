import { Hammer, Hash } from 'lucide-react'
import React from 'react'

import Clear from '../../../components/Buttons/Clear'
import CopyButton from '../../../components/Buttons/Copy'
import PreviewButton from '../../../components/Buttons/Preview'
import SaveFile from '../../../components/Buttons/SaveFile'
import Related from '../../../components/Related/Related'
import Article from './Article'
import Options from './Options'
import { useLoremIpsum } from './datascript'

const Description =
  'Discover high-quality placeholder text for your design projects with this Lorem Ipsum generator.'

const ToolIcon = 'TextSelect'

const LoremIpsum = () => {
  const {
    paragraphCount,
    setParagraphCount,
    wordCount,
    setWordCount,
    startWithLorem,
    setStartWithLorem,
    outputText,
    generateText,
    clearOutput,
    htmlElements,
    setHtmlElements
  } = useLoremIpsum()

  return (
    <article>
      <div className="mt-4 p-4">
        <h2 className="mb-4 flex items-center text-2xl font-semibold">
          <Hash className="mr-2 duration-300 hover:rotate-12" size={30} />
          Lorem Ipsum Generator
        </h2>

        <div className="card w-full bg-base-200/30 p-4 shadow-xl">
          <div className="card-body space-y-4">
            <Options
              paragraphCount={paragraphCount}
              setParagraphCount={setParagraphCount}
              wordCount={wordCount}
              setWordCount={setWordCount}
              startWithLorem={startWithLorem}
              setStartWithLorem={setStartWithLorem}
              htmlElements={htmlElements}
              setHtmlElements={setHtmlElements}
            />

            <div className="form-control">
              <textarea
                className="textarea textarea-bordered h-48 w-full"
                value={outputText}
                readOnly
                placeholder="Generated text will appear here..."
              />
            </div>
            <div className="flex flex-col space-x-2 space-y-2 md:flex-row md:justify-between md:space-y-0">
              <button className="btn btn-primary" onClick={generateText}>
                <Hammer /> Generate
              </button>

              <div className="flex space-x-2">
                <CopyButton output={outputText} />
                <SaveFile formats={['html', 'txt']} content={outputText} />
                <Clear onClear={clearOutput} />
                <div className="hidden sm:flex">
                  <PreviewButton content={outputText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Area */}
      <div>
        <Related />
      </div>

      {/* Information Area */}
      <Article />
    </article>
  )
}

export default LoremIpsum
