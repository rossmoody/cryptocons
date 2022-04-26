import Header from '@components/header'
import { ReactNode } from 'react'

type Children = {
    children: ReactNode
}

export const Layout = ({ children }: Children) => (
    <div className="h-screen w-screen overflow-hidden">
        <Header />
        {children}
    </div>
)
