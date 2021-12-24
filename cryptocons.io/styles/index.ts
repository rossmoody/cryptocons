import { createStitches, CSS } from '@stitches/react'
import { darkMode, lightMode } from './modes'
import { utils } from './utils'

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
