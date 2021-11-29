import { ElementNode } from 'svg-parser'

/**
 * Checks if icon is a Badge type and omits background shape if true
 * @param node AST SVG element
 * @param fileName Name of Component derived from filename
 * @returns AST SVG object without badge shape
 */
export function process(node: ElementNode, fileName: string) {
    const svgChildren = node.children as ElementNode[]
    const isBadgeIcon = fileName.includes('Badge')

    const children = svgChildren.reduce(
        (accumulator: ElementNode[], child: ElementNode, index: number) => {
            const isBadgeRectChild =
                isBadgeIcon && index === 0 && child.tagName === 'rect'

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
    } as ElementNode
}
