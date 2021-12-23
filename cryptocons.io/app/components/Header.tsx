import { Form } from 'remix'
import { Flex } from './Flex'
import { Button } from './Button'
import { CryptoconLogo } from '../../../src'

export const Header = () => {
    return (
        <Flex
            as="header"
            align="center"
            css={{ h: '$14', borderBottom: '1px solid #DBE0EA' }}
        >
            <CryptoconLogo />
            <Form method="post">
                <Button type="submit">Change Theme</Button>
            </Form>
        </Flex>
    )
}
