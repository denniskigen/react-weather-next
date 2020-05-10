import { Box, Flex, Text, Link } from 'rebass'

const Page = () => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Text p={2} fontWeight="bold">
      React Weather
    </Text>
    <Box mx="auto" />
    <Link
      variant="nav"
      href="https://github.com/denniskigen/react-weather-next"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </Link>
  </Flex>
)

export default Page
