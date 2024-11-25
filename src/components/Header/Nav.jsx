import { Menu, Terminal, X } from 'lucide-react'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaBluesky } from 'react-icons/fa6'
import { TbSocial } from 'react-icons/tb'

import DarkMode from './DarkMode'

const Nav = ({ menuState, setMenuState, buttonNode }) => {
  return (
    <nav className="navbar fixed z-20 bg-base-300">
      <div className="flex-none">
        <button
          ref={buttonNode}
          className="btn btn-square btn-ghost transition-transform duration-100 hover:scale-110 hover:bg-transparent xl:hidden"
          onClick={() => setMenuState(!menuState)}
          aria-label={menuState ? 'Close menu' : 'Open menu'} // Add descriptive label
        >
          {menuState ? <X /> : <Menu />}
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">
          <Terminal /> <h1>TerminalTales</h1>
        </a>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                <TbSocial size={20} /> Follow
              </summary>
              <ul className="rounded-t-none bg-base-100 p-2">
                <li>
                  <a target="_blank" href="https://instagram.com/hsinghhira">
                    <AiOutlineInstagram size={20} /> Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/HSinghHira">
                    <AiOutlineGithub size={20} />
                    Github
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://hsinghhira.bsky.social/">
                    <FaBluesky size={20} /> Bluesky
                  </a>
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
