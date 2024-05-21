import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        background: {
            default: '#222',
            paper: '#333',
        },
    },
    typography: {
        allVariants: {
            color: '#fff',
            fontFamily: 'Mulish, sans-serif',
            fontWeight: 'normal'

        }
    }
})

export default theme
