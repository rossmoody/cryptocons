import Head from 'next/head'
import { useRouter } from 'next/router'

const seo = {
  title: 'Cryptocons.io',
  description: 'Cryptocurrency logos and icons as tidy React components.',
  baseUrl: 'https://cryptocons.io',
  imagePath: '/images/og-image.png',
  author: '@_rossmoody',
  website: 'website',
}

export const Meta = () => {
  const { asPath: url } = useRouter()

  // TODO: Unique Title Strings
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:image" content={`${seo.baseUrl}${seo.imagePath}`} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`${seo.baseUrl}${url}`} />
      <meta name="twitter:creator" content={seo.author} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content={seo.website} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={`${seo.baseUrl}${seo.imagePath}`} />
      <meta property="og:image:alt" content={seo.description} />
      <meta property="og:url" content={`${seo.baseUrl}${url}`} />
      <meta property="og:site_name" content={seo.title} />
    </Head>
  )
}
