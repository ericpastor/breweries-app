import { ListItem, styled } from '@mui/material'

const ListItemClass = styled(ListItem)(
    ({ theme }) => (
        {
            '&.item-a': {
                gridArea: 'first'
            },
            '&.item-b': {
                gridArea: 'second'
            },
            '&.item-c': {
                gridArea: 'third'
            },
            '&.item-d': {
                gridArea: 'fourth'
            },
            '&.item-e': {
                gridArea: 'fifth'
            },
            '&.item-f': {
                gridArea: 'sixth'
            },
            '&.item-g': {
                gridArea: 'seventh'
            },
            '&.item-h': {
                gridArea: 'eighth'
            }
        }
    )
)

export default ListItemClass