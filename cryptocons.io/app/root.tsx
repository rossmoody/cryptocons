import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'

const seo = {
    title: 'Cryptocons.io',
    description: 'Cryptocurrency logos and icons as tidy React components.',
    url: 'https://cryptocons.io',
    image: '/images/og-image.png',
    author: '@_rossmoody',
    website: 'website',
}

export const meta: MetaFunction = () => ({
    viewport: 'width=device-width,initial-scale=1',
    title: seo.title,
    description: seo.description,
    image: `${seo.url}${seo.image}`,
    ['og:title']: seo.title,
    ['og:url']: seo.url,
    ['og:description']: seo.description,
    ['og:image']: `${seo.url}${seo.image}`,
    ['og:type']: seo.website,
    ['og:image:alt']: seo.description,
    ['twitter:card']: 'summary_large_image',
    ['twitter:title']: seo.title,
    ['twitter:url']: seo.url,
    ['twitter:description']: seo.description,
    ['twitter:image']: `${seo.url}${seo.image}`,
    ['twitter:image:alt']: seo.description,
    ['twitter:creator']: seo.author,
})

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    )
}
