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
import AppointmentTable from './Layouts/AppointmentTable';

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


function createData(id, name, age, appointment, doctor, treatment) {
    return { id, name, age, appointment, doctor, treatment };
}

const rows = [
    createData(1, 'hakim Aliyu', 15, '6:00 Am', 'Lorem Carly', 'Cough'),
    createData(2, 'Deniel runz', 24, '7:00 Am', 'Lopez Ridge', 'Running nose'),
    createData(3, 'Angel Reese', 26, '12:00 Pm', 'Sammy Kings', 'Brain Surgery'),
    createData(4, 'Will Smith', 16, '1:00 Am', 'Jack Ryan', 'Mouth Surgery'),
    createData(5, 'Willow Smith', 20, '12:00 Am', 'Miller Ridge', 'Cancer'),
];


function Appointment() {
    const [array, setArray] = useState(rows)
    const [input, setInput] = useState(
        {
            name: '',
            age: '',
            appointment: '',
            doctor: '',
            treatment: ''
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
                    APPOINTMENT
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
                        FILL OUT THE FORM FOR NEW APPOINTMENT
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
                                    label="Enter patient age"
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
                                    label="Enter Time for Appointment"
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
                                    label="Doctor"
                                    size="small"
                                    value={input.doctor}
                                    name="doctor"
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
                                    label="Medical Issue"
                                    size="small"
                                    value={input.treatment}
                                    name="treatment"
                                    onChange={handleChange}
                                />
                            </Grid2>
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=> setArray((current) => {
                            
                            try{
                                handleClose()
                                setCount((current) => current + 1);
                           return [...current, {id :  count, age : input.age, name : input.name, treatment : input.treatment 
                                , doctor : input.doctor , appointment : input.appointment
                             }] 
                            }catch(err)
                            {
                                console.log(err)
                            }finally
                            {
                                setInput((current)=> ({...current, age : '', treatment : '', name : '' , doctor : '' , appointment: ''}))
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
                            <StyledTableCell align="right">Doctor</StyledTableCell>
                            <StyledTableCell align="right">Treatment</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {array.map((row, key) => (
                            <AppointmentTable props={{ row, input, setArray, setInput }} key={key} />

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Appointment;