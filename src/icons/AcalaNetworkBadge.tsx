import React from 'react'
import { createIcon } from '../createIcon'

export const AcalaNetworkBadge = createIcon({
    rectElement: (
        <rect height="24" width="24" fill="url(#AcalaNetworkBadge_a)" />
    ),
    path: (
        <>
            <path
                d="M12.0134 14.7369C11.3923 14.7369 10.7893 14.789 10.2054 14.8879L11.1042 13.3303C12.1153 13.2627 13.1308 13.3095 14.1314 13.4698L10.6407 7.42441L4.83039 17.4889L4 16.0508L10.6278 4.56965L10.6417 4.59354L10.6546 4.57061L18.6536 18.4254H16.9919L15.1237 15.1874C14.1147 14.8856 13.0666 14.7338 12.0134 14.7369ZM19.1706 17.5133L11.4257 4.09999H13.0865L20 16.0747L19.1706 17.5133Z"
                fill="white"
            ></path>
            <path
                d="M11.4839 10.7173L8.3043 16.2252C9.4419 15.8816 10.7811 15.7283 12.0453 15.7283C12.8655 15.7292 13.6838 15.805 14.4902 15.9547L15.5508 17.7923C14.4279 17.3796 13.2412 17.1673 12.0449 17.165C10.2044 17.165 8.51405 17.6203 7.04248 18.412L7.06541 18.3709L7.03388 18.4258H5.37215L10.6531 9.27916L11.4839 10.7173Z"
                fill="white"
            ></path>
            <defs>
                <linearGradient
                    id="AcalaNetworkBadge_a"
                    x1="21.4074"
                    y1="12.001"
                    x2="6.81626"
                    y2="12.001"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF9373"></stop>
                    <stop offset="1" stopColor="#E41A72"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
