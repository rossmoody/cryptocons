/**
 * Creates an icon component template literal based on icon name
 * @param svgFragment SVG as JSX fragment string
 * @param iconName The component name created from file name
 * @returns Template literal component definition
 */
export function componentize(svgFragment: string, iconName: string) {
    return `
        import React from 'react'
        import { createIcon } from '../createIcon'

        export const ${iconName} = createIcon({
          path: (${svgFragment})
        })
      `
}
