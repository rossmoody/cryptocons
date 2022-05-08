import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Cryptocon, CryptoconBadge, CryptoconLogo } from '../src'

export default {
    title: 'Components',
} as ComponentMeta<typeof CryptoconLogo>

export const Badge: ComponentStory<typeof CryptoconBadge> = (args) => (
    <CryptoconBadge {...args} />
)

Badge.args = {
    icon: 'BinanceBadge',
    size: 48,
    badgeRadius: 12,
}

export const Logo: ComponentStory<typeof CryptoconLogo> = (args) => (
    <CryptoconLogo {...args} />
)

Logo.args = {
    icon: 'Binance',
    size: 48,
}

export const CryptoconComponent: ComponentStory<typeof Cryptocon> = (args) => (
    <Cryptocon {...args} />
)

CryptoconComponent.args = { icon: 'Binance', size: 48, badgeRadius: 12 }
