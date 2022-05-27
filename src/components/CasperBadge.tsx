import React from 'react'
import { createIcon } from '../createIcon'

export const CasperBadge = createIcon({
    rectFill: '#FF0012',
    path: (
        <>
            <mask
                id="CasperBadge_a"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="4"
                y="3"
                width="15"
                height="18"
            >
                <path d="M4 3H19V20.7273H4V3Z" fill="white"></path>
            </mask>
            <g mask="url(#CasperBadge_a)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1338 16.7091C17.7178 16.7091 17.3706 17.0112 17.2871 17.4139L14.0165 17.2513C14.0261 17.1882 14.0326 17.124 14.0326 17.058C14.0326 16.9389 14.0153 16.824 13.9849 16.715L15.1724 16.0109C15.3312 16.2103 15.5723 16.3376 15.8423 16.3376C16.3207 16.3376 16.7084 15.9383 16.7084 15.4459C16.7084 14.9534 16.3207 14.5541 15.8423 14.5541C15.3639 14.5541 14.9761 14.9534 14.9761 15.4459C14.9761 15.5907 15.0104 15.727 15.07 15.848L13.9174 16.5313C13.7248 16.1099 13.3099 15.8175 12.8276 15.8175C12.162 15.8175 11.6225 16.3729 11.6225 17.058C11.6225 17.2046 11.6484 17.3445 11.6937 17.475L9.55867 18.0127C9.5426 17.7015 9.41628 17.4206 9.21778 17.2117L9.60283 16.6622C9.68954 16.6922 9.7821 16.7091 9.87864 16.7091C10.357 16.7091 10.7447 16.3099 10.7447 15.8175C10.7447 15.325 10.357 14.9257 9.87864 14.9257C9.40028 14.9257 9.01248 15.325 9.01248 15.8175C9.01248 16.1403 9.17966 16.4221 9.42924 16.5786L9.07489 17.0844C8.8742 16.9305 8.6263 16.8385 8.35685 16.8385C8.30328 16.8385 8.25096 16.8433 8.19926 16.8503L7.8304 14.6867C8.36955 14.5632 8.77298 14.0687 8.77298 13.4764C8.77298 12.7913 8.23346 12.2358 7.56792 12.2358C7.36661 12.2358 7.17726 12.2873 7.01045 12.3772L6.08157 10.514C6.27983 10.4108 6.44613 10.2531 6.56273 10.0598L7.33229 10.2692C7.32643 10.3112 7.32232 10.3538 7.32232 10.3975C7.32232 10.89 7.71012 11.2893 8.18848 11.2893C8.66685 11.2893 9.05465 10.89 9.05465 10.3975C9.05465 9.90506 8.66685 9.50582 8.18848 9.50582C7.81838 9.50582 7.50339 9.7452 7.37938 10.0815L6.65193 9.88358C6.71123 9.73686 6.7443 9.57603 6.7443 9.40719C6.7443 9.30549 6.73109 9.20719 6.70867 9.11254L8.8486 8.09955C9.0696 8.37978 9.40651 8.55927 9.78446 8.55927C10.45 8.55927 10.9895 8.00381 10.9895 7.31864C10.9895 7.07663 10.9212 6.85155 10.8048 6.66065L12.1763 5.2835C12.3394 5.39161 12.5291 5.4601 12.7334 5.47639V6.08346C12.2994 6.13181 11.9614 6.51002 11.9614 6.96967C11.9614 7.46215 12.3492 7.86139 12.8276 7.86139C13.3059 7.86139 13.6937 7.46215 13.6937 6.96967C13.6937 6.51002 13.3557 6.13181 12.9217 6.08346V5.47639C13.0978 5.46234 13.2634 5.41008 13.4102 5.3264L14.9117 7.0917C14.7579 7.30004 14.6655 7.55904 14.6655 7.84087C14.6655 8.52605 15.205 9.0815 15.8706 9.0815C16.5362 9.0815 17.0756 8.52605 17.0756 7.84087C17.0756 7.69351 17.0494 7.55276 17.0036 7.42169L17.4712 7.15063C17.6301 7.34493 17.8678 7.46863 18.1338 7.46863C18.6122 7.46863 19 7.06945 19 6.57697C19 6.08448 18.6122 5.68524 18.1338 5.68524C17.6555 5.68524 17.2677 6.08448 17.2677 6.57697C17.2677 6.72574 17.3036 6.86572 17.3662 6.98903L16.9268 7.24367C16.7218 6.86027 16.3258 6.60024 15.8706 6.60024C15.5472 6.60024 15.2541 6.73215 15.0377 6.94568L13.5682 5.2179C13.7134 5.10112 13.8314 4.95094 13.9123 4.77838L15.1992 4.99891C15.2858 5.39745 15.6307 5.69544 16.0439 5.69544C16.5222 5.69544 16.91 5.29619 16.91 4.80371C16.91 4.3113 16.5222 3.91205 16.0439 3.91205C15.5671 3.91205 15.1806 4.30867 15.1779 4.79884L13.9824 4.59389C14.0146 4.48187 14.0326 4.36349 14.0326 4.24069C14.0326 3.55552 13.4931 3 12.8276 3C12.162 3 11.6225 3.55552 11.6225 4.24069C11.6225 4.60819 11.7786 4.93729 12.0252 5.16448L10.6915 6.50361C10.49 6.26609 10.2026 6.10872 9.87864 6.08288V5.14928C10.3127 5.101 10.6506 4.72279 10.6506 4.26307C10.6506 3.77059 10.2628 3.37141 9.78446 3.37141C9.3061 3.37141 8.91836 3.77059 8.91836 4.26307C8.91836 4.72279 9.25633 5.101 9.69028 5.14928V6.08288C9.06891 6.13251 8.5794 6.66616 8.5794 7.31864C8.5794 7.5441 8.63876 7.75494 8.74091 7.93712L6.6505 8.92677C6.57444 8.74055 6.4556 8.57748 6.30655 8.45057L7.12506 6.93966C7.19532 6.95857 7.26869 6.96967 7.34468 6.96967C7.82305 6.96967 8.21085 6.57049 8.21085 6.07794C8.21085 5.58553 7.82305 5.18628 7.34468 5.18628C6.86632 5.18628 6.47852 5.58553 6.47852 6.07794C6.47852 6.42287 6.66906 6.72144 6.94729 6.86976L6.15102 8.33964C5.97151 8.23037 5.76284 8.16656 5.53923 8.16656C4.8737 8.16656 4.33417 8.72202 4.33417 9.40719C4.33417 10.0924 4.8737 10.6478 5.53923 10.6478C5.66755 10.6478 5.791 10.6267 5.90704 10.5884L6.85069 12.4812C6.61705 12.6599 6.44763 12.9226 6.38727 13.2269L5.70498 13.0192C5.72217 12.9491 5.73232 12.8762 5.73232 12.8006C5.73232 12.3081 5.34453 11.9088 4.86616 11.9088C4.38786 11.9088 4 12.3081 4 12.8006C4 13.293 4.38786 13.6922 4.86616 13.6922C5.20432 13.6922 5.49651 13.4922 5.63914 13.2013L6.36553 13.4224C6.36479 13.4404 6.36285 13.4582 6.36285 13.4764C6.36285 13.914 6.58347 14.2979 6.91584 14.5187L6.4495 15.1485C6.29696 15.0103 6.09733 14.9257 5.87814 14.9257C5.39977 14.9257 5.01204 15.325 5.01204 15.8175C5.01204 16.3099 5.39977 16.7091 5.87814 16.7091C6.3565 16.7091 6.7443 16.3099 6.7443 15.8175C6.7443 15.6217 6.68226 15.4412 6.57837 15.2941L7.08358 14.612C7.23188 14.6792 7.39551 14.7171 7.56792 14.7171C7.59352 14.7171 7.61856 14.7147 7.64379 14.7132L8.01489 16.8899C7.51603 17.0417 7.15184 17.5163 7.15184 18.079C7.15184 18.7642 7.69131 19.3197 8.35685 19.3197C8.74608 19.3197 9.09115 19.1289 9.31146 18.8342L11.056 19.6339C11.0415 19.6988 11.033 19.7661 11.033 19.8356C11.033 20.3281 11.4207 20.7273 11.8991 20.7273C12.3775 20.7273 12.7653 20.3281 12.7653 19.8356C12.7653 19.3431 12.3775 18.9439 11.8991 18.9439C11.5549 18.9439 11.2585 19.1511 11.1188 19.4505L9.4166 18.6701C9.48966 18.5317 9.53749 18.3771 9.55462 18.2132L11.7712 17.655C11.9762 18.0386 12.3723 18.2987 12.8276 18.2987C13.1093 18.2987 13.3679 18.1984 13.5731 18.0316L14.4027 18.7685C14.353 18.8809 14.3246 19.0054 14.3246 19.137C14.3246 19.6295 14.7124 20.0288 15.1908 20.0288C15.6691 20.0288 16.0569 19.6295 16.0569 19.137C16.0569 18.6446 15.6691 18.2453 15.1908 18.2453C14.9087 18.2453 14.6589 18.3847 14.5008 18.5996L13.7118 17.8988C13.8281 17.7693 13.9183 17.6148 13.9726 17.4432L17.268 17.6069C17.2712 18.0966 17.6575 18.4926 18.1338 18.4926C18.6122 18.4926 19 18.0933 19 17.6008C19 17.1084 18.6122 16.7091 18.1338 16.7091Z"
                    fill="white"
                ></path>
            </g>
        </>
    ),
})