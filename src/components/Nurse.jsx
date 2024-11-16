import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import Typography from '@mui/material/Typography';
import { Box, Grid2, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import NurseTable from './Layouts/NurseTable';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
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


function createData(id, name, age, year_app, salary, specialize ) {
    return { id, name, age, year_app, salary, specialize };
}

const rows = [
    createData(1, 'hakim Aliyu', 15, '1999', '$200', 'Cough'),
    createData(2, 'Deniel runz', 24, '2007', '$300', 'Running nose'),
    createData(3, 'Angel Reese', 26, '2024', '$400', 'Brain Surgery'),
    createData(4, 'Will Smith', 16, '2019', '$500', 'Mouth Surgery'),
    createData(5, 'Willow Smith', 20, '2016', '$700', 'Cancer'),
];


function Nurse() {
    const [array, setArray] = useState(rows)
    const [input, setInput] = useState(
        {
            name: '',
            age: '',
            year: '',
            salary: '',
            spec: ''
        })
        // console.log(input)
    const handleChange = e =>
        {
            setInput(prev => ({...prev, [e.target.name] : e.target.value}))
        }
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [count, setCount] = useState(6);
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px',
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: 'text.dark' }}
                >
                    Nurse
                </Typography>
                <Button sx={{ color: 'white' }} color='primary' size="small" variant='contained' onClick={handleOpen}>
                    ADD +
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: '80%', height: '80%' }}>

                    <Typography variant='h6'>
                        ADD NEW Nurse
                    </Typography>
                    <Card sx={{ marginTop: '20px', padding: '10px' }}>
                        <CardContent sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: '' }}>
                            <Grid2 size={{ sm: 12, lg: 6 }}>
                                <TextField sx={{
                                    width: {
                                        XS: '10rem',
                                        sm: '30rem',
                                        md: '30rem',
                                        lg: '32rem',
                                    },
                                }}
                                    required
                                    id="outlined-required"
                                    label="Enter Nurse Name"
                                    size="small"
                                    value={input.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ sm: 12, lg: 6 }}>
                                <TextField sx={{
                                    width: {
                                        XS: '10rem',
                                        sm: '30rem',
                                        md: '30rem',
                                        lg: '32rem',
                                    },
                                }}
                                    required
                                    id="outlined-required"
                                    label="Enter Nurse age"
                                    size="small"
                                    value={input.age}
                                    name="age"
                                    onChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ sm: 12, lg: 6 }}>
                                <TextField sx={{
                                    width: {
                                        XS: '10rem',
                                        sm: '30rem',
                                        md: '30rem',
                                        lg: '32rem',
                                    },
                                }}
                                    required
                                    id="outlined-required"
                                    label="Enter Year of Appointment"
                                    size="small"   
                                    value={input.year}
                                    name="year"
                                    onChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ sm: 12, lg: 6 }}>
                                <TextField sx={{
                                    width: {
                                        XS: '10rem',
                                        sm: '30rem',
                                        md: '30rem',
                                        lg: '32rem',
                                    },
                                }}
                                    required
                                    id="outlined-required"
                                    label="salary"
                                    size="small"
                                    value={input.salary}
                                    name="salary"
                                    onChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ sm: 12, lg: 6 }}>
                                <TextField sx={{
                                    width: {
                                        XS: '10rem',
                                        sm: '30rem',
                                        md: '30rem',
                                        lg: '32rem',
                                    },
                                }}
                                    required
                                    id="outlined-required"
                                    label="specialize"
                                    size="small"
                                    value={input.spec}
                                    name="spec"
                                    onChange={handleChange}
                                />
                            </Grid2>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=> setArray((current) => {
                            
                            try{
                                handleClose()
                                setCount((current) => current + 1);
                           return [...current, {id :  count, age : input.age, name : input.name, specialize : input.spec 
                                , salary : input.salary , year_app : input.year
                             }] 
                            }catch(err)
                            {
                                console.log(err)
                            }finally
                            {
                                setInput((current)=> ({...current, age : '', spec : '', name : '' , salary : '' , year: ''}))
                            }
                        
                            }
                                )} color="primary" variant="contained" size="small">Save</Button>
                            <Button sx={{ backgroundColor: 'red' }} variant='contained' onClick={handleClose} size="small">Close</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Modal>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Age</StyledTableCell>
                            <StyledTableCell align="right">Year of Appointent</StyledTableCell>
                            <StyledTableCell align="right">Salary</StyledTableCell>
                            <StyledTableCell align="right">Specialization</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {array.map((row, key) => (
                            <NurseTable props={{ row, input, setArray, setInput }} key={key} />

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Nurse;