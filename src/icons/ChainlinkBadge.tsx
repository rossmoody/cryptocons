import React from 'react'
import { createIcon } from '../createIcon'

export const ChainlinkBadge = createIcon({
    path: (
        <>
            <rect width="24" height="24" rx={badgeRadius} fill="#375BD2"></rect>
            <path
                d="M12.1019 7.39005L16.2576 9.68677V14.2986L12.1134 16.6099L7.95769 14.3169V9.70511L12.1019 7.39005ZM12.1019 4L10.5769 4.85118L6.42504 7.16625L4.90002 8.01742V9.71245V14.3206V16.0156L6.42504 16.8594L10.5807 19.1562L12.1057 20L13.6307 19.1488L17.775 16.8338L19.3 15.9862V14.2912V9.67943V7.98441L17.775 7.14057L13.6193 4.84384L12.0943 4H12.1019Z"
                fill="white"
            ></path>
        </>
    ),
})
