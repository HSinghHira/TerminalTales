import React from 'react'

const Options = ({
  paragraphCount = 3,
  setParagraphCount,
  wordCount = 50,
  setWordCount,
  startWithLorem = true,
  setStartWithLorem,
  htmlElements = [],
  setHtmlElements
}) => {
  // Early return if any required setter is missing
  if (
    !setParagraphCount ||
    !setWordCount ||
    !setStartWithLorem ||
    !setHtmlElements
  ) {
    return <div>Missing required props</div>
  }

  return (
    <div className="space-y-6">
      {/* Text Generation Options */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number of Paragraphs</span>
            <span className="label-text-alt">{paragraphCount}</span>
          </label>
          <input
            type="range"
            className="range range-primary"
            min={1}
            max={10}
            value={paragraphCount}
            onChange={(e) => setParagraphCount(parseInt(e.target.value))}
          />
          <div className="mt-1 flex w-full justify-between px-2 text-xs">
            <span>1</span>
            <span>5</span>
            <span>10</span>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Words per Paragraph</span>
            <span className="label-text-alt">{wordCount}</span>
          </label>
          <input
            type="range"
            className="range range-primary"
            min={10}
            max={100}
            step={5}
            value={wordCount}
            onChange={(e) => setWordCount(parseInt(e.target.value))}
          />
          <div className="mt-1 flex w-full justify-between px-2 text-xs">
            <span>10</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>
      </div>

      {/* Toggles */}
      <div className="divider">Options</div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4">
        {/* Start with Lorem */}
        <div className="form-control">
          <label className="label flex cursor-pointer items-center justify-start space-x-2">
            <input
              type="checkbox"
              className="toggle toggle-primary mr-2"
              checked={startWithLorem}
              onChange={(e) => setStartWithLorem(e.target.checked)}
            />
            <span className="label-text">Start with "Lorem ipsum"</span>
          </label>
        </div>

        {/* HTML Elements */}
        <div className="form-control">
          <label className="label flex cursor-pointer items-center justify-start space-x-2">
            <input
              type="checkbox"
              className="toggle toggle-primary mr-2"
              checked={htmlElements.includes('p')}
              onChange={(e) => {
                if (e.target.checked) {
                  setHtmlElements([...htmlElements, 'p'])
                } else {
                  setHtmlElements(htmlElements.filter((el) => el !== 'p'))
                }
              }}
            />
            <span className="label-text">Paragraphs &lt;p&gt;</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label flex cursor-pointer items-center justify-start space-x-2">
            <input
              type="checkbox"
              className="toggle toggle-primary mr-2"
              checked={htmlElements.includes('a')}
              onChange={(e) => {
                if (e.target.checked) {
                  setHtmlElements([...htmlElements, 'a'])
                } else {
                  setHtmlElements(htmlElements.filter((el) => el !== 'a'))
                }
              }}
            />
            <span className="label-text">Links &lt;a&gt;</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label flex cursor-pointer items-center justify-start space-x-2">
            <input
              type="checkbox"
              className="toggle toggle-primary mr-2"
              checked={htmlElements.includes('bi')}
              onChange={(e) => {
                if (e.target.checked) {
                  setHtmlElements([...htmlElements, 'bi'])
                } else {
                  setHtmlElements(htmlElements.filter((el) => el !== 'bi'))
                }
              }}
            />
            <span className="label-text">
              Bold & Italic &lt;b&gt; &lt;i&gt;
            </span>
          </label>
        </div>

        <div className="form-control">
          <label className="label flex cursor-pointer items-center justify-start space-x-2">
            <input
              type="checkbox"
              className="toggle toggle-primary mr-2"
              checked={htmlElements.includes('headers')}
              onChange={(e) => {
                if (e.target.checked) {
                  setHtmlElements([...htmlElements, 'headers'])
                } else {
                  setHtmlElements(htmlElements.filter((el) => el !== 'headers'))
                }
              }}
            />
            <span className="label-text">Headers &lt;h1-h5&gt;</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label flex cursor-pointer items-center justify-start space-x-2">
            <input
              type="checkbox"
              className="toggle toggle-primary mr-2"
              checked={htmlElements.includes('lists')}
              onChange={(e) => {
                if (e.target.checked) {
                  setHtmlElements([...htmlElements, 'lists'])
                } else {
                  setHtmlElements(htmlElements.filter((el) => el !== 'lists'))
                }
              }}
            />
            <span className="label-text">Lists &lt;ul&gt; &lt;ol&gt;</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label flex cursor-pointer items-center justify-start space-x-2">
            <input
              type="checkbox"
              className="toggle toggle-primary mr-2"
              checked={htmlElements.includes('dl')}
              onChange={(e) => {
                if (e.target.checked) {
                  setHtmlElements([...htmlElements, 'dl'])
                } else {
                  setHtmlElements(htmlElements.filter((el) => el !== 'dl'))
                }
              }}
            />
            <span className="label-text">Description Lists &lt;dl&gt;</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label flex cursor-pointer items-center justify-start space-x-2">
            <input
              type="checkbox"
              className="toggle toggle-primary mr-2"
              checked={htmlElements.includes('blockquote')}
              onChange={(e) => {
                if (e.target.checked) {
                  setHtmlElements([...htmlElements, 'blockquote'])
                } else {
                  setHtmlElements(
                    htmlElements.filter((el) => el !== 'blockquote')
                  )
                }
              }}
            />
            <span className="label-text">Blockquotes &lt;blockquote&gt;</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label flex cursor-pointer items-center justify-start space-x-2">
            <input
              type="checkbox"
              className="toggle toggle-primary mr-2"
              checked={htmlElements.includes('code')}
              onChange={(e) => {
                if (e.target.checked) {
                  setHtmlElements([...htmlElements, 'code'])
                } else {
                  setHtmlElements(htmlElements.filter((el) => el !== 'code'))
                }
              }}
            />
            <span className="label-text">Code &lt;pre&gt; &lt;code&gt;</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Options
