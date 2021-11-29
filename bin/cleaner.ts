import { optimize } from 'svgo'

/**
 * Cleans SVG string using SVGO
 * @param svgString Original SVG string
 * @returns Cleaned SVG string
 */
export function clean(svgString: string | Buffer, fileName: string) {
    const result = optimize(svgString, {
        multipass: true,
        plugins: [
            'removeDimensions',
            'convertStyleToAttrs',
            {
                name: 'cleanupIDs',
                params: {
                    prefix: `${fileName}_`,
                },
            },
        ],
    })

    return result.data
}
