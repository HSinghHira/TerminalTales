// src/pages/CategoryPage.jsx
import { Hash } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import useIcons from '../../hooks/useIcons'
import routes from '../../utils/routes.json'
import Card from '../Card/Card'

const Related = () => {
  const location = useLocation()
  const icons = useIcons()

  // Debug: Log the current location
  // console.log('Current Path:', location.pathname)

  // Extract the category segment from the URL (e.g., '/imagetools/imagecrop' → 'imagetools')
  const [categorySegment] = location.pathname.split('/').slice(1)

  // Debug: Log the detected category segment
  // console.log('Category Segment:', categorySegment)

  // Find the current category based on the URL segment
  const currentCategory = routes.find(
    (category) => category.urlPath?.toLowerCase() === categorySegment
  )

  // Debug: Log the matched category
  // console.log('Current Category:', currentCategory)

  // If no category is found, return null
  if (!currentCategory) {
    console.log('Category not found.')
    return null
  }

  // Get the current project path
  const currentProjectPath = location.pathname

  // Filter out the current project from the related projects list
  const relatedProjects = currentCategory.projects.filter(
    (project) => project.path !== currentProjectPath
  )

  // Debug: Log the filtered related projects
  // console.log('Related Projects:', relatedProjects)

  // If no related projects are found, return null
  if (relatedProjects.length === 0) {
    // console.log('No related projects found.')
    return null
  }

  // Limit to two related projects
  const displayedProjects = relatedProjects.slice(0, 2)

  return (
    <div className="mt-8 p-4">
      <h2 className="mb-4 flex items-center text-2xl font-semibold">
        <Hash className="mr-2 duration-300 hover:rotate-12" size={30} /> Related
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {displayedProjects.map((project, index) => {
          const Icon = icons[project.name] || null
          return <Card key={index} project={project} Icon={Icon} />
        })}
      </div>
    </div>
  )
}

export default Related
