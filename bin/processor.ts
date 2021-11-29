import { ElementNode } from 'svg-parser'

export function process(node: any, fileName: string) {
    const svgChildren = node.children
    const isBadgeIcon = fileName.includes('Badge')

    const children = svgChildren.reduce(
        (accumulator: any, child: any, index: number) => {
            const isBadgeRectChild =
                isBadgeIcon && index === 0 && child.tagName === 'rect'

            // Omit rect as it is manually created in the createIcon
            // component in order to receive radius property
            if (isBadgeRectChild) {
                return [...accumulator]
            }

            return [...accumulator, child]
        },
        []
    )

    return {
        ...node,
        children,
    }
}
