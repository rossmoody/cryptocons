import { Button } from '~/components/Button'
import { ActionFunction, Form, redirect } from 'remix'
import { colorSchemeCookie, getColorScheme } from '../cookies'

export const action: ActionFunction = async ({ request }) => {
    const currentColorScheme = await getColorScheme(request)
    const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light'

    return redirect(request.url, {
        headers: {
            'Set-Cookie': await colorSchemeCookie.serialize(newColorScheme),
        },
    })
}

export default function Index() {
    return (
        <Form method="post">
            <Button type="submit">Change Theme</Button>
        </Form>
    )
}
