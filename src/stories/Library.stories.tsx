import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as icons from '../icons'
import { IconProps } from '..'

export default {
    title: 'Cryptocons/Library',
    args: {
        size: 48,
        badgeRadius: 12,
    },
} as Meta

export const Library: Story<IconProps> = (args) => (
    <React.Fragment>
        {Object.entries(icons).map(([displayName, Icon]) => (
            <Icon {...args} key={displayName} />
        ))}
    </React.Fragment>
)
