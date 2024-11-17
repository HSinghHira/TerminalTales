import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center mt-4 rounded bg-base-200 p-10 text-base-content">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - MIT License</p>
        <p>
          Made with 🧡 by{' '}
          <a href="https://github.com/" target="_blank">
            Harman Singh Hira
          </a>{' '}
          in Aotearoa 🇳🇿
        </p>
      </aside>
    </footer>
  )
}

export default Footer
