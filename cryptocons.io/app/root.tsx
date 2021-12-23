import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    HeadersFunction,
    LoaderFunction,
    useLoaderData,
} from 'remix'
import { getColorScheme } from './cookies'
import cssReset from './styles/reset.css'

export let links = () => [{ rel: 'stylesheet', href: cssReset }]

export { meta } from './components/Seo'

export const headers: HeadersFunction = () => ({
    'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
})

export const loader: LoaderFunction = async ({ request }) => ({
    colorScheme: await getColorScheme(request),
})

export default function App() {
    const { colorScheme } = useLoaderData()

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <Meta />
                <Links />
            </head>
            <body className={colorScheme}>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    )
}
