import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as icons from '../components'
import { Binance, BinanceBadge } from '..'
import { Badge } from '../Badge'
import { Logo } from '../Logo'
import { IconProps } from '..'

export default {
    title: 'Cryptocons',
    args: {
        size: 48,
        badgeRadius: 12,
    },
} as Meta

export const OneExample: Story<IconProps> = ({}) => {
    return (
        <>
            <Binance />
            <BinanceBadge />
        </>
    )
}

export const NoArgs: Story<IconProps> = ({}) => (
    <React.Fragment>
        {Object.entries(icons).map(([displayName, Icon]) => {
            return <Icon key={displayName} />
        })}
    </React.Fragment>
)

export const BadgeIconExample: Story<IconProps> = (args) => (
    <Badge icon="BinanceBadge" {...args} />
)

export const LogoExample: Story<IconProps> = (args) => (
    <Logo icon="Binance" {...args} />
)

export const AllIcons: Story<IconProps> = (args) => (
    <React.Fragment>
        {Object.entries(icons).map(([displayName, Icon]) => {
            return <Icon {...args} key={displayName} />
        })}
    </React.Fragment>
)

export const Logos: Story<IconProps> = (args) => (
    <React.Fragment>
        {Object.entries(icons)
            .filter(([displayName]) => !displayName.includes('Badge'))
            .map(([displayName, Icon]) => (
                <Icon {...args} key={displayName} />
            ))}
    </React.Fragment>
)

export const Badges: Story<IconProps> = (args) => (
    <React.Fragment>
        {Object.entries(icons)
            .filter(([displayName]) => displayName.includes('Badge'))
            .map(([displayName, Icon]) => (
                <Icon {...args} key={displayName} />
            ))}
    </React.Fragment>
)
