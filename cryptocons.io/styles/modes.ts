import core from './theme'

export const lightMode = {
  ...core,
  colors: {
    ...core.colors.gray,
    ...core.colors.blue,
    ...core.colors.red,
    ...core.colors.green,
    ...core.colors.purple,
  },
}

export const darkMode = {
  colors: {
    ...core.colors.grayDark,
    ...core.colors.blueDark,
    ...core.colors.redDark,
    ...core.colors.greenDark,
    ...core.colors.purpleDark,
  },
}
