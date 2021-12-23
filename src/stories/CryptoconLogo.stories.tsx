import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CryptoconLogo } from '..'

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
