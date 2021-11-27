import React from 'react'

export interface IconProps extends React.SVGAttributes<SVGElement> {
    /**
     * Sets the width and height of the SVG element.
     */
    size?: string | number
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { size, children, height, width, ...rest } = props

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size ?? height}
            width={size ?? width}
            aria-hidden={true}
            focusable={false}
            fill="currentColor"
            ref={ref}
            {...rest}
        >
            {children}
        </svg>
    )
})
