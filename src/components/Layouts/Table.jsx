import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black, 
    fontSize: 16,
    padding: 5
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(action, time, by, response) {
  return { action, time, by, response};
}

const rows = [
  createData('Add new User', '12:00am', 'Isreal',300),
  createData('Delete new User', '12:00am', 'Airmjay',300),
  createData('Lock an accout', '12:00am', 'Miller',300),
  createData('Request Verification', '12:00am', 'Isreal',300),
  createData('Kill an action', '12:00am', 'airmjay',300),
];

export default function TableData() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Action</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">By</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.action}>
              <StyledTableCell align="left" component="th" scope="row">
                {row.action}
              </StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.by}</StyledTableCell>
              <StyledTableCell align="right">{row.response}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}