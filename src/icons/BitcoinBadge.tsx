import React from 'react'
import { createIcon } from '../createIcon'

export const BitcoinBadge = createIcon({
    rectElement: <rect height="24" width="24" fill="#F5B300" />,
    path: (
        <>
            <path
                d="M7.78381 5.51751C8.2245 5.6377 8.66518 5.71783 9.10587 5.83801C9.54656 5.9582 9.98725 6.03833 10.4279 6.15851C10.5481 6.19858 10.5882 6.15851 10.6283 6.03833C10.7885 5.35726 10.9488 4.71626 11.109 4.0352C11.1491 3.91501 11.1891 3.87495 11.3093 3.91501C11.7099 4.0352 12.0705 4.11532 12.4711 4.19545C12.5913 4.23551 12.5913 4.27557 12.5513 4.3557C12.391 4.9967 12.2308 5.67776 12.0705 6.31877C12.0705 6.35883 12.0705 6.39889 12.0304 6.47902C12.3509 6.55914 12.7115 6.63927 13.032 6.71939C13.0721 6.71939 13.1121 6.63927 13.1522 6.5992C13.2724 6.07839 13.3926 5.59764 13.5528 5.07682C13.5929 4.91657 13.6329 4.75632 13.673 4.59607C13.673 4.51595 13.7131 4.47589 13.7932 4.51595C14.1938 4.63614 14.5944 4.71626 15.0351 4.83645C15.0752 4.83645 15.0752 4.87651 15.1153 4.87651C14.9951 5.39733 14.8749 5.87808 14.7547 6.35883C14.7146 6.55914 14.6746 6.75945 14.5944 6.95977C14.5544 7.07995 14.5944 7.12002 14.7146 7.16008C15.1553 7.36039 15.596 7.56071 16.0367 7.76102C16.4373 8.00139 16.7979 8.3219 17.0783 8.72252C17.4389 9.32346 17.479 9.96446 17.3187 10.6055C17.1985 11.0462 17.0383 11.4468 16.7178 11.7673C16.4774 12.0077 16.1569 12.1679 15.8364 12.2881C15.7963 12.2881 15.7563 12.3282 15.6761 12.3282C15.8364 12.4483 15.9966 12.5285 16.1569 12.6487C16.6376 13.0092 16.9581 13.4499 17.1184 14.0108C17.1985 14.4515 17.1585 14.9322 17.0383 15.3729C16.878 15.9338 16.6777 16.4145 16.3171 16.8552C15.8765 17.376 15.3156 17.6565 14.6746 17.7366C13.8333 17.8568 13.032 17.7767 12.2308 17.6565C12.1106 17.6164 12.0304 17.6565 11.9904 17.7767C11.8301 18.4177 11.6699 19.0987 11.5096 19.7397C11.4696 19.9 11.4696 19.94 11.2693 19.8599C10.9087 19.7798 10.5081 19.6596 10.1475 19.5795C10.0273 19.5394 10.0273 19.4994 10.0674 19.4192C10.2276 18.7382 10.3879 18.0571 10.5882 17.4161C10.5882 17.336 10.6283 17.2959 10.5481 17.2559C10.2276 17.1757 9.90713 17.0956 9.54656 17.0155C9.46644 17.376 9.34625 17.7366 9.26612 18.0972C9.186 18.4577 9.06581 18.8183 8.98569 19.1789C8.94562 19.259 8.94562 19.299 8.82544 19.259C8.42481 19.1388 8.02418 19.0587 7.62356 18.9785C7.50337 18.9385 7.50337 18.8984 7.54343 18.8183C7.70368 18.1372 7.86393 17.4562 8.06425 16.8152C8.06425 16.7751 8.10431 16.735 8.10431 16.6549C7.18287 16.4145 6.26143 16.1742 5.29993 15.9338C5.38005 15.7735 5.42011 15.6534 5.50024 15.4931C5.66049 15.1325 5.82074 14.772 5.94093 14.4515C5.98099 14.3313 6.02105 14.3313 6.14124 14.3313C6.42168 14.4114 6.74218 14.4915 7.02262 14.5316C7.34312 14.6117 7.58349 14.4515 7.62356 14.171C8.14437 12.1278 8.66518 10.0846 9.14594 8.00139C9.22606 7.68089 9.02575 7.32033 8.66518 7.20014C8.30462 7.07995 7.94406 6.99983 7.62356 6.9197C7.54343 6.9197 7.50337 6.87964 7.54343 6.79952C7.66362 6.35883 7.78381 5.87808 7.904 5.43739C7.74374 5.55758 7.74375 5.55758 7.78381 5.51751ZM9.827 15.413C9.86706 15.413 9.90712 15.453 9.90712 15.453C10.5481 15.6133 11.2292 15.8136 11.9103 15.8537C12.391 15.8937 12.8317 15.8937 13.2724 15.7335C14.0336 15.4931 14.3541 14.4915 13.9134 13.8505C13.7131 13.53 13.3926 13.3297 13.0721 13.1294C12.3509 12.7288 11.5096 12.5685 10.7084 12.4083C10.5882 12.3682 10.5882 12.4083 10.5481 12.5285C10.468 12.9291 10.3478 13.2897 10.2677 13.6903C10.1074 14.2512 9.98725 14.812 9.827 15.413ZM13.1923 11.3266C13.2724 11.3266 13.4727 11.2865 13.6329 11.2465C14.3941 11.0862 14.7948 10.2048 14.3941 9.52377C14.1938 9.16321 13.8333 8.92283 13.4727 8.76258C12.9118 8.52221 12.3509 8.40202 11.75 8.24177C11.6298 8.20171 11.5898 8.24177 11.5497 8.36196C11.3494 9.20327 11.1491 10.0045 10.9087 10.8458C10.8686 10.926 10.9087 10.966 10.9888 11.0061C11.1491 11.0462 11.2693 11.0862 11.4295 11.1263C12.0304 11.2064 12.5513 11.3266 13.1923 11.3266Z"
                fill="white"
            ></path>
        </>
    ),
})
