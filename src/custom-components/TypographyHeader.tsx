import { Typography, styled } from '@mui/material'

const TypographyHeader = styled(Typography)(
    ({ theme }) => (
        {
            display: 'block',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '20px',
            color: 'yellow',
            fontFamily: 'Mulish, sans-serif'

        }
    )
)

export default TypographyHeader