import { Box } from '@mui/material'

import Main from '../Main'
import Header from '../Header'
import Footer from '../Footer'
import NavBar from '../NavBar'

function Home() {
    return (
        <Box>
            <NavBar />
            <Header />
            <Main />
            <Footer />
        </Box>
    )
}

export default Home