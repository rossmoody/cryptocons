import type { ScaleValue } from '@stitches/react'

type Space = ScaleValue<'space'>

export const utils = {
  h: (value: Space) => ({
    height: value,
  }),
  w: (value: Space) => ({
    width: value,
  }),
  size: (value: Space) => ({
    width: value,
    height: value,
  }),
  p: (value: Space) => ({
    padding: value,
  }),
  pb: (value: Space) => ({
    paddingBottom: value,
  }),
  pt: (value: Space) => ({
    paddingTop: value,
  }),
  pl: (value: Space) => ({
    paddingLeft: value,
  }),
  pr: (value: Space) => ({
    paddingRight: value,
  }),
  px: (value: Space) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Space) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  m: (value: Space) => ({
    margin: value,
  }),
  mb: (value: Space) => ({
    marginBottom: value,
  }),
  mt: (value: Space) => ({
    marginTop: value,
  }),
  ml: (value: Space) => ({
    marginLeft: value,
  }),
  mr: (value: Space) => ({
    marginRight: value,
  }),
  mx: (value: Space) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Space) => ({
    marginTop: value,
    marginBottom: value,
  }),
}
