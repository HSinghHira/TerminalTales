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
  return name.replace(/\s+/g, ' ').replace(/^./, (str) => str.toUpperCase())
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

function extractMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const description = content.match(
      /Description\s*=\s*(['"])((?:(?!\1).)*)\1/
    )
    const toolIcon = content.match(/ToolIcon\s*=\s*(['"])((?:(?!\1).)*)\1/)

    return {
      description: description ? description[2] : '',
      toolicon: toolIcon ? toolIcon[2] : ''
    }
  } catch (error) {
    console.error(`Error reading metadata from ${filePath}:`, error)
    return { description: '', toolicon: '' }
  }
}

function findIndexFile(dir) {
  const indexPath = path.join(dir, 'index.jsx')
  return fs.existsSync(indexPath) ? indexPath : null
}

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/')
}

function generateRoutes(dir) {
  return fs
    .readdirSync(dir)
    .map((categoryFolder) => {
      const categoryPath = path.join(dir, categoryFolder)
      if (!fs.statSync(categoryPath).isDirectory()) return null

      const urlSafeCategory = formatUrlPath(categoryFolder)
      const projects = []

      // Read all project folders within the category
      fs.readdirSync(categoryPath).forEach((projectFolder) => {
        const projectPath = path.join(categoryPath, projectFolder)

        // Skip if not a directory or doesn't contain index.jsx
        if (!fs.statSync(projectPath).isDirectory()) return

        const indexFile = findIndexFile(projectPath)
        if (!indexFile) return

        const { description, toolicon } = extractMetadata(indexFile)
        const urlSafeProject = formatUrlPath(projectFolder)

        // Normalize the relative path to use forward slashes
        const relativePath = path.relative(
          path.join(dir, categoryFolder),
          indexFile
        )
        const normalizedPath = normalizePath(relativePath)

        projects.push({
          name: convertToReadableName(projectFolder),
          displayName: convertToReadableName(projectFolder),
          description: description,
          toolicon: toolicon,
          path: `/${urlSafeCategory}/${urlSafeProject}`,
          image: `/${urlSafeCategory}/${urlSafeProject}.png`,
          fileName: normalizedPath
        })
      })

      return {
        category: convertToReadableName(categoryFolder),
        urlPath: urlSafeCategory,
        originalFolder: categoryFolder,
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
