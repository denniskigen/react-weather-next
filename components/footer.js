import { Flex, Box, Text, Link as A } from 'rebass'

export default () => (
  <Box as="footer" sx={{ bg: 'smoke', textAlign: 'center', px: 2, py: 3 }}>
    <Flex sx={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text sx={{ color: 'slate' }}>
        Made with{' '}
        <span role="img" aria-label="love emoji" style={{ color: 'red' }}>
          ♥️
        </span>{' '}
        by{' '}
        <A
          href="https://twitter.com/dennisforthewin"
          target="_blank"
          sx={{ color: 'blue' }}
        >
          @dennisforthewin
        </A>{'  '}
        <A
          href="https://github.com/denniskigen/react-weather-next"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source
        </A>
      </Text>
    </Flex>
  </Box>
)
