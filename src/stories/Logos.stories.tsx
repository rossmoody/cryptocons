import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Alqo, IconProps } from '..'

export default {
    title: 'Logos',
    args: { size: '24' },
} as Meta

export const Default: Story<IconProps> = (args) => <Alqo {...args} />

export const Size: Story = ({}) => (
    <>
        <Alqo size="24" />
        <Alqo size="48" />
        <Alqo size="64" />
    </>
)
