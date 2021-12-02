/**
 * Creates an Icon component definition as a template literal based on icon name
 */
export function componentize(
    svgFragment: string,
    iconName: string,
    rectFill?: string
) {
    const rectEleString = `<rect height="24" width="24" fill="${rectFill}" />`
    const rectProperty = rectFill ? `rectElement: (${rectEleString}),` : ''

    return `
      import React from 'react'
      import { createIcon } from '../createIcon'

      export const ${iconName} = createIcon({
        ${rectProperty}
        path: (${svgFragment})
      })
`
}
