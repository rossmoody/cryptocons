import React from 'react'
import { createIcon } from '../createIcon'

export const CryptoconLogoBadge = createIcon({
    rectFill: 'url(#CryptoconLogoBadge_a)',
    path: (
        <>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4287 9.57136C13.0873 8.23005 10.9127 8.23005 9.57134 9.57136C8.23003 10.9127 8.23003 13.0874 9.57134 14.4287C10.9127 15.77 13.0873 15.77 14.4287 14.4287C15.2965 13.5608 16.7035 13.5608 17.5714 14.4287C18.4392 15.2965 18.4392 16.7035 17.5714 17.5714C14.4944 20.6484 9.50562 20.6484 6.42864 17.5714C3.35166 14.4944 3.35166 9.50564 6.42864 6.42866C9.50562 3.35168 14.4944 3.35168 17.5714 6.42866C18.4392 7.29649 18.4392 8.70353 17.5714 9.57136C16.7035 10.4392 15.2965 10.4392 14.4287 9.57136Z"
                fill="white"
            ></path>
            <defs>
                <linearGradient
                    id="CryptoconLogoBadge_a"
                    x1="3.53056e-7"
                    y1="1"
                    x2="22.7256"
                    y2="24.268"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BD01FF"></stop>
                    <stop offset="1" stopColor="#0157FF"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
