import { Eraser } from 'lucide-react'
import React from 'react'

const Clear = ({ onClear }) => {
  return (
    <button className="btn btn-secondary" onClick={onClear}>
      <Eraser className="w-5" />{' '}
      <span className="ml-2 hidden sm:block"> Clear</span>
    </button>
  )
}

export default Clear
