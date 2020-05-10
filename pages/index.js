import { Box, Flex, Text, Link } from 'rebass'

const Page = () => (
  <Flex px={2} color="white" bg="black" alignItems="center">
    <Text p={2} fontWeight="bold">
      Rebass
    </Text>
    <Box mx="auto" />
    <Link
      variant="nav"
      href="https://github.com/denniskigen/react-weather-next"
    >
      Github
    </Link>
  </Flex>
)

export default Page
