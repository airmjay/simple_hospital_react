import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { DeleteForeverOutlined, Edit, Save } from '@mui/icons-material';
import { useState } from 'react';
// import { TextField } from '@mui/material';
// import {propsType} from 'prop-types'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        fontSize: 12,
        padding: 5
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
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
export default function AppointmentTable({ props }) {
    const row = props.row
    const setArray = props.setArray
    const setInput = props.setInput
    const input = props.input
    const counter = useState(5)
    
    const deleteElement = (id) => {
        setArray((currentPostState) =>
            currentPostState.filter((currentPost) => currentPost.id !== id))
    }
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(row?.name)
    const [age, setAge] = useState(row?.age)
    const [appointment, setAppointment] = useState(row?.appointment)
    const [doctor, setDoctor] = useState(row?.doctor)
    const [treatment, setTreatment] = useState(row?.treatment)
    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
                {!isEditing ? <span> {row.name}</span> :
                    (<div style={{ display: 'flex', alignItems: 'center' }}>

                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

                    </div>)}
            </StyledTableCell>
            <StyledTableCell align="right">{!isEditing ? <span> {row.age}</span> :
                (<div style={{ display: 'flex', alignItems: 'center' }}>

                    <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />

                </div>)}
            </StyledTableCell>

            <StyledTableCell align="right">{!isEditing ? <span> {row.appointment}</span> :
                (<div style={{ display: 'flex', alignItems: 'center' }}>

                    <input type='text' value={appointment} onChange={(e) => setAppointment(e.target.value)} />

                </div>)}</StyledTableCell>
            <StyledTableCell align="right">{!isEditing ? <span> {row.doctor}</span> :
                (<div style={{ display: 'flex', alignItems: 'center' }}>

                    <input type='text' value={doctor} onChange={(e) => setDoctor(e.target.value)} />

                </div>)}</StyledTableCell>
            <StyledTableCell align="right">{!isEditing ? <span> {row.treatment}</span> :
                (<div style={{ display: 'flex', alignItems: 'center' }}>

                    <input type='text' value={treatment} onChange={(e) => setTreatment(e.target.value)} />

                </div>)}</StyledTableCell>
            <StyledTableCell align="right">
                {!isEditing ? (<Button onClick={() => {
                    setIsEditing((current) => !current)
                }} variant="contained" size="small"><Edit sx={{ fontSize: 'large', padding: '2px' }} /></Button>) :
                    <Button onClick={() => {

                        setArray((current)=> 
                            
                              current.map((currentApp)=>
                                    {
                                        if(currentApp.id == row.id)
                                            {
                                                return {...currentApp, treatment, age, doctor, name, appointment}
                                            }
                                            else return currentApp;
                                    })
                            )
                            setIsEditing(false)

                    }} variant="contained" size="small"> <Save sx={{ fontSize: 'large', padding: '2px' }} />
                    </Button>}
                <Button  onClick={() => { deleteElement(row.id) }} sx={{ backgroundColor: 'red' }} variant='contained' size="small">
                    <DeleteForeverOutlined
                        sx={{ fontSize: 'large', padding: '2px' }}>

                    </DeleteForeverOutlined>
                </Button>
            </StyledTableCell>

        </StyledTableRow>
    )
}