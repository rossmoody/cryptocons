export function componentize(paths: string, iconName: string) {
    const isBadge = iconName.includes('Badge')

    if (isBadge) {
        return `
        import React from 'react'
        import { createIcon } from '../createIcon'

        export const ${iconName} = createIcon({
          shapeId: '${iconName}',
          path: (${paths})
        })
      `
    }

    return `
        import React from 'react'
        import { createIcon } from '../createIcon'

        export const ${iconName} = createIcon({
          path: (${paths})
        })
      `
}
