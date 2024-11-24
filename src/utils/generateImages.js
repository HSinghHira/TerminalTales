import { createCanvas, loadImage } from 'canvas'
// Import loadImage to load the icon
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function generateSocialImage(title, description, outputPath) {
  // Create canvas with 1200x630 dimensions (recommended for social media)
  const canvas = createCanvas(1200, 630)
  const ctx = canvas.getContext('2d')

  // Set background color
  ctx.fillStyle = '#23351e' // Updated background color
  ctx.fillRect(0, 0, 1200, 630)

  // Add a subtle gradient (optional, can be removed if not needed)
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630)
  gradient.addColorStop(0, '#23351e') // Updated gradient start color
  gradient.addColorStop(1, '#2a2a2a') // You can adjust this if needed
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 1200, 630)

  // Add a border
  ctx.strokeStyle = '#333333'
  ctx.lineWidth = 8
  ctx.strokeRect(20, 20, 1160, 590)

  // Configure text
  ctx.textAlign = 'center'

  // Title
  ctx.fillStyle = '#cde2c1' // Updated text color for title
  ctx.font = 'bold 60px Arial'

  // Handle long titles
  const maxTitleWidth = 1000
  const words = title.split(' ')
  let line = ''
  let y = 220

  for (const word of words) {
    const testLine = line + word + ' '
    if (ctx.measureText(testLine).width > maxTitleWidth) {
      ctx.fillText(line.trim(), 600, y)
      line = word + ' '
      y += 70
    } else {
      line = testLine
    }
  }
  ctx.fillText(line.trim(), 600, y)

  // Description
  ctx.fillStyle = '#cde2c1' // Updated text color for description
  ctx.font = '30px Arial'
  const descWords = description.split(' ')
  line = ''
  y += 80 // Add some spacing after title

  for (const word of descWords) {
    const testLine = line + word + ' '
    if (ctx.measureText(testLine).width > maxTitleWidth) {
      ctx.fillText(line.trim(), 600, y)
      line = word + ' '
      y += 40
    } else {
      line = testLine
    }
  }
  ctx.fillText(line.trim(), 600, y)

  // Load the terminal icon from the public folder
  const iconPath = path.join(
    process.cwd(),
    'public',
    'favicon',
    'light',
    'favicon.svg'
  ) // Update with the correct path to your icon
  const icon = await loadImage(iconPath)

  // Draw the icon
  const iconSize = 40 // Set the size of the icon
  ctx.drawImage(icon, 600 - iconSize / 2, y + 20, iconSize, iconSize) // Draw the icon centered below the description

  // Add the website text below the icon
  ctx.fillStyle = '#cde2c1' // Text color for the website
  ctx.font = 'bold 24px Arial'
  ctx.fillText('www.TerminalTales.com', 600, y + 80) // Position the text below the icon

  // Save the image
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(outputPath, buffer)
}

async function generateImages() {
  try {
    // Read routes.json
    const routesPath = path.join(__dirname, 'routes.json')
    const routesData = JSON.parse(fs.readFileSync(routesPath, 'utf8'))

    // Create social directory if it doesn't exist
    const socialDir = path.join(process.cwd(), 'public', 'social')
    if (!fs.existsSync(socialDir)) {
      fs.mkdirSync(socialDir, { recursive: true })
    }

    // Generate social images for each project
    for (const category of routesData) {
      if (!category.category) {
        console.warn(
          '❌ Category name is undefined, skipping category:',
          category
        )
        continue // Skip this iteration if category.category is undefined
      }

      const categoryDir = path.join(
        socialDir,
        category.category.replace(/\s+/g, '-').toLowerCase()
      ) // Create category directory
      if (!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true })
      }

      for (const project of category.projects) {
        if (!project.name) {
          console.warn(
            '❌ Project name is undefined, skipping project in category:',
            category.category
          )
          continue // Skip this project if project.name is undefined
        }

        const imageFileName = `${project.name.replace(/\s+/g, '-').toLowerCase()}.png` // Use project name for the file name
        const imagePath = path.join(categoryDir, imageFileName) // Save the image in the respective category folder
        console.log(`Generating social image for ${project.name}...`)
        await generateSocialImage(project.name, project.description, imagePath)

        console.log(`✅ Generated: ${imagePath}`)
      }
    }

    console.log('✅ Social images generated successfully')
  } catch (error) {
    console.error('❌ Error generating social images:', error)
    console.error(error.stack)
    process.exit(1)
  }
}

// Run the generation
generateImages()
