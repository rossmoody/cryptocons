import type { EntryContext } from 'remix'
import { renderToString } from 'react-dom/server'
import { RemixServer } from 'remix'
import { getCssText } from './components/theme'

export default function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext
) {
    const markup = renderToString(
        <RemixServer context={remixContext} url={request.url} />
    ).replace(/<\/head>/, `<style id="stitches">${getCssText()}</style></head>`)

    responseHeaders.set('Content-Type', 'text/html')

    return new Response('<!DOCTYPE html>' + markup, {
        status: responseStatusCode,
        headers: responseHeaders,
    })
}
