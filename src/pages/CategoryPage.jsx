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
        <h1 className="mb-4 font-bold text-2xl">Category Not Found</h1>
        <p className="mb-4">The requested category could not be found.</p>
        <Link to="/" className="">
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="items-center mb-4">
        <h1 className="flex items-center font-semibold text-2xl">
          <Hash className="mr-2 duration-300 hover:rotate-12" size={30} />
          {category.category}
        </h1>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {category.projects.map((project, index) => {
          const Icon = icons[project.name]
          return <Card key={index} project={project} Icon={Icon} />
        })}
      </div>
    </div>
  )
}

export default CategoryPage