import { keyframes } from '../theme/semantic'

const styledKeyframes = {
  slideUpAndFade: keyframes({
    '0%': { opacity: 0, transform: 'translateY(12px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  }),
  slideRightAndFade: keyframes({
    '0%': { opacity: 0, transform: 'translateX(-12px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  }),
  slideDownAndFade: keyframes({
    '0%': { opacity: 0, transform: 'translateY(-12px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  }),
  slideLeftAndFade: keyframes({
    '0%': { opacity: 0, transform: 'translateX(12px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  }),
  fadeIn: keyframes({
    from: { opacity: '0' },
    to: { opacity: '1' },
  }),
  fadeOut: keyframes({
    from: { opacity: '1' },
    to: { opacity: '0' },
  }),
}

export default styledKeyframes
