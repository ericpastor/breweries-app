import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import { Box, Button } from '@mui/material'

import AppBarFooter from '../custom-components/footer/AppBarFooter'
import TypographyFooter from '../custom-components/footer/TypographyFooter'

function Footer() {
  return (
    <AppBarFooter>
      <Toolbar>
        <TypographyFooter>
          &copy; {new Date().getFullYear()} Bewery App
        </TypographyFooter>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button
            sx={{ my: 2, color: '#09f', display: 'block', textTransform: 'none', fontSize: '13px' }}
            component={Link}
            to='/'>Home</Button>
          <Button
            sx={{ my: 2, color: '#09f', display: 'block', textTransform: 'none', fontSize: '13px' }}
            component={Link}
            to='/about'>About</Button>
        </Box>
      </Toolbar>
    </AppBarFooter>
  );
}

export default Footer;

