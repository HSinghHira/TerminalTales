// src/hooks/useCard.js
import { Hammer } from 'lucide-react'

const useCard = (icons, project) => {
  const Icon = icons[project.name] || Hammer
  return Icon
}

export default useCard
