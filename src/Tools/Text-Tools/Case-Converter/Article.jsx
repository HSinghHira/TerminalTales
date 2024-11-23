import { Hash } from 'lucide-react'
import React from 'react'

const Article = () => {
  return (
    <>
      <div className="mt-4 p-4">
        <h2 className="mb-4 flex items-center text-2xl font-semibold">
          <Hash className="mr-2 duration-300 hover:rotate-12" size={30} /> Why
          our Case Convertor?
        </h2>
        <div className="card prose w-full max-w-none bg-base-200/30 px-6 shadow-xl">
          <div className="card">
            <div className="card-content">
              <p>
                Our online Case Converter tool makes it simple to transform your
                text into various letter cases with just a few clicks. Whether
                you need to switch to lower case, UPPER CASE, Sentence case, or
                Capitalized Case, our user-friendly interface allows for quick
                and efficient conversions. This tool is perfect for writers,
                students, and professionals who want to ensure their text is
                formatted correctly for any purpose.
              </p>
              <p>
                In addition to standard cases, our converter also supports
                unique formats like aLtErNaTiNg cAsE, making it a versatile
                resource for creative projects and social media posts. With no
                downloads or installations required, you can access the Case
                Converter from any device with an internet connection.
                Experience the convenience of transforming your text
                effortlessly and enhance your writing today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article
