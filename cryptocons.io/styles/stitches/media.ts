import { darkMode } from '../theme/semantic/modes'

export const media = {
  'media-sm': `(min-width: ${darkMode.breakpoints.sm})`,
  'media-md': `(min-width: ${darkMode.breakpoints.md})`,
  'media-lg': `(min-width: ${darkMode.breakpoints.lg})`,
  'media-xl': `(min-width: ${darkMode.breakpoints.xl})`,
  'media-2xl': `(min-width: ${darkMode.breakpoints['2xl']})`,
}
