import { isPlainObject, isString } from 'lodash'

/**
 * Stringify style.
 * @param style Node style.
 * @returns
 */
function stringifyStyle(style = {} as any) {
    const propertyNames = Object.keys(style)

    return propertyNames.reduce((accumulator: any, propertyName: any) => {
        const property = style[propertyName]
        const isStringPropriety = isString(property)

        if (isStringPropriety) {
            return accumulator + `${propertyName}: "${property}", `
        }

        return accumulator + `${propertyName}: ${property}, `
    }, String())
}

/**
 * Stringify attributes.
 * @param attributes Node attributes.
 * @returns
 */
function stringifyProperties(properties = {} as any) {
    const propertyNames = Object.keys(properties)

    return propertyNames.reduce((accumulator: any, propertyName: any) => {
        const property = properties[propertyName]
        const isStyleProperty = isPlainObject(property)

        if (isStyleProperty) {
            return (
                accumulator +
                ` ${propertyName}={{ ${stringifyStyle(property)} }}`
            )
        }

        return accumulator + ` ${propertyName}="${property}"`
    }, String())
}

/**
 * Stringify SVG tree.
 * @param node Root node.
 * @returns
 */
export function stringify(node: any) {
    if (isString(node)) {
        return node
    }

    const properties = stringifyProperties(node.properties)
    const buffer = `<${node.tagName}${properties}>`

    const childrensBuffer = node.children.reduce(
        (accumulator: any, childrenNode: any) => {
            return accumulator + stringify(childrenNode)
        },
        buffer
    )

    return childrensBuffer + `</${node.tagName}>`
}
