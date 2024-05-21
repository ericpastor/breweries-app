import { Button, styled } from '@mui/material'

const ButtonColorRows = styled(Button)(
    ({ theme }) => (
        {
            cursor: 'pointer',
            marginLeft: '16px',
            backgroundColor: '#333',
            color: '#09f',
            borderRadius: '4px',
            border: '1px solid #000',
            transition: '.6s ease',
            textTransform: 'none',
            '&:hover': {
                border: '1px solid #09f',
            }
        }
    )
)

export default ButtonColorRows