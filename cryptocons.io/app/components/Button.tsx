import { styled, darkTheme } from './Theme'

export const Button = styled('button', {
    backgroundColor: '$text',
    color: '$bgBody',
    [`${darkTheme}`]: {},
})
