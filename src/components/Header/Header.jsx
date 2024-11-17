import { useEffect, useRef, useState } from 'react'

import Aside from './Aside'
import Nav from './Nav'

const Header = () => {
  const [menuState, setMenuState] = useState(false)
  const node = useRef()
  const buttonNode = useRef()

  const handleClickOutside = (e) => {
    if (
      node.current.contains(e.target) ||
      buttonNode.current.contains(e.target)
    ) {
      return
    }
    setMenuState(false)
  }

  useEffect(() => {
    if (menuState) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuState])

  return (
    <>
      <Nav
        menuState={menuState}
        setMenuState={setMenuState}
        buttonNode={buttonNode}
      />
      <Aside menuState={menuState} node={node} />
    </>
  )
}

export default Header
