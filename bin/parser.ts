import { parse as svgParser } from 'svg-parser'

/**
 * Creates tree data from SVG string
 * @param svgString SVG string
 * @returns JSON tree object of SVG element
 */
export function parse(svgString: string) {
    const parsed = svgParser(svgString)
    return parsed.children[0]
}
