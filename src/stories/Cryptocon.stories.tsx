import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Cryptocon } from '..'

export default {
    title: 'Cryptocon Component',
    component: Cryptocon,
} as ComponentMeta<typeof Cryptocon>

export const CryptoconComponent: ComponentStory<typeof Cryptocon> = (args) => (
    <Cryptocon {...args} />
)

CryptoconComponent.args = { icon: 'Binance', size: 48, badgeRadius: 12 }
