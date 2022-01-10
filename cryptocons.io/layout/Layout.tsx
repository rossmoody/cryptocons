import { Header } from './Header'

export const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
)
