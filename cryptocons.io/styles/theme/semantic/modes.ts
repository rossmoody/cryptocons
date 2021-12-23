import core from '../core'

const { colors } = core

export const darkMode = {
  ...core,
  colors: {
    ...colors,
    //
    _backgroundBody: colors.red30,
    _textDefault: colors.grey80,
    _textProminent: colors.grey90,
    _textMuted: colors.grey50,
    _borderDefault: colors.grey40,
    _borderMuted: colors.grey20,
    _borderProminent: colors.grey70,
    //
    sheetBgColorDefault: colors.grey05,
    //
    headerContextBgColorDefault: colors.grey05,
    mainActionBarBgColorDefault: colors.grey10,
    mainActionPanelBgColorDefault: colors.grey00,
    mainNavPanelBgColorDefault: colors.grey00,
    //
    anchorColorDefault: colors.blue50,
    anchorColorHover: colors.blue60,
    //
    btnPrimaryBgColor: colors.blue50,
    btnPrimaryBgColorHover: colors.blue60,
    btnPrimaryBgColorActive: colors.blue40,
    btnBasicBgColor: 'transparent',
    btnBasicBgColorHover: colors.grey20,
    btnBasicBgColorActive: colors.grey30,
    //
    popoverHighlightBgColor: colors.grey00,
    //
    dropdownItemBgColorFocus: colors.grey10,
    //
    scrollBgDefault: colors.grey00,
    scrollBgHover: colors.grey05,
    scrollTHumbBgDefault: colors.grey20,
  },
}

export const lightMode = {
  colors: {
    _backgroundBody: colors.grey95,
    _textDefault: colors.grey20,
    _textProminent: colors.grey05,
    _textMuted: colors.grey30,
    _borderDefault: colors.grey70,
    _borderMuted: colors.grey80,
    _borderProminent: colors.grey05,
    //
    sheetBgColorDefault: colors.grey95,
    //
    headerContextBgColorDefault: colors.grey90,
    mainActionBarBgColorDefault: colors.grey70,
    mainActionPanelBgColorDefault: colors.grey80,
    mainNavPanelBgColorDefault: colors.grey90,
    //
    anchorColorDefault: colors.blue40,
    anchorColorHover: colors.blue30,
    btnPrimaryBgColor: colors.blue50,
    btnPrimaryBgColorHover: colors.blue60,
    btnPrimaryBgColorActive: colors.blue40,
    btnBasicBgColor: 'transparent',
    btnBasicBgColorHover: colors.grey80,
    btnBasicBgColorActive: colors.grey70,
    //
    popoverHighlightBgColor: colors.grey90,
    //
    dropdownItemBgColorFocus: colors.grey80,
    //
    scrollBgDefault: colors.grey80,
    scrollBgHover: colors.grey70,
    scrollTHumbBgDefault: colors.grey60,
  },
}
