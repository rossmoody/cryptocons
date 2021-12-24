import { globalCss } from '.'

export default globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
    margin: '0',
  },
  "ul[role='list'], ol[role='list']": {
    listStyle: 'none',
  },
  'html:focus-within': {
    scrollBehavior: 'smooth',
  },
  body: {
    minHeight: '100vh',
    textRendering: 'optimizeSpeed',
    lineHeight: '1.5',
    backgroundColor: '$gray1',
  },
  'a:not([class])': {
    textDecorationSkipInk: 'auto',
  },
  'img, picture': {
    maxWidth: '100%',
    display: 'block',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  '@media (prefers-reduced-motion: reduce)': {
    'html:focus-within': {
      scrollBehavior: 'auto',
    },
    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },
  'a, button': {
    '&:focus': {
      outline: 'none',
      boxShadow: '$outline',
    },
  },
})
