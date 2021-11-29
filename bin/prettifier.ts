import { format } from 'prettier'

/**
 * Formats string with Prettier
 * @param string A JSX or SVG string
 * @returns A beautiful string without the semicolon
 */
export function pretty(string: string) {
    const formatted = format(string, { parser: 'babel' })
    return formatted.replace(/;/g, '')
}
