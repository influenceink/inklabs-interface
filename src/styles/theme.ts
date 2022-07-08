import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';

import Montserrat from '../assets/font/Montserrat-Regular.ttf';
import MontserratExtraBold from '../assets/font/Montserrat-ExtraBold.ttf';
import Brolink from '../assets/font/Brolink-Regular.otf';
import SuiGeneris from '../assets/font/sui-generis-rg.otf'

export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME) => {
  let theme = createTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: 'Montserrat'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-display: swap;
            font-weight: regular;
            src: local('Montserrat'), local('Montserrat-Regular'), url(${Montserrat}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-display: swap;
            font-weight: 900;
            src: local('Montserrat'), local('Montserrat-Extra-Bold'), url(${MontserratExtraBold}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Brolink';
            font-style: normal;
            font-display: swap;
            font-weight: regular;
            src: local('Brolink'), local('Brolink-Regular'), url(${Brolink}) format('opentype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'SuiGeneris';
            font-style: normal;
            font-display: swap;
            font-weight: regular;
            src: local('SuiGeneris'), local('SuiGeneris-Regular'), url(${SuiGeneris}) format('opentype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  theme = responsiveFontSizes(theme);
  theme.typography.h1 = {
    fontSize: '90px',
    fontFamily: 'Montserrat',
    fontWeight: 900,
    textTransform: 'uppercase',
    overflowWrap: 'anywhere',
    lineHeight: '90px',
    '@media (max-width: 660px)': {
      fontSize: '42px',
      lineHeight: '42px'
    },
  }
  theme.typography.subtitle1 = {
    fontSize: '15px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    lineHeight: '17px',
    textTransform: 'uppercase',
    '@media (max-width: 660px)': {
      fontSize: '13px',
      fontWeight: 'bold',
      lineHeight: '20px',
    },
  }
  theme.typography.caption = {
    fontSize: '10px',
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontKerning: 'normal',
    '@media (max-width: 660px)': {
      fontSize: '8px',
    },
  }
  theme.typography.body1 = {
    fontSize: '13px',
    fontFamily: 'Montserrat',
    lineHeight: '23px',
    '@media (max-width: 660px)': {
      fontSize: '12px',
      linkHeight: '19px',
    },
  }

  return theme;
};
