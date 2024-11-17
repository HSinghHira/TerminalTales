import { Hammer, Hash } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

import useIcons from '../../hooks/useIcons'
import routes from '../../utils/routes.json'

const Aside = ({ menuState, node }) => {
  const icons = useIcons()

  return (
    <aside
      ref={node}
      className={`fixed left-0 top-0 z-10 h-screen w-80 border-r-2 border-base-100 bg-base-200 transition-transform duration-300 xl:translate-x-0 ${
        menuState ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="pt-16">
        <div className="p-4">
          <ul className="menu w-full rounded-box bg-base-200">
            {routes.map((category, categoryIndex) => (
              <li key={categoryIndex}>
                <details open>
                  <summary className="font-semibold">
                    <Hash size={18} />
                    {category.category}
                  </summary>
                  <ul>
                    {category.projects.map((project, projectIndex) => {
                      const Icon = icons[project.name]
                      return (
                        <li key={projectIndex}>
                          <Link to={project.path}>
                            {Icon ? <Icon size={18} /> : <Hammer size={18} />}
                            {project.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Aside
