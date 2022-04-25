import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { CryptoconBadge } from '../src'

export default {
    title: 'CryptoconBadge Component',
    component: CryptoconBadge,
} as ComponentMeta<typeof CryptoconBadge>

/**
 * Utility component for rendering badge cryptocons with intellisense through the icon property.
 */
export const CryptoconBadgeComponent: ComponentStory<typeof CryptoconBadge> = (
    args
) => <CryptoconBadge {...args} />

CryptoconBadgeComponent.args = {
    icon: 'BinanceBadge',
    size: 48,
    badgeRadius: 12,
}
