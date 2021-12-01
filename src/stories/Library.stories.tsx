import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as icons from '../icons'

export default {
    title: 'Library',
} as Meta

export const Library: Story<any> = ({}) => {
    return (
        <>
            {Object.entries(icons).map(([, Icon]) => (
                <Icon size={48} badgeRadius={6} />
            ))}
        </>
    )
}
