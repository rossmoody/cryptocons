import { isString } from 'lodash'
import { ElementNode } from 'svg-parser'

/**
 * Creates SVG property strings with = instead of :
 * @param properties Node properties
 * @returns Property name and value correctly formatted as a string
 */
function stringifyProperties(properties = {} as any) {
    const propertyNames = Object.keys(properties)

    return propertyNames.reduce((accumulator, propertyName) => {
        const property = properties[propertyName]
        return accumulator + ` ${propertyName}="${property}"`
    }, String())
}

/**
 * Stringify the SVG tree into a ReactFragment
 * @param node Root node.
 * @returns A string with children properties correctly structured
 */
export function stringify(node: ElementNode): string {
    if (isString(node)) {
        return node
    }

    const isSvgRoot = node.tagName === 'svg'
    const tagName = isSvgRoot ? '' : node.tagName
    const properties = isSvgRoot ? '' : stringifyProperties(node.properties)
    const buffer = `<${tagName}${properties}>`

    const childrensBuffer = node.children.reduce(
        (accumulator: string, childrenNode: any) => {
            return accumulator + stringify(childrenNode)
        },
        buffer
    )

    return childrensBuffer + `</${tagName}>`
}
