import { isString } from 'lodash'
import { ElementNode } from 'svg-parser'

/**
 * Creates SVG fragment with = instead of : on properties
 * @param attributes Node attributes.
 * @returns React fragment with SVG path children
 */
function stringifyProperties(properties = {} as any) {
    const propertyNames = Object.keys(properties)

    return propertyNames.reduce((accumulator, propertyName) => {
        const property = properties[propertyName]
        return accumulator + ` ${propertyName}="${property}"`
    }, String())
}

/**
 * Stringify SVG tree.
 * @param node Root node.
 * @returns
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
