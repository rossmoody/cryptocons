import { ElementNode, parse as svgParser } from 'svg-parser'

/**
 * Creates AST object from SVG string
 * @param svgString SVG string
 * @returns AST Node of SVG element
 */
export function parse(svgString: string) {
    const parsed = svgParser(svgString)
    return parsed.children[0] as ElementNode
}
