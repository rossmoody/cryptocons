module.exports = {
    siteMetadata: {
        siteTitle: 'cryptocons.io',
        siteTitleAlt: 'cryptocons.io',
        siteHeadline: 'Cryptocurrency icons as tidy React components.',
        siteUrl: 'https://cryptocons.io',
        siteDescription: 'Cryptocurrency icons as tidy React components.',
        siteLanguage: 'en',
        siteImage: '/og-image.png',
        author: '@_rossmoody',
    },
    plugins: [
        '@chakra-ui/gatsby-plugin',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'G-3YHNQ0RCFM',
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
}
