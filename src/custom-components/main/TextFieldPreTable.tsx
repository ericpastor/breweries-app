import { TextField, styled } from '@mui/material'

const TextFieldPreTable = styled(TextField)(
    ({ theme }) => ({
        backgroundColor: '#333',
        borderRadius: '4px',
        '& label': {
            color: '#09f',
        },
        '& input': {
            color: '#fff',
            border: '0'
        },
        '&:hover': {
            borderColor: '#09f',
        }
    })
)

export default TextFieldPreTable