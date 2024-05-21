import { ListItemText, styled } from '@mui/material'

const ListItemBreweryText = styled(ListItemText)(
    ({ theme }) => (
        {
            '& .MuiListItemText-secondary': {
                color: 'yellow',
            },
        }
    )
)

export default ListItemBreweryText