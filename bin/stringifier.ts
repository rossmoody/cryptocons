import { isString } from 'lodash'
import { ElementNode } from 'svg-parser'

/**
 * Creates SVG property strings with = instead of :
 */
export function stringifyProperties(
    properties: Record<string, string | number>
) {
    const propertyNames = Object.keys(properties)

    return propertyNames.reduce((accumulator, propertyName) => {
        const property = properties[propertyName]
        return accumulator + ` ${propertyName}="${property}"`
    }, String())
}

/**
 * Stringify the svg children elements into a ReactFragment
 */
export function stringify(node: ElementNode): string {
    if (isString(node)) return node

    const isSvgRoot = node.tagName === 'svg'

    const tagName = isSvgRoot ? '' : node.tagName
    const properties = isSvgRoot ? '' : stringifyProperties(node.properties!)
    const buffer = `<${tagName}${properties}>`

    const childrensBuffer = node.children.reduce(
        (accumulator: string, childrenNode: any) => {
            return accumulator + stringify(childrenNode)
        },
        buffer
    )

    return childrensBuffer + `</${tagName}>`
}
