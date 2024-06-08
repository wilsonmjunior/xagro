import { createTamagui, createTokens, createFont } from 'tamagui';
import { config } from '@tamagui/config';

const interFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 22,
    7: 24,
    8: 26,
    9: 28,
    10: 30,
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
  },
  weight: {
    4: '300',
    5: '400',
    6: '600',
    7: '700',
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
  face: {
    700: { normal: 'InterBold', italic: 'InterBold-Italic' },
    800: { normal: 'InterBold', italic: 'InterBold-Italic' },
    900: { normal: 'InterBold', italic: 'InterBold-Italic' },
  },
});

export const tokens = createTokens({
  ...config.tokens,
  color: {
    white: '#ffffff',
    black: '#000000',

    primary100: '#E4F2F5',
    primary200: '#C9E5EB',
    primary300: '#AFD5E2',
    primary400: '#8ABCCD',
    primary500: '#65A3B8',
    primary600: '#528694',
    primary700: '#3F6970',
    primary800: '#2C4B4D',
    primary900: '#192E2A',

    secondaryGreen100: '#E6F7EE',
    secondaryGreen200: '#CDEFD8',
    secondaryGreen300: '#B2E6C1',
    secondaryGreen400: '#99DEAB',
    secondaryGreen500: '#7BC8A4',
    secondaryGreen600: '#62B292',
    secondaryGreen700: '#499B7F',
    secondaryGreen800: '#31756C',
    secondaryGreen900: '#184E59',

    secondaryOrange100: '#FFF1E6',
    secondaryOrange200: '#FFE3CC',
    secondaryOrange300: '#FFD5B3',
    secondaryOrange400: '#FFC899',
    secondaryOrange500: '#EFA663',
    secondaryOrange600: '#D08A4B',
    secondaryOrange700: '#B16F33',
    secondaryOrange800: '#92521B',
    secondaryOrange900: '#743503',

    neutral100: '#F2F2F2',
    neutral200: '#E6E6E6',
    neutral300: '#D9D9D9',
    neutral400: '#CCCCCC',
    neutral500: '#BFBFBF',
    neutral600: '#A6A6A6',
    neutral700: '#8C8C8C',
    neutral800: '#737373',
    neutral900: '#595959',

    highlightYellow100: '#FFF9E6',
    highlightYellow200: '#FFF2CC',
    highlightYellow300: '#FFEBB3',
    highlightYellow400: '#FFE499',
    highlightYellow500: '#FFD700',
    highlightYellow600: '#E6C000',
    highlightYellow700: '#CCAA00',
    highlightYellow800: '#B39400',
    highlightYellow900: '#997E00',

    highlightRed100: '#FFE6E6',
    highlightRed200: '#FFCCCC',
    highlightRed300: '#FFB3B3',
    highlightRed400: '#FF9999',
    highlightRed500: '#E57373',
    highlightRed600: '#CC5C5C',
    highlightRed700: '#B34646',
    highlightRed800: '#993030',
    highlightRed900: '#801A1A',
  },
  space: {
    true: 4,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  size: {
    true: 32,
    xs: 32,
    sm: 40,
    md: 48,
    lg: 96,
    xl: 192,
  },
  radius: {
    true: 2,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
  zIndex: {
    true: 1,
    low: 1,
    medium: 10,
    high: 100,
    max: 1000,
  },
})

const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  fonts: {
    heading: interFont,
    body: interFont,
  },
});

export type AppConfig = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export {
  tamaguiConfig,
};
