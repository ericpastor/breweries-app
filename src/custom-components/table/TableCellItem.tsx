import { TableCell, styled } from '@mui/material'

const TableCellItem = styled(TableCell)(
    ({ theme }) => (
        {
            borderBottom: 'none',
            color: '#fff',
            cursor: 'pointer',
        }
    )
)

export default TableCellItem