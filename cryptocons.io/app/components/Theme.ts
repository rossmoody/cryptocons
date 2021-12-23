import * as Stitches from '@stitches/react'

export const { styled, createTheme, globalCss, getCssText, theme } =
    Stitches.createStitches({
        theme: {
            space: {
                0: '0',
                '0_5': '0.125rem',
                1: '0.25rem',
                '1_5': '0.375rem',
                2: '0.5rem',
                '2_5': '0.625rem',
                3: '0.75rem',
                '3_5': '0.875rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                9: '2.25rem',
                10: '2.5rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
                28: '7rem',
                32: '8rem',
                36: '9rem',
                40: '10rem',
                44: '11rem',
                48: '12rem',
                52: '13rem',
                56: '14rem',
                60: '15rem',
                64: '16rem',
                72: '18rem',
                80: '20rem',
                96: '24rem',
                112: '28rem',
                128: '32rem',
                144: '36rem',
                168: '42rem',
                192: '48rem',
                224: '56rem',
                256: '64rem',
                288: '72rem',
                320: '80rem',
                360: '90rem',
            },

            letterSpacings: {
                tighter: '-0.05em',
                tight: '-0.025em',
                normal: '0',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.1em',
            },

            lineHeights: {
                none: '1',
                shorter: '1.25',
                short: '1.375',
                base: '1.5',
                tall: '1.625',
                taller: '2',
            },

            fontWeights: {
                light: '300',
                normal: '400',
                semibold: '500',
                bold: '600',
                extrabold: '700',
                black: '800',
            },

            fonts: {},

            fontSizes: {
                xs: '0.75rem',
                sm: '0.875rem',
                md: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
                '7xl': '4.5rem',
                '8xl': '6rem',
                '9xl': '8rem',
            },

            radii: {
                1: '4px',
                2: '6px',
                3: '8px',
                4: '12px',
                round: '50%',
                pill: '9999px',
            },

            colors: {
                text: '#191919',
                bgBody: '#f8f9fa',
                anchor: 'DarkGoldenRod',
            },
        },

        utils: {
            h: (value: Stitches.ScaleValue<'space'>) => ({
                height: value,
            }),
            w: (value: Stitches.ScaleValue<'space'>) => ({
                width: value,
            }),
            p: (value: Stitches.PropertyValue<'padding'>) => ({
                padding: value,
            }),
            pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
                paddingTop: value,
            }),
            pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
                paddingRight: value,
            }),
            pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
                paddingBottom: value,
            }),
            pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
                paddingLeft: value,
            }),
            px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
                paddingLeft: value,
                paddingRight: value,
            }),
            py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
                paddingTop: value,
                paddingBottom: value,
            }),

            m: (value: Stitches.PropertyValue<'margin'>) => ({
                margin: value,
            }),
            mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
                marginTop: value,
            }),
            mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
                marginRight: value,
            }),
            mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
                marginBottom: value,
            }),
            ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
                marginLeft: value,
            }),
            mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
                marginLeft: value,
                marginRight: value,
            }),
            my: (value: Stitches.PropertyValue<'marginTop'>) => ({
                marginTop: value,
                marginBottom: value,
            }),

            ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
                textAlign: value,
            }),

            fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
                flexDirection: value,
            }),
            fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({
                flexWrap: value,
            }),

            ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
                alignItems: value,
            }),
            ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
                alignContent: value,
            }),
            jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
                justifyContent: value,
            }),
            as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
                alignSelf: value,
            }),
            fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({
                flexGrow: value,
            }),
            fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
                flexShrink: value,
            }),
            fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
                flexBasis: value,
            }),

            bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
                backgroundColor: value,
            }),

            br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
                borderRadius: value,
            }),
            btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
                borderTopRightRadius: value,
            }),
            bbrr: (
                value: Stitches.PropertyValue<'borderBottomRightRadius'>
            ) => ({
                borderBottomRightRadius: value,
            }),
            bblr: (
                value: Stitches.PropertyValue<'borderBottomLeftRadius'>
            ) => ({
                borderBottomLeftRadius: value,
            }),
            btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
                borderTopLeftRadius: value,
            }),

            bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
                boxShadow: value,
            }),

            lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
                lineHeight: value,
            }),

            size: (value: Stitches.PropertyValue<'width'>) => ({
                width: value,
                height: value,
            }),
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
