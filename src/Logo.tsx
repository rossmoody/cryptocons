import React, { forwardRef } from 'react'
import * as icons from './components'
import { IconProps } from './Icon'
import { LogoNames } from './types'

export interface LogoIconProps extends IconProps {
    icon: LogoNames
}

export const Logo = forwardRef<SVGSVGElement, LogoIconProps>((props, ref) => {
    const { icon = 'BinanceBadge', ...rest } = props

    const Icon = icons[icon]

    return <Icon {...rest} ref={ref} />
})
