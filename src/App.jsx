import {createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./components/Login"
import Main from './components/Main'
import { makeStyles } from "@mui/styles";
// import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider} from '@mui/material/styles';
import { theme } from "./theme/Theme";
import  Dashboard  from "./components/Dashboard";
import Appointment from "./components/Appointment";
import Nurse from "./components/Nurse";
import Doctor from "./components/Doctor";
import Patient from "./components/Patient";
// import { useEffect } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children : [
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/appointment',
        element: <Appointment/>
      },
      
      {
        path: '/nurse',
        element: <Nurse/>
      },
      {
        path: '/patient',
        element: <Patient/>
      },
      {
        path: '/doctor',
        element: <Doctor/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
]);
const useStyle = makeStyles(()=> ({
     remove : 
     {
      margin : "0px",
     }
}))
function App() {

  const classes = useStyle()
  return (
    
     <ThemeProvider theme={theme}>
     <RouterProvider router={router} className={classes.remove} />
     </ThemeProvider>
  )
}

export default App
