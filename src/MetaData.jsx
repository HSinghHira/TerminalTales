import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import routes from './utils/routes.json'

const MetaData = () => {
  const location = useLocation()

  // Function to find the current route data
  const findCurrentRoute = () => {
    const currentPath = location.pathname

    for (const category of routes) {
      const project = category.projects.find(
        (project) => project.path === currentPath
      )

      if (project) {
        return project
      }
    }

    // Return null if route not found
    return null
  }

  const currentRoute = findCurrentRoute()
  const baseUrl = `${window.location.protocol}//${window.location.host}`
  const currentUrl = `${baseUrl}${window.location.pathname}${location.pathname === '/' ? '' : window.location.hash}`

  // Default image URL
  const defaultImageUrl = `${baseUrl}/social/socialimage.png`

  // Construct the image URL if currentRoute exists and has an image property
  const imageUrl =
    currentRoute && currentRoute.image
      ? `${baseUrl}/social/${currentRoute.image}`
      : defaultImageUrl // Use default image if no specific image is found

  // Schema markup
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: currentRoute
      ? currentRoute.displayName
      : 'Terminal Tales - All-in-One Free Online Tools',
    url: currentUrl,
    description: currentRoute
      ? currentRoute.description
      : 'Explore free, blazing-fast, and easy-to-use online tools. Build, create, and optimize your projects with our all-in-one toolbox.',
    image: imageUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${currentUrl}?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>
        {currentRoute
          ? currentRoute.displayName
          : 'Terminal Tales - All-in-One Free Online Tools'}
      </title>
      <meta
        name="description"
        content={
          currentRoute
            ? currentRoute.description
            : 'Explore free, blazing-fast, and easy-to-use online tools. Build, create, and optimize your projects with our all-in-one toolbox.'
        }
      />
      <link rel="canonical" href={currentUrl} />
      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content={
          currentRoute
            ? currentRoute.displayName
            : 'Terminal Tales - All-in-One Free Online Tools'
        }
      />
      <meta
        property="og:description"
        content={
          currentRoute
            ? currentRoute.description
            : 'Explore free, blazing-fast, and easy-to-use online tools. Build, create, and optimize your projects with our all-in-one toolbox.'
        }
      />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}{' '}
      {/* Add Open Graph image only if it exists */}
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={
          currentRoute
            ? currentRoute.displayName
            : 'Terminal Tales - All-in-One Free Online Tools'
        }
      />
      <meta
        name="twitter:description"
        content={
          currentRoute
            ? currentRoute.description
            : 'Explore free, blazing-fast, and easy-to-use online tools. Build, create, and optimize your projects with our all-in-one toolbox.'
        }
      />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}{' '}
      {/* Add Twitter image only if it exists */}
      <meta name="twitter:creator" content="@HSinghHira" />{' '}
      {/* Replace with your Twitter handle */}
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:domain" content={window.location.host} />
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      {/* Schema Markup */}
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>
  )
}

export default MetaData
