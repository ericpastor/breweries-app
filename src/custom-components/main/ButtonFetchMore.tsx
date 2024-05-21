import { Button, styled } from '@mui/material'

const ButtonFetchMore = styled(Button)(
    ({ theme }) => (
        {
            cursor: 'pointer',
            marginLeft: '16px',
            color: '#09f',
            borderRadius: '4px',
            border: '1px solid #000',
            transition: '.6s ease',
            textTransform: 'none',
            '&:hover': {
                border: '1px solid #09f'
            }
        }
    )
)

export default ButtonFetchMore