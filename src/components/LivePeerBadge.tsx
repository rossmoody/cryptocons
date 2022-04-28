import React from 'react'
import { createIcon } from '../createIcon'

export const LivePeerBadge = createIcon({
    path: (
        <>
            <path
                d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z"
                fill="black"
            ></path>
            <g clipPath="url(#LivePeerBadge_a)">
                <path
                    d="M17.072 10.6647V13.1352H19.5426V10.6647H17.072Z"
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
                    d="M6.36609 16.4294V18.9001H8.83668V16.4294H6.36609Z"
                    fill="white"
                ></path>
                <path
                    d="M6.36609 10.6647V13.1352H8.83668V10.6647H6.36609Z"
                    fill="white"
                ></path>
                <path
                    d="M6.36609 4.90002V7.37061H8.83668V4.90002H6.36609Z"
                    fill="white"
                ></path>
            </g>
            <defs>
                <clipPath id="LivePeerBadge_a">
                    <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(5.89978 4.90002)"
                    ></rect>
                </clipPath>
            </defs>
        </>
    ),
})
