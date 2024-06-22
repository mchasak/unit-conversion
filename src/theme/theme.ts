import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#63a4ff', 
      dark: '#004ba0',
      contrastText: '#fff',
    },

    secondary: {
      main: '#333',
      light: '#ccc',

    },
    text: {
      primary: '#000', 
      secondary: '#555',
      disabled: '#aaa',
    },
  },
  typography: {
    button: {
      textTransform: 'uppercase',
    },
  },

  components: {
    MuiStack: {

    },

    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: 'lightBlue',
          width: '100%',
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          marginLeft: 'auto',
          padding: "0px 20px",
        }
      }
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          minWidth: '100px',
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: theme.palette.secondary.light,
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: 0,
          paddingRight: 0,
        })
      }
    }
  }
});

export default theme;