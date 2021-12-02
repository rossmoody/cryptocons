import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as icons from '../icons'
import { IconProps } from '..'

export default {
    title: 'Library',
    args: {
        size: 48,
        badgeRadius: 8,
    },
} as Meta

export const Library: Story<IconProps> = (args) => {
    return (
        <>
            {Object.entries(icons).map(([displayName, Icon]) => (
                <Icon {...args} key={displayName} />
            ))}
        </>
    )
}
