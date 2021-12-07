import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as icons from '../components'

import { IconProps } from '..'

export default {
    title: 'Libraries',
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
