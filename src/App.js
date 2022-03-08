
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import {useEffect, useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
// import PostAddIcon from '@mui/icons-material/PostAdd';
import { EditUserDetail } from './users/EditUserDetail';
import { User, Profile } from './users/User';
// import { Listjob } from './joblistdetails/Listjob';
import { Moredetails, Home } from './homepage/Home';
import { Addjob } from './job add and edit folder/Addjob';
import { Postedjob } from './job add and edit folder/Postedjob';
import { Editpostedjob } from './job add and edit folder/Editpostedjob';
import { LoginFailed, LoginPage } from './loginandsignup/LoginPage';
import { SignupFailed, SignupPage } from './loginandsignup/SignupPage';


export const API_URL = "https://job-node.herokuapp.com";

function App() {
  const [mode, setMode] = useState("dark");

  
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});

console.log(setMode);

// const history = useHistory();

const [job, setJob] = useState([]);

console.log(job);
useEffect(()=>{
  fetch(`${API_URL}/job`, {method:"GET"})
  .then((data)=>data.json())
  .then((mvs)=>setJob(mvs));
}, []);

  return (
    <ThemeProvider theme={darkTheme}>
    <Paper elevation={3} style={{borderRadius:"0px",minHeight:"100vh"}}>
    <div className="App">
  
       
        <Switch>
      
        <Route exact path="/">
      <LoginPage />
        </Route>

        <Route path="/signup">
          <SignupPage />
        </Route>

        <Route path="/home/:id">
        <Moredetails />
        </Route>

         <Route path="/home">
         <Home />
        </Route>

        <Route path="/userdetail/edit/:id">
        <EditUserDetail />
        </Route>

        <Route path="/userdetail">
          <User />
        </Route>

        <Route path="/postuser">
        <Profile />
        </Route>

        <Route path="/postjob">
          <Addjob />
        </Route>

        <Route path="/postedjob/edit/:id">
        <Editpostedjob />
        </Route>

        <Route path="/postedjob">
          <Postedjob />
        </Route>

    
        {/* <Route path="/joblist">
          <Listjob />
        </Route> */}

        <Route path="/signupfailed">
          <SignupFailed />
        </Route>

        <Route path="/loginfailed">
          <LoginFailed />
        </Route>

        </Switch>
   
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;


export function Navbar(){
  const history = useHistory();

  
  return(
    
    <div>
 
   <div className='logo-path'>
         <h1>Job Portal App</h1>
         
          <div>
        <Button varient="text" color="inherit" onClick={()=>history.push("/home")}><HomeIcon />Home</Button>
      
       
        <Button varient="text" color="inherit" onClick={()=>history.push("/postjob")}><AddIcon />Post Job</Button>
      
        <Button varient="text" color="inherit" onClick={()=>history.push("/postedjob")}><CheckIcon />Posted Job</Button>
       
        {/* <Button varient="text" color="inherit" onClick={()=>history.push("/joblist")}><PostAddIcon />Available Jobs</Button> */}
        <Button varient="text" color="inherit" onClick={()=>history.push("/postuser")}><PersonIcon />Profile</Button>
        <Button varient="text" color="inherit" onClick={()=>history.push("/userdetail")}><PersonIcon />view Profile</Button>
        </div>
      
        </div>
    </div>
  );
}


// function Toolbar(){
//   const history = useHistory();

  
//   return(
//     <div>
 
//    <div className='logo-path'>
//          <h1>Job Portal App</h1>
         
//           <div>
//         <Button varient="text" color="inherit" onClick={()=>history.push("/home")}><HomeIcon />Home</Button>
       
//         <Button varient="text" color="inherit" onClick={()=>history.push("/userdetail")}><PersonIcon />Profile</Button>
       
//         <Button varient="text" color="inherit" onClick={()=>history.push("/postjob")}><AddIcon />Post Job</Button>
      
//         <Button varient="text" color="inherit" onClick={()=>history.push("/postedjob")}><CheckIcon />Posted Job</Button>
       
//         <Button varient="text" color="inherit" onClick={()=>history.push("/joblist")}><PostAddIcon />Available Jobs</Button>
//         </div>
      
//         </div>
//     </div>
//   );
// }