import React from 'react'
import { Icon, IconProps } from './Icon'

interface CreateIconOptions {
    /**
     * The `svg` path or group element.
     */
    path?: React.ReactElement | React.ReactElement[]
    /**
     * The component filename for creating Badge icon shapes
     */
    shapeId?: string
}

export function createIcon(options: CreateIconOptions) {
    const { path, shapeId } = options

    return React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
        <Icon {...props} shapeId={shapeId} ref={ref}>
            {path}
        </Icon>
    ))
}
