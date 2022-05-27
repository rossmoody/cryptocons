import React from 'react'
import { createIcon } from '../createIcon'

export const Theta = createIcon({
    path: (
        <>
            <path d="M2 2H22V22H2V2Z" fill="#1B1F2B"></path>
            <path
                d="M8.70013 6.30029H15.3001V17.7003H8.70013V6.30029Z"
                fill="#1B1F2B"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.07147 6.30019L8.70016 5.67151H15.3002L15.9288 6.30019V17.7002L15.3002 18.3289H8.70016L8.07147 17.7002V6.30019ZM9.32884 6.92888V17.0715H14.6715V6.92888H9.32884Z"
                fill="url(#Theta_a)"
            ></path>
            <path
                d="M14.0001 13.8001H12.6334V15.2319H11.4001V13.8001H10.0334V12.5668H14.0001V13.8001ZM14.0001 10.2666H12.6334V8.83472H11.4001V10.2666H10.0334V11.4998H14.0001V10.2666Z"
                fill="url(#Theta_b)"
            ></path>
            <defs>
                <linearGradient
                    id="Theta_a"
                    x1="7.18561"
                    y1="7.18564"
                    x2="16.8142"
                    y2="16.8143"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2AB8E6"></stop>
                    <stop offset="0.53" stopColor="#29CAD2"></stop>
                    <stop offset="1" stopColor="#2EE4BE"></stop>
                </linearGradient>
                <linearGradient
                    id="Theta_b"
                    x1="706.393"
                    y1="1134.17"
                    x2="1179.88"
                    y2="1427.77"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2AB8E6"></stop>
                    <stop offset="0.53" stopColor="#29CAD2"></stop>
                    <stop offset="1" stopColor="#2EE4BE"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
