import React, { Suspense } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import About from './pages/About'
import CategoryPage from './pages/CategoryPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import routes from './utils/routes.json'

// Function to dynamically import components
const loadComponent = (category, component) => {
  return React.lazy(() => {
    try {
      // Use the original folder name from routes.json to maintain correct casing
      const categoryFolder = routes.find(
        (cat) =>
          cat.category.toLowerCase().replace(/\s+/g, '') ===
          category.toLowerCase().replace(/\s+/g, '')
      )?.originalFolder

      if (!categoryFolder) {
        throw new Error(`Category folder not found for: ${category}`)
      }

      // Use the original file name from routes.json
      const project = routes
        .find((cat) => cat.category === category)
        ?.projects.find((proj) => proj.name === component)

      if (!project) {
        throw new Error(
          `Project not found for: ${component} in category ${category}`
        )
      }

      // Construct the import path using the original folder and file names
      return import(`./Tools/${categoryFolder}/${project.fileName}`)
    } catch (error) {
      console.error('Component loading error:', error)
      return Promise.reject(error)
    }
  })
}

const RoutesIndex = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />

        {routes.map((category) => {
          if (!category?.category) {
            console.error('Invalid category:', category)
            return null
          }

          return (
            <React.Fragment key={category.urlPath}>
              <Route path={`/${category.urlPath}`} element={<CategoryPage />} />
              {category.projects.map((project) => {
                if (!project?.name) {
                  console.error('Invalid project:', project)
                  return null
                }

                const Component = loadComponent(category.category, project.name)

                return (
                  <Route
                    key={project.path}
                    path={project.path}
                    element={
                      <Suspense
                        fallback={
                          <div className="flex min-h-screen items-center justify-center">
                            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
                          </div>
                        }
                      >
                        <Component />
                      </Suspense>
                    }
                  />
                )
              })}
            </React.Fragment>
          )
        })}
      </Routes>
    </Router>
  )
}

export default RoutesIndex
