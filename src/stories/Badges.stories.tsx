import React from 'react'
import { Story, Meta } from '@storybook/react'
import { AlqoBadge, IconProps } from '..'

export default {
    title: 'Badges',
    args: { size: '24', badgeRadius: 100 },
} as Meta

export const Default: Story<IconProps> = (args) => <AlqoBadge {...args} />

export const Size: Story = ({}) => (
    <>
        <AlqoBadge size="24" badgeRadius={70} />
        <AlqoBadge size="48" badgeRadius={4} />
        <AlqoBadge size="64" badgeRadius={10} />
    </>
)
