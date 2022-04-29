import React from 'react'
import { createIcon } from '../createIcon'

export const TetherBadge = createIcon({
    path: (
        <>
            <path
                d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z"
                fill="#50AF95"
            ></path>
            <path
                d="M12.0589 5.07496C13.9152 5.07496 15.6973 5.07496 17.5536 5.07496C17.7021 5.07496 17.7764 5.15017 17.7764 5.22537C18.8159 7.55675 19.8554 9.81292 20.9692 12.0691C21.0435 12.1443 20.9692 12.2195 20.895 12.2947C19.6327 13.5732 18.3704 14.8517 17.0338 16.1302C15.4003 17.7095 13.6924 19.364 12.0589 20.9434C11.9104 21.0186 11.9104 21.0186 11.8361 20.9434C10.2025 19.364 8.56898 17.7847 6.93541 16.1302C5.67311 14.8517 4.33656 13.5732 3.07425 12.2947C3 12.2195 3 12.1443 3 12.0691C3.51977 10.8658 4.1138 9.73771 4.63357 8.53442C5.15334 7.40634 5.67311 6.35346 6.19288 5.22537C6.26713 5.07496 6.34139 4.99976 6.56415 4.99976C8.42047 5.07496 10.2025 4.99976 12.0589 5.07496ZM12.1331 7.10551C10.7966 7.10551 9.38576 7.10551 8.04921 7.10551C7.97496 7.10551 7.97496 7.10551 7.9007 7.10551C7.82645 7.10551 7.82645 7.10551 7.82645 7.18072C7.82645 7.85757 7.82645 8.53442 7.7522 9.28648C7.7522 9.36168 7.7522 9.36168 7.82645 9.36168C8.04921 9.36168 8.27197 9.36168 8.49473 9.36168C9.23726 9.36168 9.97979 9.36168 10.7223 9.36168C10.7966 9.36168 10.7966 9.36168 10.8708 9.36168C10.9451 9.36168 10.9451 9.43689 10.9451 9.51209C10.9451 9.81292 10.9451 10.1889 10.9451 10.4898C10.9451 10.565 10.9451 10.565 10.8708 10.6402C10.3511 10.7154 9.83128 10.7154 9.31151 10.7906C8.64323 10.8658 7.97496 11.0162 7.38093 11.2418C7.08392 11.317 6.86116 11.4674 6.6384 11.6179C6.41564 11.8435 6.41564 12.1443 6.6384 12.2947C6.78691 12.4451 6.93541 12.5203 7.08392 12.5955C7.60369 12.8211 8.12346 12.8963 8.64323 13.0468C9.38577 13.1972 10.1283 13.2724 10.8708 13.3476C11.0193 13.3476 11.0193 13.3476 11.0193 13.498C11.0193 14.8517 11.0193 16.2806 11.0193 17.6343C11.0193 17.7847 11.0193 17.7847 11.1678 17.7847C11.8361 17.7847 12.5786 17.7847 13.2469 17.7847C13.4697 17.7847 13.4697 17.7847 13.4697 17.5591C13.4697 16.431 13.4697 15.3781 13.4697 14.25C13.4697 13.9492 13.4697 13.6484 13.4697 13.3476C13.4697 13.1972 13.5439 13.1972 13.6182 13.1972C14.3607 13.1972 15.029 13.122 15.7715 12.9716C16.3656 12.8963 16.8853 12.7459 17.4051 12.5203C17.5536 12.4451 17.7021 12.2947 17.8506 12.2195C17.9991 12.0691 17.9991 11.9187 17.8506 11.7683C17.7021 11.6931 17.6279 11.5426 17.4793 11.4674C16.5883 10.941 15.5488 10.7154 14.5092 10.6402C14.2122 10.6402 13.9152 10.6402 13.6182 10.565C13.5439 10.565 13.5439 10.565 13.5439 10.4146C13.5439 10.1137 13.5439 9.73771 13.5439 9.43689C13.5439 9.36168 13.5439 9.28648 13.6924 9.28648C13.9152 9.28648 14.138 9.28648 14.3607 9.28648C15.1033 9.28648 15.7715 9.28648 16.5141 9.28648C16.6626 9.28648 16.6626 9.21127 16.6626 9.13607C16.6626 9.06086 16.6626 9.06086 16.6626 8.98565C16.6626 8.38401 16.6626 7.78236 16.6626 7.10551C16.6626 6.9551 16.6626 6.9551 16.5141 6.9551C14.8805 7.10551 13.4697 7.10551 12.1331 7.10551Z"
                fill="white"
            ></path>
            <path
                d="M11.7616 12.8211C11.2418 12.8211 10.7963 12.8211 10.2765 12.7459C9.45973 12.6707 8.56869 12.5955 7.75191 12.2947C7.6034 12.2195 7.45489 12.1443 7.23213 12.0691C7.00937 11.9186 7.00937 11.7682 7.23213 11.693C7.52915 11.5426 7.82616 11.4674 8.12317 11.3922C8.7172 11.2418 9.31122 11.1666 9.9795 11.0914C10.2023 11.0914 10.4993 11.0162 10.722 11.0162C10.7963 11.0162 10.8705 11.0162 10.8705 11.1666C10.8705 11.6178 10.8705 11.9938 10.8705 12.4451C10.8705 12.5955 10.9448 12.5955 11.019 12.5955C11.6131 12.5955 12.2071 12.5955 12.7269 12.5955C12.8754 12.5955 13.0239 12.5955 13.1724 12.5955C13.3209 12.5955 13.3209 12.5955 13.3209 12.4451C13.3209 12.0691 13.3209 11.693 13.3209 11.317C13.3209 11.0914 13.3209 11.0914 13.5436 11.0914C14.5089 11.1666 15.4742 11.2418 16.4395 11.5426C16.588 11.6178 16.8108 11.693 16.9593 11.7682C17.1078 11.8434 17.1078 11.9938 16.9593 12.0691C16.6623 12.2947 16.3653 12.3699 15.994 12.4451C15.2515 12.5955 14.5089 12.7459 13.7664 12.7459C13.1724 12.7459 12.4299 12.8211 11.7616 12.8211Z"
                fill="white"
            ></path>
        </>
    ),
})
