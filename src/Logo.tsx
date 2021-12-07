import React, { forwardRef } from 'react'
import * as icons from './components'
import { IconProps } from './Icon'
import { LogoNames } from './types'

export interface LogoProps extends Omit<IconProps, 'badgeRadius'> {
    icon: LogoNames
}

export const Logo = forwardRef<SVGSVGElement, LogoProps>((props, ref) => {
    const { icon = 'BinanceBadge', ...rest } = props

    const Icon = icons[icon]

    return <Icon {...rest} ref={ref} />
})
