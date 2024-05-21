import { Box } from '@mui/material'
import BoxAbout from '../../custom-components/about/BoxAbout'

import Footer from '../Footer'
import NavBar from '../NavBar'

function About() {
    return (
        <>
            <Box>
                <NavBar />
                <BoxAbout>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam veritatis illum sed expedita eius nisi quidem mollitia soluta, accusamus eveniet dolorem dolorum ab dolores nulla odio harum ducimus quam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid sunt repellat excepturi amet unde sapiente! Deleniti fugit ullam sit sunt ea quod. Ex facere deserunt in optio sed officiis.orem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati aperiam veritatis illum sed expedita eius nisi quidem mollitia soluta, accusamus eveniet dolorem dolorum ab dolores nulla odio harum ducimus quam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid sunt repellat excepturi amet unde sapiente! Deleniti fugit ullam sit sunt ea quod. Ex facere deserunt in optio sed officiis.orem ipsum dolor sit amet consectetur, adipisicing elit.
                </BoxAbout>
            </Box>
            <Footer />
        </>
    )
}

export default About