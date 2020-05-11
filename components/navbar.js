/** @jsx jsx */
import {
  jsx,
  useColorMode,
  Box,
  Container,
  IconButton,
  Text,
  NavLink,
} from 'theme-ui'
import Link from 'next/link'
import { Moon } from 'react-feather'

const ColorSwitcher = (props) => {
  const [mode, setMode] = useColorMode()
  return (
    <IconButton
      {...props}
      onClick={(e) => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Toggle Color Mode"
      sx={{
        borderRadius: 9999,
        transition: 'box-shadow .125s ease-in-out',
        ...props.sx,
        ':hover,:focus': {
          color: 'accent',
          boxShadow: '0 0 0 3px',
          outline: 'none',
        },
      }}
    >
      <Moon size={24} />
    </IconButton>
  )
}

export default () => {
  const [mode] = useColorMode()
  return (
    <Box
      as="nav"
      key="nav"
      sx={{
        bg: mode === 'dark' ? 'lessdark' : 'black',
        color: 'nav',
        py: 2,
        px: 2,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          a: {
            fontSize: 1,
            color: mode === 'dark' ? 'red' : 'white',
            textDecoration: 'none',
            mr: [3, 4],
            ':focus,:hover': { color: mode === 'dark' ? 'white' : 'red' },
          },
        }}
      >
        <Link href="/" passHref>
          <Text
            as="a"
            variant="logo"
            fontWeight="bold"
            sx={{ flex: '1 1 auto' }}
          >
            React&nbsp;Weather
          </Text>
        </Link>
        <Link href="#" passHref>
          <NavLink>About</NavLink>
        </Link>
        <Link href="//github.com/denniskigen/react-weather-next" passHref>
          <NavLink target="_blank" rel="noopener noreferrer">
            GitHub
          </NavLink>
        </Link>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}
