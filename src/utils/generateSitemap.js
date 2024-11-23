import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read the routes configuration
const routes = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'routes.json'), 'utf-8')
)

// Configuration
const BASE_URL = 'https://www.terminaltales.com' // Your website's base URL
const SITEMAP_PATH = path.join(process.cwd(), 'public', 'sitemap.xml')

function formatUrl(path = '') {
  // Remove any leading slashes and add the hash
  const cleanPath = path.replace(/^\//, '')
  return cleanPath ? `${BASE_URL}/#/${cleanPath}` : BASE_URL
}

function generateSitemap() {
  // Start XML sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${formatUrl()}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`

  // Add category pages
  routes.forEach((category) => {
    sitemap += `
  <url>
    <loc>${formatUrl(category.urlPath)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`

    // Add project pages within each category
    category.projects.forEach((project) => {
      // Remove leading slash from project.path before formatting
      const projectPath = project.path.replace(/^\//, '')
      sitemap += `
  <url>
    <loc>${formatUrl(projectPath)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
    })
  })

  // Close sitemap
  sitemap += '\n</urlset>'

  // Create public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  // Write sitemap to file
  fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf-8')

  // Log results
  console.log('Sitemap generated successfully!')
  console.log('Location:', SITEMAP_PATH)
  console.log('\nURLs included:')
  console.log(`- ${formatUrl()} (Homepage)`)
  routes.forEach((category) => {
    console.log(
      `- ${formatUrl(category.urlPath)} (Category: ${category.category})`
    )
    category.projects.forEach((project) => {
      const projectPath = project.path.replace(/^\//, '')
      console.log(`  - ${formatUrl(projectPath)} (${project.displayName})`)
    })
  })
}

// Generate the sitemap
generateSitemap()
