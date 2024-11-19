import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Check and apply theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  // Toggle theme and save preference to localStorage
  const handleThemeChange = () => {
    const newTheme = isDarkMode ? 'light' : 'dark'
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <label className="btn btn-ghost swap swap-rotate transition-transform duration-100 hover:scale-110 hover:bg-transparent">
      {/* Hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        checked={isDarkMode}
        onChange={handleThemeChange}
        aria-label="Toggle dark mode" // Add descriptive label
      />

      {/* Sun icon */}
      <Sun className="swap-off" />

      {/* Moon icon */}
      <Moon className="swap-on" />
    </label>
  )
}

export default DarkModeButton
