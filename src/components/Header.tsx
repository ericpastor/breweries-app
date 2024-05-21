import { Box } from '@mui/material'
import TopographyHeader from '../custom-components/TypographyHeader'

function Header() {
  return (
    <Box>
      <TopographyHeader variant='h4' gutterBottom>
        Breweries
      </TopographyHeader>
    </Box>
  )
}

export default Header
