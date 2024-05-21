import { Box, styled } from '@mui/material'

const BoxAbout = styled(Box)(
    ({ theme }) => (
        {
            display: 'grid',
            placeItems: 'center',
            margin: '30px 10px auto 20px',
            width: 'auto',
            overflow: 'hidden',
            whiteSpace: 'break-spaces'
        }
    )
)

export default BoxAbout