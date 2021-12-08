import React from 'react'
import SEO from './Seo'

export const Layout: React.FC = ({ children }) => (
    <React.Fragment>
        <SEO />
        {children}
    </React.Fragment>
)
