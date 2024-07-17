import React from 'react'
import { createIcon } from '../createIcon'

export const MintBadge = createIcon({
    rectFill: '#30BF54',
    path: (
        <>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M5 5a7 7 0 0 1 7 7 7 7 0 0 1-7-7Zm14 14a7 7 0 0 1-7-7 7 7 0 0 1 7 7Zm-7-7a3.5 3.5 0 0 1 3.5-3.5A3.5 3.5 0 0 1 12 12Zm0 0a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 12 12Z"
                clipRule="evenodd"
            ></path>
        </>
    ),
})
