import React, { forwardRef } from 'react'
import { IconProps } from './Icon'
import { LogoNames } from './types'
import * as icons from './components'

export interface CryptoconLogoProps extends Omit<IconProps, 'badgeRadius'> {
    icon: LogoNames
}

/**
 * A utility component for rendering logo cryptocons with intellisense through the icon property.
 */
export const CryptoconLogo = forwardRef<SVGSVGElement, CryptoconLogoProps>(
    (props, ref) => {
        const { icon = 'BinanceBadge', ...rest } = props

        const Icon = icons[icon]

        return <Icon {...rest} ref={ref} />
    }
)
