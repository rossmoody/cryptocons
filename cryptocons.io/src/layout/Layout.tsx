import Header from '@components/header'

export const Layout: React.FC = ({ children }) => (
  <div className="h-screen w-screen overflow-hidden">
    <Header />
    {children}
  </div>
)
