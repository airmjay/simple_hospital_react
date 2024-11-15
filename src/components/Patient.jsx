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
import PatientTable from './Layouts/PatientTable';

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


function createData(id, name, age, appointment, diagnose, doctor ) {
    return { id, name, age, appointment, diagnose, doctor };
}

const rows = [
    createData(1, 'hakim Aliyu', 15, '12:00', 'cancer', 'Doctor Sam'),
    createData(2, 'Deniel runz', 24, '1:00', 'cough', 'Doctor Idris'),
    createData(3, 'Angel Reese', 26, '3:00', 'head injury', 'Doctor Bawa'),
    createData(4, 'Will Smith', 16, '20:00', 'transpant', 'Doctor Bello'),
    createData(5, 'Willow Smith', 20, '19:00', 'running', 'Doctor James'),
];


function Patient() {
    const [array, setArray] = useState(rows)
    const [input, setInput] = useState(
        {
            name: '',
            age: '',
            appointment: '',
            diagnose: '',
            doctor: ''
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
                    Patient
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
                        ADD NEW PATIENT
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
                                    label="Enter Patient Name"
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
                                    label="Enter Patient age"
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
                                    label="Enter Appointment Time"
                                    size="small"   
                                    value={input.appointment}
                                    name="appointment"
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
                                    label="diagnose"
                                    size="small"
                                    value={input.diagnose}
                                    name="diagnose"
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
                                    label="Doctor assign to"
                                    size="small"
                                    value={input.doctor}
                                    name="doctor"
                                    onChange={handleChange}
                                />
                            </Grid2>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=> setArray((current) => {
                            
                            try{
                                handleClose()
                                setCount((current) => current + 1);
                           return [...current, {id :  count, age : input.age, name : input.name, appointment : input.appointment 
                                , doctor : input.doctor , diagnose : input.diagnose
                             }] 
                            }catch(err)
                            {
                                console.log(err)
                            }finally
                            {
                                setInput((current)=> ({...current, age : '', diagnose : '', name : '' , doctor : '' , appointment: ''}))
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
                            <StyledTableCell align="right">Appointent</StyledTableCell>
                            <StyledTableCell align="right">Diagnose</StyledTableCell>
                            <StyledTableCell align="right">Assign to</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {array.map((row, key) => (
                            <PatientTable props={{ row, input, setArray, setInput }} key={key} />

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Patient;