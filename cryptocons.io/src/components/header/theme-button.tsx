import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <button
      type="button"
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-7 h-7 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-md items-center flex justify-center"
    >
      {mounted && resolvedTheme === 'dark' ? (
        <LightThemeIcon />
      ) : (
        <DarkThemeIcon />
      )}
    </button>
  )
}

const LightThemeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)

const DarkThemeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

export default ThemeButton
