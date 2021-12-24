import { createStitches } from '@stitches/react'
import { utils } from './utils'
import { darkMode, lightMode } from './modes'

export const {
  styled,
  theme: lightTheme,
  css,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  reset,
} = createStitches({
  theme: lightMode,
  utils,
})

export const darkTheme = createTheme(darkMode)
