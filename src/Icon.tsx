import React from 'react'

export interface IconProps extends React.SVGAttributes<SVGElement> {
    /**
     * Sets the width and height of the SVG element.
     */
    size?: string | number
    /**
     * Sets the radius of the badge background shape
     */
    badgeRadius?: number
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { size, children, height, width, badgeRadius, ...rest } = props

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={size ?? height}
            width={size ?? width}
            aria-hidden={true}
            focusable={false}
            fill="currentColor"
            ref={ref}
            {...rest}
        >
            {badgeRadius && (
                <rect
                    width="24"
                    height="24"
                    rx={badgeRadius}
                    fill="url(#paint0_linear_127_57)"
                />
            )}
            {children}
        </svg>
    )
})
