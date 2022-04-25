import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { Cryptocon } from '../src'

export default {
    title: 'Cryptocon Component',
    component: Cryptocon,
} as ComponentMeta<typeof Cryptocon>

export const CryptoconComponent: ComponentStory<typeof Cryptocon> = (args) => (
    <Cryptocon {...args} />
)

CryptoconComponent.args = { icon: 'Binance', size: 48, badgeRadius: 12 }
