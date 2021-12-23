import type * as Stitches from '@stitches/react'
import globalStyles from './globalStyles'
import styledKeyframes from './stitches/keyframes'
import {
  lightTheme,
  darkTheme,
  getCssText,
  styled,
  css,
  globalCss,
  reset,
  config,
  keyframes,
} from './theme/semantic'

export type { VariantProps } from '@stitches/react'
export type CSS = Stitches.CSS<typeof config>

export {
  keyframes,
  getCssText,
  lightTheme,
  darkTheme,
  styled,
  css,
  globalCss,
  globalStyles,
  reset,
  styledKeyframes,
}
