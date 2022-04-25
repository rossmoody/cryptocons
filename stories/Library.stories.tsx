import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Icon, IconProps } from '../src'
import * as icons from '../src/components'

export default {
    title: 'Libraries',
    component: Icon,
    args: {
        size: 60,
        badgeRadius: 8,
    },
} as Meta

const Template: Story<IconProps> = (args, { parameters }) => (
    <React.Fragment>
        {Object.entries(icons)
            .filter(([displayName]) => {
                switch (parameters.fileName) {
                    case 'badge':
                        return displayName.includes('Badge')

                    case 'logo':
                        return !displayName.includes('Badge')

                    default:
                        return displayName
                }
            })
            .map(([displayName, Icon]) => {
                return <Icon {...args} key={displayName} />
            })}
    </React.Fragment>
)

export const All = Template.bind({})

export const Logos = Template.bind({})

Logos.parameters = {
    fileName: 'logo',
}

export const Badges = Template.bind({})

Badges.parameters = {
    fileName: 'badge',
}
