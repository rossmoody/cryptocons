import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Badge } from '..'

export default {
    title: 'Badge Component',
    component: Badge,
} as ComponentMeta<typeof Badge>

export const BadgeComponent: ComponentStory<typeof Badge> = (args) => (
    <Badge {...args} />
)

BadgeComponent.args = { icon: 'BinanceBadge', size: 48, badgeRadius: 12 }
