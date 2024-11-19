// src/components/Card.jsx
import { Hammer } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ project, Icon }) => {
  return (
    <div className="card w-full bg-base-200/30 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">
          {Icon ? (
            <Icon className="mr-1" />
          ) : (
            <span className="mr-1">
              <Hammer />
            </span>
          )}
          {project.name}
        </h3>
        {project.description && <p>{project.description}</p>}
        <div className="card-actions justify-end">
          <Link to={project.path} className="btn btn-primary">
            {project.buttonText || 'Try Now'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
