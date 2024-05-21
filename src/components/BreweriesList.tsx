import { Table, TableHead, TableRow, TableBody, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { Brewery } from '../types'
import TableCellHeader from '../custom-components/table/TableCellHeader'
import TableCellItem from '../custom-components/table/TableCellItem'

interface Props {
  showColors: boolean
  breweries: Brewery[]
}

function BreweriesList({ showColors, breweries }: Props) {
  const navigate = useNavigate()
  return (
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableCellHeader>Name</TableCellHeader>
        <TableCellHeader>Address</TableCellHeader>
        <TableCellHeader>City</TableCellHeader>
        <TableCellHeader>State</TableCellHeader>
        <TableCellHeader>Website</TableCellHeader>
      </TableHead>
      <TableBody>{
        breweries &&
        breweries.map((brewery, index) => {
          const backgroundColor = index % 2 === 0 ? `#333 !important` : `#555 !important`
          const color = showColors ? backgroundColor : 'transparent !important'
          return (
            <TableRow key={index} sx={{ backgroundColor: color }}>
              <TableCellItem onClick={() => navigate(`brewery/${brewery.id}`)} sx={{ '&:hover': { boxShadow: '8' } }}>{brewery.name}</TableCellItem>
              <TableCellItem>{brewery.address_1}</TableCellItem>
              <TableCellItem>{brewery.city}</TableCellItem>
              <TableCellItem>{brewery.state}</TableCellItem>
              <Link href={`${brewery.website_url}`}>
                <TableCellItem>{brewery.website_url}</TableCellItem>
              </Link>
            </TableRow>
          )
        })}</TableBody>
    </Table >
  )
}

export default BreweriesList
