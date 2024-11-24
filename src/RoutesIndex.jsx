import React, { Suspense, useEffect } from 'react'
import ReactGA from 'react-ga'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import About from './pages/About'
import CategoryPage from './pages/CategoryPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import routes from './utils/routes.json'

const TRACKING_ID = 'G-6CS85B5JEC' // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

// Define a mapping of all components using import.meta.glob
const componentModules = import.meta.glob('./Tools/**/*.jsx', { eager: false })

// Function to normalize path separators for import.meta.glob
function normalizePath(filePath) {
  return filePath.replace(/\\/g, '/')
}

// Function to dynamically import components
const loadComponent = (category, component) => {
  try {
    const categoryFolder = routes.find(
      (cat) =>
        cat.category.toLowerCase().replace(/\s+/g, '') ===
        category.toLowerCase().replace(/\s+/g, '')
    )?.originalFolder

    if (!categoryFolder) {
      throw new Error(`Category folder not found for: ${category}`)
    }

    const project = routes
      .find((cat) => cat.category === category)
      ?.projects.find((proj) => proj.name === component)

    if (!project) {
      throw new Error(
        `Project not found for: ${component} in category ${category}`
      )
    }

    // Normalize the path to use forward slashes
    const importPath = normalizePath(
      `./Tools/${categoryFolder}/${project.fileName}`
    )
    const module = componentModules[importPath]

    if (!module) {
      console.error('Available paths:', Object.keys(componentModules))
      throw new Error(`Component module not found for path: ${importPath}`)
    }

    return React.lazy(module)
  } catch (error) {
    console.error('Component loading error:', error)
    return Promise.reject(error)
  }
}

const RoutesIndex = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />

      {routes.map((category) => (
        <React.Fragment key={category.urlPath}>
          <Route path={`/${category.urlPath}`} element={<CategoryPage />} />
          {category.projects.map((project) => {
            const Component = loadComponent(category.category, project.name)
            return (
              <Route
                key={project.path}
                path={`/${category.urlPath}/:projectSlug`}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                }
              />
            )
          })}
        </React.Fragment>
      ))}
    </Routes>
  )
}

export default RoutesIndex
