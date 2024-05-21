import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import SportsBarIcon from '@mui/icons-material/SportsBar'
import ClassIcon from '@mui/icons-material/Class'
import PlaceIcon from '@mui/icons-material/Place'
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined'
import FlagCircleIcon from '@mui/icons-material/FlagCircle'
import PublicIcon from '@mui/icons-material/Public'
import WebIcon from '@mui/icons-material/Web'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import ListBreweryDetails from '../custom-components/brewery/ListBreweryDetails'
import ListItemClass from '../custom-components/brewery/ListItemClass'
import ListItemBreweryText from '../custom-components/brewery/ListItemBreweryText'

import { Brewery } from '../types'
import NavBar from './NavBar'
import Footer from './Footer'

export interface Props {
    breweries: Brewery[]
}

function BreweryDetails({ breweries }: Props) {
    const [breweryDetails, setBreweryDetails] = useState<Brewery[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const id = useParams().id

    useEffect(() => {
        const onFetchData = async () => {
            setLoading(true)
            try {
                const result = await axios.get(`https://api.openbrewerydb.org/v1/breweries?by_id=${id}`)
                setBreweryDetails((result.data))
            } catch (e) {
                const error = e as AxiosError;
                setError(error.message)
            }
            setLoading(false)
        }
        onFetchData()
    }, [id])

    const brewery = breweryDetails.find((b) => b.id === id)

    return (
        <>
            <NavBar />
            <Box>
                {!loading && error && (
                    <p>Sorry, but something went wrong</p>
                )}
                {!error && loading && (
                    <p>Loading the list...</p>
                )}
                <ListBreweryDetails>
                    {brewery &&
                        <>
                            <ListItemClass className='item-a'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <SportsBarIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemBreweryText primary='Name' secondary={`${brewery.name}`} />
                            </ListItemClass>
                            <ListItemClass className='item-b'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ClassIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemBreweryText primary='Type' secondary={`${brewery.brewery_type}`} />
                            </ListItemClass>
                            <ListItemClass className='item-c'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PlaceIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemBreweryText primary='Address' secondary={`${brewery.address_1}`} />
                            </ListItemClass>
                            <ListItemClass className='item-d'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocationCityOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemBreweryText primary='City' secondary={`${brewery.city}`} />
                            </ListItemClass>
                            <ListItemClass className='item-e'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FlagCircleIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemBreweryText primary='State' secondary={`${brewery.state}`} />
                            </ListItemClass>
                            <ListItemClass className='item-f'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PublicIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemBreweryText primary='Country' secondary={`${brewery.country}`} />
                            </ListItemClass>
                            <ListItemClass className='item-g'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WebIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemBreweryText primary='Web' secondary={<Typography component='a' href={`${brewery.website_url}`}>{brewery.website_url}</Typography>} />
                            </ListItemClass>
                            <ListItemClass className='item-h'>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ContactPhoneIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemBreweryText primary='Phone' secondary={`${brewery.phone}`} />
                            </ListItemClass>
                        </>
                    }
                </ListBreweryDetails>
                <Footer />
            </Box>
        </>
    )
}

export default BreweryDetails;



