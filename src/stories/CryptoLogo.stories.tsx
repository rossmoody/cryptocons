import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CryptoLogo } from '..'

export default {
    title: 'Crypto Logo Component',
    component: CryptoLogo,
} as ComponentMeta<typeof CryptoLogo>

export const CryptoLogoComponent: ComponentStory<typeof CryptoLogo> = (
    args
) => <CryptoLogo {...args} />

CryptoLogoComponent.args = {
    icon: 'Binance',
    size: 48,
}
