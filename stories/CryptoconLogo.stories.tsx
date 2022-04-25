import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { CryptoconLogo } from '../src'

export default {
    title: 'CryptoLogo Component',
    component: CryptoconLogo,
} as ComponentMeta<typeof CryptoconLogo>

export const CryptoconLogoComponent: ComponentStory<typeof CryptoconLogo> = (
    args
) => <CryptoconLogo {...args} />

CryptoconLogoComponent.args = {
    icon: 'Binance',
    size: 48,
}
