import React, { forwardRef } from 'react'
import * as icons from './components'
import { IconProps } from './Icon'
import { BadgeNames } from './types'

export interface BadgeProps extends IconProps {
    icon: BadgeNames
}

export const Badge = forwardRef<SVGSVGElement, BadgeProps>((props, ref) => {
    const { icon, ...rest } = props
    const Icon = icons[icon]

    return <Icon {...rest} ref={ref} />
})
