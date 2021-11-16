import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material';

const Theme = ({children}) => {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    return (
        <ThemeProvider theme={darkTheme}>
            {children}
       </ThemeProvider>
    )
}

export default Theme
