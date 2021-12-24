import { Box } from '@components'
import { Header } from './Header'

export const Layout: React.FC = ({ children }) => (
  <Box>
    <Header />
    <Box as="main">{children}</Box>
  </Box>
)
