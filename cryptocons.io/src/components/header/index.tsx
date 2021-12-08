import React from 'react'
import { Link } from 'gatsby'
import { Box, Divider } from '@chakra-ui/react'
import { CryptoconLogo } from '../../../../src'

const Header = () => (
    <Box as="header">
        <Box py={2}>
            <Link to="/" aria-label="Navigate home">
                <CryptoconLogo size={40} />
            </Link>
        </Box>
        <Divider />
    </Box>
)

export default Header
