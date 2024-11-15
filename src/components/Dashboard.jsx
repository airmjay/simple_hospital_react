import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Container} from '@mui/material';
import { makeStyles } from '@mui/styles';
import doctor from '../assets/doctor.jpg'
import patient from '../assets/patient.jpg'
import branch from '../assets/branch.jpg'
import TableData from './Layouts/Table'
// import { ClassNames } from '@emotion/react';
const useStyle = makeStyles((theme)=> 
  (
    {
      img: 
      {
         width : '100%',
         height: '100%',
        //  display: 'none'
      },
      imgDiv: 
      {
        height: '150px !important',
        width:  '250px',
        overflow: 'hidden',
        [theme.breakpoints.down("sm")]:
        {
          display: 'none'
        },
        [theme.breakpoints.down("md")]:
        {
          display: 'none'
        }
      }
    }))
export default function Dashboard() {
  const classes = useStyle()
  return (
    <Container style={{marginTop : '20px',}}>
      <Typography
            variant="h4"
            component="div"
            sx={{ color: 'text.dark' }}
          >
            Dashboard
          </Typography>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
    <Grid size={{ xs: 12, md: 4 }}>
          
          <Card style={{width: '100%'}} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Number of Patient
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: 'text.secondary' }}
                >
                 (20)
                </Typography>
              </CardContent>
            </Box>
            <div className={classes.imgDiv}>
            <CardMedia
              component="img"
              className={classes.img}
              image={patient}
              
              alt="Live from space album cover"
            />
            </div>
          </Card>
            </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
          
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Number of Doctors
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            (20)
          </Typography>
        </CardContent>
      </Box>
      <div className={classes.imgDiv}>
      <CardMedia
        component="img"
        className={classes.img}
        image={doctor}
        alt="Live from space album cover"
      />
      </div>
    </Card>
      </Grid>
      <Grid  size={{ xs: 12, md: 4 }}>
          
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Number of Nurses
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            (20)
          </Typography>
        </CardContent>
          </Box>
      <div className={classes.imgDiv}>
      <CardMedia
        component="img"
        className={classes.img}
        image={branch}
        alt="Live from space album cover"
      />
      </div>
      
    </Card>
      </Grid>
    </Grid>
  </Box>
  
  <br/>
  <Typography variant='h4'> 
    Recent Activities
  </Typography>
  <TableData style={{marginTop : '10px !important'}}/>
  </Container>
  );
}