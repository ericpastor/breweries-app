import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'

import theme from './custom-components/theme'

import Home from './components/pages/Home'
import About from './components/pages/About'
import { Brewery } from './types'
import BreweryDetails from './components/BreweryDetails'

const breweries: Brewery[] = []

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='brewery/:id' element={<BreweryDetails breweries={breweries} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App