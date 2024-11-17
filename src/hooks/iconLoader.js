// iconLoader.js
export const loadIcon = async (iconName) => {
  try {
    // Import from the default export of 'lucide-react'
    const { [iconName]: Icon } = await import('lucide-react')
    return Icon
  } catch (error) {
    console.error(`Error loading icon: ${iconName}`, error)
    return null
  }
}
