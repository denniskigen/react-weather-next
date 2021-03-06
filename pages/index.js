import { Box } from 'rebass'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const Page = () => (
  <Box as="main" sx={{ bg: 'snow' }}>
    <NavBar />
    <Footer />
  </Box>
)

export default Page
