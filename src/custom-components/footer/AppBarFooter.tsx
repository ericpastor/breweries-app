import { AppBar, styled } from '@mui/material'

const AppBarFooter = styled(AppBar)(
    ({ theme }) => (
        {
            display: 'flex',
            alignContent: 'center',
            backgroundColor: '#222',
            boxShadow: 'none',
            position: 'sticky',
            bottom: '0',

        }
    )
)

export default AppBarFooter