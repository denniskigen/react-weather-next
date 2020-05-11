import { Flex, Box, Text, Link as A } from 'rebass'

export default () => (
  <Box as="footer" sx={{ bg: 'sunken', textAlign: 'center', px: 2, py: 3 }}>
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        p: { color: 'muted' },
        a: { color: 'accent', ':first-of-type': { fontWeight: 'bold' } },
      }}
    >
      <Text sx={{ color: 'muted' }}>
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
        </A>
      </Text>
    </Flex>
  </Box>
)
