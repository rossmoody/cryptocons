import { createStitches } from '@stitches/react'

export const { styled, createTheme, globalCss, getCssText, theme } =
    createStitches({
        theme: {
            colors: {
                text: '#191919',
                bgBody: '#f8f9fa',
                anchor: 'DarkGoldenRod',
            },
        },
    })

export const darkTheme = createTheme('dark', {
    colors: {
        text: '#f8f9fa',
        bgBody: '#191919',
        anchor: 'BlanchedAlmond',
    },
})

globalCss({
    body: {
        color: '$text',
        backgroundColor: '$bgBody',
    },

    a: {
        color: '$anchor',
    },
})()
