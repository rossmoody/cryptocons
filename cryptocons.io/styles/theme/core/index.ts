import borders from './borders'
import breakpoints from './breakpoints'
import colors from './colors'
import radii from './radius'
import shadows from './shadows'
import sizes from './sizes'
import space from './space'
import typography from './typography'
import zIndices from './zIndices'

const core = {
  ...borders,
  breakpoints,
  colors,
  sizes,
  space,
  radii,
  shadows,
  ...typography,
  zIndices,
}

export default core
