import React from 'react'
import { createIcon } from '../createIcon'

export const UnstoppableDomainsBadge = createIcon({
    rectElement: <rect height="24" width="24" fill="white" />,
    path: (
        <>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5001 4.96249V10.4625L3.50012 16.9625L19.5001 4.96249Z"
                fill="#2FE9FF"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5001 4.71249V14.2125C16.5001 16.9739 14.2615 19.2125 11.5001 19.2125C8.7387 19.2125 6.50012 16.9739 6.50012 14.2125V10.2125L9.50012 8.56249V14.2125C9.50012 15.179 10.2836 15.9625 11.2501 15.9625C12.2166 15.9625 13.0001 15.179 13.0001 14.2125V6.63749L16.5001 4.71249Z"
                fill="#4C47F7"
            ></path>
        </>
    ),
})
