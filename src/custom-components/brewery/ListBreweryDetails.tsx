import { List, styled } from '@mui/material'

const ListBreweryDetails = styled(List)(
    ({ theme }) => (
        {
            marginLeft: '5%',
            objectFit: 'cover',
            width: '90%',
            height: '450px',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridTemplateRows: '20% 50%',
            gridTemplateAreas: `
              'first first second second third third'
              'fourth fourth fifth fifth sixth sixth'
              'seventh seventh seventh eighth eighth eighth'`,
            gridGap: '0.8em 0.8em',
        }
    )
)

export default ListBreweryDetails