import React from 'react'
import SEO from './Seo'
import Header from './header'

export const Layout: React.FC = ({ children }) => (
    <React.Fragment>
        <SEO />
        <Header />
        {children}
    </React.Fragment>
)
