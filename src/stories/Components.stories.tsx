import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Cryptocon, CryptoconBadge, CryptoconLogo } from '..'

export default {
    title: 'Components',
} as ComponentMeta<typeof CryptoconLogo>

export const Badge: ComponentStory<typeof CryptoconBadge> = (args) => (
    <CryptoconBadge {...args} />
)

export const Logo: ComponentStory<typeof CryptoconLogo> = (args) => (
    <CryptoconLogo {...args} />
)

export const Cryptocons: ComponentStory<typeof Cryptocon> = (args) => (
    <Cryptocon {...args} />
)

Badge.args = { icon: 'BinanceBadge', size: 48, badgeRadius: 12 }
Logo.args = { icon: 'Binance', size: 48 }
Cryptocons.args = { icon: 'Binance', size: 48, badgeRadius: 12 }
