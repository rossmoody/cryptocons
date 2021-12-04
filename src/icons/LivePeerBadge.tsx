import React from 'react'
import { createIcon } from '../createIcon'

export const LivePeerBadge = createIcon({
    rectElement: <rect height="24" width="24" fill="black" />,
    path: (
        <>
            <g clipPath="url(#LivePeerBadge_a)">
                <path
                    d="M17.0721 10.6647V13.1353H19.5427V10.6647H17.0721Z"
                    fill="white"
                ></path>
                <path
                    d="M11.7191 7.78235V10.2529H14.1897V7.78235H11.7191Z"
                    fill="white"
                ></path>
                <path
                    d="M11.7191 13.547V16.0176H14.1897V13.547H11.7191Z"
                    fill="white"
                ></path>
                <path
                    d="M6.36614 16.4294V18.9H8.83673V16.4294H6.36614Z"
                    fill="white"
                ></path>
                <path
                    d="M6.36614 10.6647V13.1353H8.83673V10.6647H6.36614Z"
                    fill="white"
                ></path>
                <path
                    d="M6.36614 4.89999V7.37058H8.83673V4.89999H6.36614Z"
                    fill="white"
                ></path>
            </g>
            <defs>
                <clipPath id="LivePeerBadge_a">
                    <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(5.89981 4.89999)"
                    ></rect>
                </clipPath>
            </defs>
        </>
    ),
})
