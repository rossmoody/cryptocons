import React, { forwardRef } from 'react'
import * as icons from './components'
import { IconProps } from './Icon'
import { BadgeNames } from './types'

export interface BadgeIconProps extends IconProps {
    icon: BadgeNames
}

export const Badge = forwardRef<SVGSVGElement, BadgeIconProps>((props, ref) => {
    const { icon, ...rest } = props
    const Icon = icons[icon]

    return <Icon {...rest} ref={ref} />
})
