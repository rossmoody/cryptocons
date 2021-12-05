import React from 'react'
import { createIcon } from '../createIcon'

export const CryptoComBadge = createIcon({
    rectFill: 'white',
    path: (
        <>
            <path
                d="M11.9623 2.72098L3.92457 7.36049V16.6395L11.9623 21.279L20 16.6395V7.36049L11.9623 2.72098Z"
                fill="url(#CryptoComBadge_a)"
            ></path>
            <path
                d="M11.9623 2.72098L3.92457 7.36049V16.6395L11.9623 21.279V2.72098Z"
                fill="url(#CryptoComBadge_b)"
            ></path>
            <path
                d="M15.096 6.72968H8.78794L8.05539 9.94479H15.8693L15.096 6.72968ZM9.90711 14.3605V12.2239L8.03504 11.0436L5.91878 12.6105L8.80829 17.6366H9.96816L11.3315 16.3547V15.7239L9.90711 14.3605Z"
                fill="white"
            ></path>
            <path
                d="M13.9973 10.4331H9.92753L10.599 12.2238L10.3955 14.2383H13.5292L13.3258 12.2238L13.9973 10.4331Z"
                fill="white"
            ></path>
            <path
                d="M15.8693 11.0232L14.0176 12.2238V14.3604L12.6135 15.7238V16.3546L13.9769 17.6162H15.1164L17.9856 12.6104L15.8693 11.0232Z"
                fill="white"
            ></path>
            <defs>
                <linearGradient
                    id="CryptoComBadge_a"
                    x1="11.9552"
                    y1="2.72098"
                    x2="11.9552"
                    y2="21.2676"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#25376C"></stop>
                    <stop offset="1" stopColor="#1F1F49"></stop>
                </linearGradient>
                <linearGradient
                    id="CryptoComBadge_b"
                    x1="7.94038"
                    y1="21.2676"
                    x2="7.94038"
                    y2="2.72098"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#25376C"></stop>
                    <stop offset="1" stopColor="#1F1F49"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})