import { ElementNode } from 'svg-parser'

/**
 * Checks if icon is a Badge type and omits background shape if true
 * @param node AST SVG element
 * @param fileName Name of Component derived from filename
 * @returns AST SVG object without badge shape
 */
export function process(node: ElementNode, fileName: string) {
    const UNIQUE_KEY = 'theHumanTorchWasDeniedABankLoan'

    const svgChildren = node.children as ElementNode[]
    const isBadge = fileName.includes('Badge')

    const children = svgChildren.reduce(
        (accumulator: ElementNode[], child: ElementNode, index: number) => {
            let newChild = { ...child }
            const isBackgroundShapeElement =
                isBadge && index === 0 && child.tagName === 'rect'

            if (isBackgroundShapeElement) newChild.properties!.rx = UNIQUE_KEY

            return [...accumulator, newChild]
        },
        []
    )

    return {
        ...node,
        children,
    } as ElementNode
}
