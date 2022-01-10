import { styled, CSS } from '@styles'

const baseStyle: CSS = {
  lineHeight: 1,
  borderRadius: '$base',
  fontWeight: '$medium',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  color: 'inherit',
  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  '&:hover': {
    cursor: 'pointer',
    '&:disabled': {
      bg: 'initial',
    },
  },
}

const sizes: Record<string, CSS> = {
  lg: {
    h: '$12',
    minW: '$12',
    fontSize: '$lg',
    px: '$6',
  },
  md: {
    h: '$10',
    minW: '$10',
    fontSize: '$md',
    px: '$4',
  },
  sm: {
    h: '$8',
    minW: '$8',
    fontSize: '$sm',
    px: '$3',
  },
  xs: {
    h: '$6',
    minW: '$6',
    fontSize: '$xs',
    px: '$2',
  },
}

const ghost: CSS = {
  backgroundColor: 'transparent',
  '&:hover': {
    bc: '$gray5',
  },
}

export const Button = styled('button', {
  ...baseStyle,
  variants: {
    sizes,
    types: { ghost },
  },
  defaultVariants: {
    sizes: 'sm',
    types: 'ghost',
  },
})
