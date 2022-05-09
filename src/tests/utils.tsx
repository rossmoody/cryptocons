import React from 'react'
import { Cryptocon } from 'src/Cryptocon'
import { CryptoconBadge } from 'src/CryptoconBadge'
import { CryptoconLogo } from 'src/CryptoconLogo'
import { IconProps } from 'src/Icon'
import { BadgeNames, CryptoconNames, LogoNames } from 'src/types'
import * as cryptocons from '../components'

export const iconNames = Object.keys(cryptocons) as CryptoconNames[]

export const logoNames = iconNames.filter(
    (name) => !name.includes('Badge')
) as LogoNames[]

export const badgeNames = iconNames.filter((name) =>
    name.includes('Badge')
) as BadgeNames[]

const testProps = <Type,>(iconName: Type) => ({
    key: iconName,
    icon: iconName,
    ['data-test-name']: iconName,
    ['data-testid']: 'cryptocon',
})

export const CryptoconLibrary = (props: IconProps) => (
    <>
        {iconNames.map((iconName) => (
            <Cryptocon {...testProps(iconName)} {...props} />
        ))}
    </>
)

export const CryptoconBadgeLibrary = (props: IconProps) => (
    <>
        {badgeNames.map((iconName) => (
            <CryptoconBadge {...testProps(iconName)} {...props} />
        ))}
    </>
)

export const CryptoconLogoLibrary = (props: IconProps) => (
    <>
        {logoNames.map((iconName) => (
            <CryptoconLogo {...testProps(iconName)} {...props} />
        ))}
    </>
)
