import { format, Options } from 'prettier'
import prettierrc from '../.prettierrc.json'

const prettierConfig = {
    ...prettierrc,
    parser: 'babel',
} as Options

/**
 * Formats string with Prettier
 * @param string A JSX or SVG string
 * @returns A beautiful string without the semicolon
 */
export function pretty(string: string) {
    const formatted = format(string, prettierConfig)
    return formatted.replace(/;/g, '')
}
