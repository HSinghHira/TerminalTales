import { Menu, Terminal, X } from 'lucide-react'

import DarkMode from './DarkMode'

const Nav = ({ menuState, setMenuState, buttonNode }) => {
  return (
    <nav className="navbar fixed z-20 bg-base-300">
      <div className="flex-none">
        <button
          ref={buttonNode}
          className="btn btn-square btn-ghost transition-transform duration-100 hover:scale-110 hover:bg-transparent xl:hidden"
          onClick={() => setMenuState(!menuState)}
        >
          {menuState ? <X /> : <Menu />}
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          <Terminal /> TerminalTales
        </a>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Socials</summary>
              <ul className="rounded-t-none bg-base-100 p-2">
                <li>
                  <a href="https://instagram.com/hsinghhira">Instagram</a>
                </li>
                <li>
                  <a href="https://github.com/HSinghHira">Github</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <DarkMode />
      </div>
    </nav>
  )
}

export default Nav
