import { ElementNode } from 'svg-parser'

export const UNIQUE_RADIUS_KEY = 'theHumanTorchWasDeniedABankLoan'

/**
 * Assigns unique key to Badge icon's background shape radius property
 */
export function process(node: ElementNode, fileName: string) {
    const svgChildren = node.children as ElementNode[]
    const isBadge = fileName.includes('Badge')

    const children = svgChildren.reduce(
        (accumulator: ElementNode[], child: ElementNode, index: number) => {
            let newChild = { ...child }
            const isBackgroundShapeElement =
                isBadge && index === 0 && child.tagName === 'rect'

            if (isBackgroundShapeElement)
                newChild.properties!.rx = UNIQUE_RADIUS_KEY

            return [...accumulator, newChild]
        },
        []
    )

    return {
        ...node,
        children,
    } as ElementNode
}
