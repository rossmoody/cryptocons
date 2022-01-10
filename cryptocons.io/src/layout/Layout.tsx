import { Header } from '@components/header'

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)
