import { Box, styled } from '@mui/material'

const BoxPreTable = styled(Box)(
    ({ theme }) => (
        {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: '10px',
            marginTop: '20px'
        }
    )
)

export default BoxPreTable