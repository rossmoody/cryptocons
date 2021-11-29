import { optimize } from 'svgo'

/**
 * Cleans SVG string using SVGO with unique IDs
 * @param svgString Original SVG string
 * @param fileName The filename used to generate unique IDs in paths
 * @returns Optimized SVG string
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
