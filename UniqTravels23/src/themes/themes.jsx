
import { createTheme} from '@mui/material/styles';

export const customTheme = (outerTheme) =>
  createTheme({
    mode: outerTheme.palette.typography,
      palette: {
        mode: 'light',
        primary: {
          main: '#1D558A',
        },
        secondary: {
          main: '#FF9336',
        },
        background: {
          paper: '#EEF9FF',
          default: '#DAEBF4',
        },
        text: {
          primary: '#1C465C', //DARK
        },
        warning: {
          main: '#ed4d02',
        },
      },
      typography: {
        h1: {
          fontFamily: 'Lalezar',
          fontSize: '32pt',
        },
        h2: {
          fontFamily: 'Lalezar',
          fontSize: '24pt',
        },
        h3: {
          fontFamily: 'Lalezar',
        },
        h4: {
          fontFamily: 'Lalezar',
          fontWeight: 100,
        },
        h5: {
          fontWeight: 100,
          fontFamily: 'Lalezar',
        },
        h6: {
          fontFamily: 'Lalezar',
          fontWeight: 100,
        },
        subtitle2: {
          fontFamily: 'Sen',
        },
        body1: {
          fontFamily: 'Sen',
          fontWeight: 500,
        },
        body2: {
          fontFamily: 'Sen',
          fontWeight: 400,
        },
        button: {
          fontFamily: 'Sen',
        },
        caption: {
          fontFamily: 'Sen',
        },
        overline: {
          fontFamily: 'Sen',
        },
        subtitle1: {
          fontFamily: 'Sen',
        },
        fontFamily: 'Lalezar',
        fontWeightLight: 200,
        fontWeightRegular: 300,
      },
      spacing: 8,
      shape: {
        borderRadius: 15,
      },
    
  });


