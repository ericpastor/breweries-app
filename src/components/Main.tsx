import { useEffect, useState } from 'react'
import axios from 'axios'
import { AxiosError } from 'axios'
import { Box, Typography } from '@mui/material'
import ButtonColorRows from '../custom-components/main/ButtonColorRows'
import BoxPreTable from '../custom-components/main/BoxPreTable'
import TextFieldPreTable from '../custom-components/main/TextFieldPreTable'
import ButtonFetchMore from '../custom-components/main/ButtonFetchMore'

import { type Brewery } from '../types.d'
import BreweriesList from './BreweriesList'

function Main() {
  const [breweries, setBreweries] = useState<Brewery[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [findBrewery, setFindBrewery] = useState<string | null>(null)
  const [showColors, setShowColors] = useState(false)
  const [currentPage, setCurrentPage] = useState(4)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  useEffect(() => {
    const onFetchData = async () => {
      setLoading(true)
      try {
        const result = await axios.get(`https://api.openbrewerydb.org/v1/breweries?per_page=${currentPage}`)
        setBreweries((result.data))
      } catch (e) {
        const error = e as AxiosError;
        setError(error.message)
      }
      setLoading(false)
    }
    onFetchData()
  }, [currentPage])

  const foundBrewery: Brewery[] = findBrewery !== null && findBrewery.length > 0
    ? breweries?.filter((brewerie => {
      return brewerie.name.toLocaleLowerCase().includes(findBrewery.toLocaleLowerCase())
    })) : breweries

  return (
    <Box>
      <BoxPreTable>
        <TextFieldPreTable
          id='outlined-controlled'
          size='small'
          label='Search a brewery'
          onChange={(e) => {
            setFindBrewery(e.target.value);
          }}
        />
        <ButtonColorRows onClick={toggleColors}>Color the Rows!</ButtonColorRows>
      </BoxPreTable>
      <Box>
        {error && !loading && (
          <Typography>Sorry, but something went wrong</Typography>
        )}

        {!error && loading && (
          <Typography>Loading the list...</Typography>
        )}
        {!error && !loading && <BreweriesList breweries={foundBrewery} showColors={showColors} />}
      </Box>
      <BoxPreTable>
        {!error && !loading && foundBrewery.length > 0 && <ButtonFetchMore onClick={() => setCurrentPage(currentPage + 5)}>Show more breweries</ButtonFetchMore>}
      </BoxPreTable>
    </Box>
  )
}

export default Main
