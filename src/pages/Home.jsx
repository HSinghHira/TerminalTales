// src/pages/Home.jsx
import { Hash } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/Card/Card'
import useIcons from '../hooks/useIcons'
import routes from '../utils/routes.json'

const HomePage = () => {
  const icons = useIcons()

  return (
    <>
      <head>
        <title>Terminal Tales - All-in-One Free Online Tools</title>
        <meta
          name="description"
          content="Explore free, blazing-fast, and easy-to-use online tools. Build, create, and optimize your projects with our all-in-one toolbox."
        />
        <link rel="canonical" href="https://www.terminaltales.com/" />

        <meta
          property="og:title"
          content="Terminal Tales - All-in-One Free Online Tools"
        />
        <meta
          property="og:description"
          content="Explore free, blazing-fast, and easy-to-use online tools. Build, create, and optimize your projects with our all-in-one toolbox."
        />
        <meta property="og:url" content="https://www.terminaltales.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/socialimage.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Terminal Tales - All-in-One Free Online Tools"
        />
        <meta
          name="twitter:description"
          content="Explore free, blazing-fast, and easy-to-use online tools. Build, create, and optimize your projects with our all-in-one toolbox."
        />
        <meta name="twitter:image" content="/socialimage.png" />
      </head>

      <div className="p-6">
        {routes.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center text-2xl font-semibold">
                <Hash className="mr-2 duration-300 hover:rotate-12" size={30} />
                {category.category}
              </h2>
              <button
                onClick={() => (window.location.href = `/${category.urlPath}`)}
                className="hover:text-primary-focus font-semibold text-primary"
                aria-label={`View all items in ${category.name}`}
              >
                View All →
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project, projectIndex) => {
                const Icon = icons[project.name]
                return <Card key={projectIndex} project={project} Icon={Icon} />
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default HomePage