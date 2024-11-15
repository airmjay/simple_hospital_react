import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const nav = useNavigate()
    const username = 'aliyu';
    const password = 'aliyu';
    const [username1, setUsername] = useState("")
    const [password1, setPassword] = useState("")
    const [error, setError] = useState("")
    const handleRegister = () => 
        {
                if(password == password1 && username == username1)
                    {
                        localStorage.setItem('airmjaylogin','Aliyu Welcome')
                        nav('/dashboard')
                    }
                    else
                    {
                        setError("Invalid Credential")
                    }
        }
    return (
        <div style={{marginTop:'40px'}}>
            <Card sx={{ margin: 'auto', padding: '10px' , width: '50%'}}>
            <Typography variant="h4"> Login Page</Typography>
            <CardContent>
            
            <Typography variant="h8">Username</Typography>
            <TextField  sx={{
                    width: '100%',
                    marginTop: '5px'
                }}
                    required
                    id="outlined-required"
                    label="Enter Username"
                    size="small"
                    name="name"
                    value={username1}
                    onChange={(e)=> {setUsername(e.target.value)}}
                />
                <br/> <br/>
                <Typography variant="h8">Password</Typography>
            <TextField sx={{
                    width: '100%',
                    marginTop: '5px'
                }}
                    required
                    id="outlined-required"
                    label="Enter Password"
                    size="small"
                    value={password1}
                    name="name"
                    onChange={(e)=> {setPassword(e.target.value)}}
                />
                {error}
                <div style={{display : 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Button sx={{marginTop: '15px'}} onClick={handleRegister} variant="contained">Register</Button> 
                </div>
                </CardContent>
                </Card>
        </div>
    );
}

export default Login;