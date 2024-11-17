import { useEffect, useState } from 'react'

import routes from '../utils/routes.json'
import { loadIcon } from './iconLoader'

const useIcons = () => {
  const [icons, setIcons] = useState({})

  useEffect(() => {
    const fetchIcons = async () => {
      const iconPromises = {}
      routes.forEach((category) => {
        category.projects.forEach((project) => {
          iconPromises[project.name] = loadIcon(project.toolicon)
        })
      })

      const resolvedIcons = await Promise.all(Object.values(iconPromises))
      const iconsMap = Object.keys(iconPromises).reduce((acc, key, index) => {
        acc[key] = resolvedIcons[index]
        return acc
      }, {})

      setIcons(iconsMap)
    }

    fetchIcons()
  }, [])

  return icons
}

export default useIcons
