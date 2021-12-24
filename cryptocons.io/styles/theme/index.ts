import breakpoints from './breakpoints'
import * as colors from './colors'
import radii from './radius'
import shadows from './shadows'
import space from './space'
import typography from './typography'
import zIndices from './zIndices'

const core = {
  breakpoints,
  colors,
  sizes: space,
  space,
  radii,
  shadows,
  ...typography,
  zIndices,
}

export default core
