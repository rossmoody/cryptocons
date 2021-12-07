import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logo } from '..'

export default {
    title: 'Logo Component',
    component: Logo,
} as ComponentMeta<typeof Logo>

export const LogoComponent: ComponentStory<typeof Logo> = (args) => (
    <Logo {...args} />
)

LogoComponent.args = {
    icon: 'Binance',
    size: 48,
}
