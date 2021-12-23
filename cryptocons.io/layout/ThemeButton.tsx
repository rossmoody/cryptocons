import { useState, useEffect } from 'react'
import { Button } from '../components/Button'
import { useTheme } from 'next-themes'

export const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const handleClick = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return <Button onClick={handleClick}>Change Theme</Button>
}
