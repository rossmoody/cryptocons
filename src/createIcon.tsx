import React from 'react'
import { Icon, IconProps } from './Icon'

interface CreateIconOptions {
    /**
     * The `svg` path or group element.
     */
    path?: React.ReactElement | React.ReactElement[]
    /**
     * Sets background shape and radius of badge icon
     */
    badgeShape?: string
}

export function createIcon(options: CreateIconOptions) {
    const { path, badgeShape } = options

    return React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
        <Icon {...props} ref={ref}>
            {badgeShape}
            {path}
        </Icon>
    ))
}
