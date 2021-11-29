import { isString, camelCase } from 'lodash'

export function transform(node: any) {
    if (isString(node)) {
        return node
    }

    const propertyNames = Object.keys(node.properties)

    const properties = propertyNames.reduce((accumulator, propertyName) => {
        const attribute = node.properties[propertyName]

        return {
            ...accumulator,
            [camelCase(propertyName)]: attribute,
        }
    }, {})

    const children = node.children.map(transform)

    return {
        ...node,
        children,
        properties,
    }
}
