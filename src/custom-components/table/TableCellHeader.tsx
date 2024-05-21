import { TableCell, styled } from '@mui/material'

const TableCellHeader = styled(TableCell)(
    ({ theme }) => (
        {
            color: 'yellow',
            fontWeight: 'bold',
        }
    )
)

export default TableCellHeader