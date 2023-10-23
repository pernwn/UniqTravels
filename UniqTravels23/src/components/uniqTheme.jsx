import { createTheme } from "@mui/material";


    export const theme = createTheme({
        background:{
            main:'#EEF9FF',
        },
    
        palette:{
            main: '#EEF9FF',
            accent: '#FFB336',
            dark: '#1C465C'
    
        },
    
        typography:{
            fontFamily:
                [
                    'Lalezar, Sen',
                ].join(','),
    
        },
    
        components:{
            //component name
            MuiButton:{
                styleOverrides:{
                    //styles to override mui theme
                    root: {
                        background:'#FFB336',
                        color:'#EEF9FF',
                        borderRadius:'1rem'
    
                    }
                }
            }
        }
    
    
    })

    theme.typography.h1 ={
        fontSize: '5rem',
    
    }


