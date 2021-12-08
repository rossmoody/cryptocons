import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CryptoBadge } from '..'

export default {
    title: 'Crypto Badge Component',
    component: CryptoBadge,
} as ComponentMeta<typeof CryptoBadge>

export const CryptoBadgeComponent: ComponentStory<typeof CryptoBadge> = (
    args
) => <CryptoBadge {...args} />

CryptoBadgeComponent.args = { icon: 'BinanceBadge', size: 48, badgeRadius: 12 }
