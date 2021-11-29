import { isString, camelCase } from 'lodash'

/**
 * Formats all SVG property keys to camelCase instead of kebab-case
 * @param node AST Element Node
 * @returns Element Node
 */
export function transform(node: any) {
    if (isString(node)) return node

    const propertyNames = Object.keys(node.properties)

    const properties = propertyNames.reduce((accumulator, propertyName) => {
        const property = node.properties[propertyName]

        return {
            ...accumulator,
            [camelCase(propertyName)]: property,
        }
    }, {})

    const children = node.children.map((child: any) => transform(child))

    return {
        ...node,
        children,
        properties,
    }
}
