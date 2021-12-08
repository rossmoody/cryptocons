import React, { forwardRef } from 'react'
import * as icons from './components'
import { IconProps } from './Icon'
import { BadgeNames } from './types'

export interface CryptoBadgeProps extends IconProps {
    icon: BadgeNames
}

export const CryptoBadge = forwardRef<SVGSVGElement, CryptoBadgeProps>(
    (props, ref) => {
        const { icon, ...rest } = props
        const Icon = icons[icon]

        return <Icon {...rest} ref={ref} />
    }
)
