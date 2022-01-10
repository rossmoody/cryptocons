import { styled } from '@styles'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

export const Divider = styled(SeparatorPrimitive.Root, {
  border: 'none',
  margin: 0,
  flexShrink: 0,
  backgroundColor: '$gray8',
  cursor: 'default',

  '&[data-orientation="horizontal"]': {
    height: '1px',
  },

  '&[data-orientation="vertical"]': {
    width: '1px',
  },
})
