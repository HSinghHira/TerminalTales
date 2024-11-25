import { Hash } from 'lucide-react'
import React from 'react'

const Article = () => {
  return (
    <>
      <div className="mt-4 p-4">
        <h2 className="mb-4 flex items-center text-2xl font-semibold">
          <Hash className="mr-2 duration-300 hover:rotate-12" size={30} /> About
          Lorem Ipsum Generator
        </h2>
        <div className="card prose w-full max-w-none bg-base-200/30 px-6 shadow-xl">
          <div className="card">
            <div className="card-content">
              <p>
                Our Lorem Ipsum Generator creates placeholder text that matches
                the classic Lorem Ipsum style while offering customization
                options. Whether you need a single paragraph or multiple
                paragraphs of varying lengths, our tool makes it easy to
                generate professional-looking placeholder text for your designs,
                documents, or web projects.
              </p>
              <p>
                You can customize the output by adjusting the number of
                paragraphs and words per paragraph, and choose whether to start
                with the traditional "Lorem ipsum dolor sit amet" opening. The
                generated text maintains the look and feel of Latin text while
                being completely randomized, making it perfect for demonstrating
                layouts without distracting from the design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Article
