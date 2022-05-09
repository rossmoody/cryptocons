import { ElementNode } from 'svg-parser'

/**
 * Process badge icon background shape fill and omit it from node
 */
export function badger(node: ElementNode, fileName: string) {
    let rectFill = ''
    const nodeClone = { ...node }
    const svgChildren = node.children as ElementNode[]

    const children = svgChildren.reduce(
        (accumulator: ElementNode[], child: ElementNode, index: number) => {
            const childClone = { ...child }

            const isValidBackgroundShapeElement =
                fileName.includes('Badge') &&
                index === 0 &&
                childClone.tagName === 'rect' &&
                childClone.properties?.fill

            if (isValidBackgroundShapeElement) {
                rectFill = String(childClone.properties!.fill)
                return [...accumulator] // Intentionally return without child
            }

            return [...accumulator, childClone]
        },
        []
    )

    return {
        rectFill,
        element: {
            ...nodeClone,
            children,
        },
    }
}
