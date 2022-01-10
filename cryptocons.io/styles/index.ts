import { createStitches, CSS as StitcheCSS } from '@stitches/react'
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
  config,
} = createStitches({
  theme: lightMode,
  utils,
})

export const darkTheme = createTheme(darkMode)

export type CSS = StitcheCSS<typeof config>
