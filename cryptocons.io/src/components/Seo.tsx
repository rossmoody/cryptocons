import * as React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../hooks/use-site-metadata'

type Props = {
    title?: string
    description?: string
    pathname?: string
    image?: string
    children?: React.ReactNode
}

const SEO = ({ title, description, pathname, image, children }: Props) => {
    const site = useSiteMetadata()

    const {
        siteTitle,
        siteTitleAlt,
        siteUrl,
        siteDescription,
        siteLanguage,
        siteImage,
        author,
    } = site

    const seo = {
        title: title || siteTitleAlt,
        description: description || siteDescription,
        url: `${siteUrl}${pathname || ``}`,
        image: `${siteUrl}${image || siteImage}`,
    }
    return (
        <Helmet
            title={title}
            defaultTitle={`${siteTitleAlt} - ${siteDescription}`}
            titleTemplate={`%s | ${siteTitle}`}
        >
            <html lang={siteLanguage} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta property="og:image:alt" content={seo.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:image:alt" content={seo.description} />
            <meta name="twitter:creator" content={author} />
            {children}
        </Helmet>
    )
}

export default SEO
