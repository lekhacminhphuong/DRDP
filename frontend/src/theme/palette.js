import { colors } from '@material-ui/core';

const white = '#FFFFFF';

export default {
  primary: {
    contrastText: white,
    dark: '#12384E',
    main: '#05486F',
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: '#12384E',
    main: '#05486F',
    light: colors.blue.A400
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.grey[900],
    secondary: colors.grey[600],
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.grey[600],
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: colors.grey[200]
};
