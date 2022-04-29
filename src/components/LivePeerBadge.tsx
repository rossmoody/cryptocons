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
                    d="M17.0721 10.6647V13.1353H19.5427V10.6647H17.0721Z"
                    fill="white"
                ></path>
                <path
                    d="M11.7191 7.78241V10.253H14.1897V7.78241H11.7191Z"
                    fill="white"
                ></path>
                <path
                    d="M11.7191 13.5471V16.0177H14.1897V13.5471H11.7191Z"
                    fill="white"
                ></path>
                <path
                    d="M6.36615 16.4294V18.9001H8.83674V16.4294H6.36615Z"
                    fill="white"
                ></path>
                <path
                    d="M6.36615 10.6647V13.1353H8.83674V10.6647H6.36615Z"
                    fill="white"
                ></path>
                <path
                    d="M6.36615 4.90002V7.37061H8.83674V4.90002H6.36615Z"
                    fill="white"
                ></path>
            </g>
            <defs>
                <clipPath id="LivePeerBadge_a">
                    <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(5.89981 4.90002)"
                    ></rect>
                </clipPath>
            </defs>
        </>
    ),
})
