import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark')

  const handleClick = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme')
    if (saveTheme) {
      setTheme(saveTheme)
    } else {
      localStorage.setItem('theme', theme)
    }
  }, [])

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <button onClick={handleClick} className="relative">
      <SunIcon
        className={`h-5 w-5 transition-all ${theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
      ></SunIcon>
      <MoonIcon
        className={`absolute top-0 h-5 w-5 transition-all ${
          theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        }`}
      ></MoonIcon>
    </button>
  )
}

export default ThemeToggle
