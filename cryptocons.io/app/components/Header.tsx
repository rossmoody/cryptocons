import { Form } from 'remix'
import { Flex } from './Flex'
import { Button } from './Button'

export const Header = () => {
    return (
        <Flex
            as="header"
            align="center"
            css={{ h: '$14', borderBottom: '1px solid #DBE0EA' }}
        >
            <Form method="post">
                <Button type="submit">Change Theme</Button>
            </Form>
        </Flex>
    )
}
