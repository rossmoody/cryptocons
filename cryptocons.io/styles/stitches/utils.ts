import type * as Stitches from '@stitches/react'

type ScaleValue = Stitches.ScaleValue<'space'>

export const utils = {
  h: (value: ScaleValue) => ({
    height: value,
  }),
  w: (value: ScaleValue) => ({
    width: value,
  }),
  p: (value: ScaleValue) => ({
    padding: value,
  }),
  pb: (value: ScaleValue) => ({
    paddingBottom: value,
  }),
  pt: (value: ScaleValue) => ({
    paddingTop: value,
  }),
  pl: (value: ScaleValue) => ({
    paddingLeft: value,
  }),
  pr: (value: ScaleValue) => ({
    paddingRight: value,
  }),
  px: (value: ScaleValue) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: ScaleValue) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  m: (value: ScaleValue) => ({
    margin: value,
  }),
  mb: (value: ScaleValue) => ({
    marginBottom: value,
  }),
  mt: (value: ScaleValue) => ({
    marginTop: value,
  }),
  ml: (value: ScaleValue) => ({
    marginLeft: value,
  }),
  mr: (value: ScaleValue) => ({
    marginRight: value,
  }),
  mx: (value: ScaleValue) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: ScaleValue) => ({
    marginTop: value,
    marginBottom: value,
  }),
}
