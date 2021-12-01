import React from 'react'
import { Icon, IconProps } from './Icon'

interface CreateIconOptions {
    /**
     * The `svg` path or group element.
     */
    path?: React.ReactElement | React.ReactElement[]
}

export function createIcon(options: CreateIconOptions) {
    const { path } = options

    return React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
        <Icon {...props} ref={ref}>
            {path}
        </Icon>
    ))
}
