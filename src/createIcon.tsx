import React from 'react'
import { Icon, IconProps } from './Icon'

interface CreateIconOptions {
    /**
     * The icon's viewBox property.
     * Defaults to '0 0 24 24'.
     */
    viewBox?: string
    /**
     * The `svg` path or group element.
     */
    path?: React.ReactElement | React.ReactElement[]
    /**
     * If the icon has one path and no path attributes,
     * assign the `d` value to this property.
     */
    dPath?: string
}

export function createIcon(options: CreateIconOptions) {
    const { viewBox = '0 0 24 24', dPath = '', path } = options

    return React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
        <Icon viewBox={viewBox} {...props} ref={ref}>
            {path ?? <path d={dPath} />}
        </Icon>
    ))
}
