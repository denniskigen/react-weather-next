import base from '@theme-ui/preset-base'
import merge from 'lodash.merge'

export const breakpoints = [32, 48, 64, 96, 128].map((w) => `${w}em`)
export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
export const fontSizes = [12, 16, 20, 24, 32, 48, 64, 96, 128]

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  lessdark: '#252429',
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  red: '#ec3750',
  orange: '#ff8c37',
  yellow: '#f1c40f',
  green: '#33d6a6',
  cyan: '#5bc0de',
  blue: '#338eda'
}

const theme = merge(base, {
  breakpoints,
  space,
  fontSizes,
  colors: {
    ...palette,
    text: palette.black,
    background: palette.snow,
    accent: palette.blue,
    nav: palette.white,
    modes: {
      dark: {
        text: palette.white,
        background: palette.dark,
        elevated: palette.lessdark,
        sunken: palette.darker,
        border: palette.lessdark,
        placeholder: palette.slate,
        secondary: palette.muted,
        muted: palette.muted,
        accent: palette.cyan,
        invertedPrimary: palette.darker,
        invertedText: palette.red,
        nav: palette.red,
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: 'inherit',
    monospace: '"SFMono-Regular", "Roboto Mono", Menlo, Consolas, monospace',
  },
  lineHeights: {
    heading: 1.125,
    body: 1.5,
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  sizes: {
    ultrawide: 1536,
    wide: 1200,
    subwide: 896,
    container: 768,
    subcontainer: 640,
    narrowplus: 576,
    narrow: 512
  },
  text: {
    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: [5, 6, 7],
    },
    logo: {
      textTransform: 'uppercase',
      letterSpacing: 'headline',
      fontWeight: 'heading',
    },
  },
  
  styles: {},
  variants: {
    container: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto',
      px: 2,
    }
  }
})

theme.styles.root = {
  fontFamily: theme.fonts.body,
  lineHeight: theme.lineHeights.body,
  fontWeight: theme.fontWeights.body,
  color: theme.colors.text,
  margin: 0,
  minHeight: '100vh',
}

export default theme
