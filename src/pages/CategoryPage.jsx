// src/pages/CategoryPage.jsx
import { Hash } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Card from '../components/Card/Card'
import useIcons from '../hooks/useIcons'
import routes from '../utils/routes.json'

const CategoryPage = () => {
  const location = useLocation()
  const icons = useIcons()
  const currentPath = location.pathname.slice(1)

  // Changed the category finding logic to match with urlPath instead
  const category = routes.find((cat) => cat.urlPath === currentPath)

  if (!category) {
    return (
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-bold">Category Not Found</h2>
        <p className="mb-4">The requested category could not be found.</p>
        <Link to="/" className="">
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="mb-4 items-center">
        <h2 className="flex items-center text-2xl font-semibold">
          <Hash className="mr-2 duration-300 hover:rotate-12" size={30} />
          {category.category}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {category.projects.map((project, index) => {
          const Icon = icons[project.name]
          return <Card key={index} project={project} Icon={Icon} />
        })}
      </div>
    </div>
  )
}

export default CategoryPage
