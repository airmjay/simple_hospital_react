import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Left from '../components/Layouts/Left'
import Footer from '../components/Layouts/Footer'
import Grid from '@mui/material/Grid2';
import { Outlet, useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useEffect } from 'react';

const useStyles = makeStyles(() =>
({
  leftBar: {
    display: 'none'
  },
})
)
export default function Main() {
  const nav = useNavigate()
  useEffect(()=>
    {
      if(!localStorage.getItem('airmjaylogin'))
        {
           nav('/login')
        }
    },[])
  const classes = useStyles()
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
              SparkLab Hospital
            </Typography>
            <Typography variant="h6" component="div" >
              {localStorage.getItem('airmjaylogin')}
            </Typography>
            <Button color="inherit"><Badge badgeContent={4} color="secondary">
              <MailIcon color="action" />
            </Badge></Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid className={classes.navbar} container spacing={2}>
          <Grid size={2}>
            <Left />
          </Grid>
          <Grid size={10}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );

}
