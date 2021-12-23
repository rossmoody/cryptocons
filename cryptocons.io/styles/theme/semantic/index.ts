import { createStitches } from '@stitches/react'
import { utils } from '../../stitches/utils'
import { media } from '../../stitches/media'
import { darkMode, lightMode } from './modes'

export const {
  styled,
  css,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  theme: darkTheme,
  reset,
  config,
} = createStitches({
  theme: darkMode,
  utils,
  media,
})

export const lightTheme = createTheme(lightMode)
