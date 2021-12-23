import React, { forwardRef } from 'react'
import { IconProps } from './Icon'
import { BadgeNames } from './types'
import * as icons from './components'

export interface CryptoconBadgeProps extends IconProps {
    icon: BadgeNames
}

export const CryptoconBadge = forwardRef<SVGSVGElement, CryptoconBadgeProps>(
    (props, ref) => {
        const { icon, ...rest } = props
        const Icon = icons[icon]

        return <Icon {...rest} ref={ref} />
    }
)
