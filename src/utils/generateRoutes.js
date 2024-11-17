import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseDir = path.join(process.cwd(), 'src', 'Tools')

// Format URL paths consistently
function formatUrlPath(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

// Format component names consistently
function formatComponentName(name) {
  return name
    .replace(/\s+/g, ' ')
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/.jsx$/i, '')
}

// List of common acronyms to preserve
const commonAcronyms = [
  'HTML',
  'CSS',
  'XML',
  'JSON',
  'URL',
  'SQL',
  'PDF',
  'SVG',
  'PNG',
  'JWT',
  'API'
]

function convertToReadableName(name) {
  // Remove file extension
  name = name.replace(/.jsx$/i, '')

  // Split by hyphens
  const parts = name.split('-')

  // Process each part
  return parts
    .map((part) => {
      // Check if the part is a common acronym (case-insensitive)
      const upperPart = part.toUpperCase()
      if (commonAcronyms.includes(upperPart)) {
        return upperPart
      }

      // For non-acronym parts, capitalize first letter and lowercase the rest
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    })
    .join(' ')
}

function extractDescription(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const match = content.match(/Description\s*=\s*(['"])((?:(?!\1).)*)\1/)
    return match ? match[2] : ''
  } catch (error) {
    console.error(`Error reading description from ${filePath}:`, error)
    return ''
  }
}

function extractToolIcon(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const match = content.match(/ToolIcon\s*=\s*(['"])((?:(?!\1).)*)\1/)
    return match ? match[2] : ''
  } catch (error) {
    console.error(`Error reading icon from ${filePath}:`, error)
    return ''
  }
}

function generateRoutes(dir) {
  return fs
    .readdirSync(dir)
    .map((folder) => {
      const categoryPath = path.join(dir, folder)
      if (!fs.statSync(categoryPath).isDirectory()) return null

      // Format category path for URLs
      const urlSafeFolder = formatUrlPath(folder)

      const projects = fs
        .readdirSync(categoryPath)
        .filter((file) => file.endsWith('.jsx'))
        .map((file) => {
          const filePath = path.join(categoryPath, file)
          const description = extractDescription(filePath)
          const toolicon = extractToolIcon(filePath)
          const urlSafeFile = formatUrlPath(file.replace(/.jsx$/i, ''))

          return {
            name: convertToReadableName(file),
            displayName: convertToReadableName(file),
            description: description,
            toolicon: toolicon,
            path: `/${urlSafeFolder}/${urlSafeFile}`,
            fileName: file
          }
        })

      return {
        category: convertToReadableName(folder),
        urlPath: urlSafeFolder,
        originalFolder: folder,
        projects
      }
    })
    .filter(Boolean)
}

const routes = generateRoutes(baseDir)

// Write the routes to file
fs.writeFileSync(
  path.join(__dirname, 'routes.json'),
  JSON.stringify(routes, null, 2),
  'utf-8'
)

// Log the generated routes for verification
console.log('Routes generated:')
routes.forEach((category) => {
  console.log(`\nCategory: ${category.category} (${category.urlPath})`)
  category.projects.forEach((project) => {
    console.log(`  - ${project.displayName} => ${project.path}`)
  })
})

console.log('\nRoutes successfully generated in routes.json')
