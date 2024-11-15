import { makeStyles } from "@mui/styles";
// import { createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Typography } from "@mui/material";
// import { createTheme } from "@mui/material";
import { Dashboard, MedicationLiquidSharp, SickSharp, WorkHistory,LogoutSharp, Masks} from "@mui/icons-material";
import { useNavigate} from "react-router-dom";

const useStyle = makeStyles((theme) => (
    {
           
        left:
        {
            height: "100vh",
            paddingTop: "0px",
            borderRight: "1px solid rgba(223, 223, 230, 1)",
            display: "block"
        },
        parent : 
        {
            display : "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop : "20px",
        
        },
        typo : 
        {
            display:   "flex",
            alignItems : "center",
            gap: "5px",
            cursor : "pointer",
            '&:hover': 
            {
                color : "gray"
            }
        },
        typoText : 
        {
            
            [theme.breakpoints.down('md')]: 
            {
                display: 'none',
            }
        },
        icon :
        {
            [theme.breakpoints.down('md')]:
            {
                margin : 'auto'
            }
        }


    }))


function Left() {
   const nav = useNavigate();
    const classes = useStyle();
    return (
        <div className={classes.left}>
            <List>
                <div className={classes.parent}>
                <Typography variant="h6" className={classes.typo} onClick=
                {
                ()=>{
                    nav('/dashboard')
                }
                }>
                <Dashboard className={classes.icon}/>
                <span className={classes.typoText}>Dashboard </span>
                </Typography>
                <Divider component="li" />
                <Typography 
                onClick=
                {
                ()=>{
                    nav('/appointment')
                }
                }
                variant="h6" className={classes.typo} >
                <WorkHistory className={classes.icon}/>
                <span className={classes.typoText}> Appointment </span>
                </Typography>
                <Divider component="li" />
                <Typography variant="h6" onClick=
                {
                ()=>{
                    nav('/doctor')
                }
                } className={classes.typo}>
                <MedicationLiquidSharp className={classes.icon} />
                <span className={classes.typoText}>Doctor</span>
                </Typography>
                <Divider  component="li" />
                <Typography 
                onClick=
                {
                ()=>{
                    nav('/patient')
                }
                } variant="h6" className={classes.typo}>
                <SickSharp className={classes.icon}/>
                <span className={classes.typoText}>Patient</span>
                </Typography>
                <Divider component="li" />
                <Typography
                onClick=
                {
                ()=>{
                    nav('/nurse')
                }
                } variant="h6" className={classes.typo}>
                <Masks className={classes.icon} />
                <span className={classes.typoText}>Nurse</span>
                </Typography>
                <Divider component="li" />
                <Typography 
                  onClick={()=>
                    {
                        localStorage.removeItem('airmjaylogin')
                        nav('/login')
                    }}
                 variant="h6" className={classes.typo}>
                <LogoutSharp className={classes.icon} />
                <span>Logout</span>
                </Typography>
                <Divider component="li" />
                </div>
            </List>
        </div >
    );
}

export default Left;