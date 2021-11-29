import React from 'react'

export interface IconProps extends React.SVGAttributes<SVGElement> {
    /**
     * Sets the width and height of the SVG element.
     */
    size?: string | number
    /**
     * Sets the radius of the background shape in Badge icons
     * Defaults to 100: a circle
     */
    badgeRadius?: number
    /**
     * The filename ID used to generate unique background shape ID
     */
    shapeId?: string
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const {
        size,
        children,
        height,
        width,
        shapeId,
        badgeRadius = 100,
        ...rest
    } = props

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={size ?? height}
            width={size ?? width}
            aria-hidden={true}
            focusable={false}
            ref={ref}
            {...rest}
        >
            {shapeId && (
                <rect
                    width="24"
                    height="24"
                    rx={badgeRadius}
                    fill={`url(#${shapeId}_a)`}
                />
            )}
            {children}
        </svg>
    )
})
