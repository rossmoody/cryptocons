import { Box } from '@components/Box'
import { Header } from './Header'

export const Layout: React.FC = ({ children }) => (
  <Box>
    <Header />
    <Box as="main">{children}</Box>
  </Box>
)
