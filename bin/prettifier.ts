import { format } from 'prettier'

/**
 * Returns a formatted SVG string without the semicolon
 * @param svgString The SVG string
 * @returns A beautiful SVG string
 */
export function pretty(svgString: string) {
    const formatted = format(svgString, { parser: 'babel' })
    return formatted.replace(/;/g, '')
}
