export function componentize(paths: string, iconName: string) {
    const isBadge = iconName.includes('Badge')

    if (isBadge) {
        return `
        import React from 'react'
        import { createIcon } from '../createIcon'

        export const ${iconName} = createIcon({
          badgeShape: (<rect
            width="24"
            height="24"
            rx={badgeRadius}
            fill="url(#${iconName}_a)"
          />),
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
