
import './App.css';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { Switch, Route, useParams } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import PostAddIcon from '@mui/icons-material/PostAdd';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function App() {
  const [mode, setMode] = useState("dark");
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
  const drawerWidth = 240;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const history = useHistory();

const INITIAL_JOBS = [{
  title:"Frontend Developer",
  company :"hp",
  briefdescription :"Front end developer with excellent knowledge in React js",
  detailedescription :"You have to build end to end frontend applications with latest software. Knowledge on Node js will be an added advantage.",
  skillsrequired :"React js",
  experience :"1-2 years",
  minimumqualification :"Degree",
  salaryrange :"100000 - 200000",
  department :"IT",
  posteddate :"jan 25 2022"
},
{
  title:"Developer",
  company :"SG Automobiles",
  briefdescription :"Quality assurance engineer with minimum 2 years of experience is required",
  detailedescription :"You have to build end to end frontend applications with latest software. Knowledge on Node js will be an added advantage.",
  skillsrequired :"React js",
  experience :"1-2 years",
  minimumqualification :"Degree",
  salaryrange :"100000 - 200000",
  department :"IT",
  posteddate :"jan 22 2022"
},
{
  title:"Angular developer Fresher",
  company :"SG Automobiles",
  briefdescription :"Quality assurance engineer with minimum 2 years of experience is required",
  detailedescription :"Ability to debug the errors .AWS knowledge is an added advantage.",
  skillsrequired :"React js",
  experience :"1-2 years",
  minimumqualification :"Degree",
  salaryrange :"300000 - 400000",
  department :"IT",
  posteddate :"jan 20 2022"
},
{
  title:"Developer",
  company :"rj solutions",
  briefdescription :"Front end developer with excellent knowledge in React js",
  detailedescription :"You have to build end to end frontend applications with latest software. Knowledge on Node js will be an added advantage.",
  skillsrequired :"React js",
  experience :"3-4 years",
  minimumqualification :"Degree",
  salaryrange :"200000 - 300000",
  department :"IT",
  posteddate :"jan 15 2021"
},
{
  title:"Backend Developer",
  company :"tcs",
  briefdescription :"Back end developer with excellent knowledge in React js",
  detailedescription :"You have to build end to end Backend applications with latest software. Knowledge on mongoDB will be an added advantage.",
  skillsrequired :"Node js",
  experience :"2-3 years",
  minimumqualification :"Degree",
  salaryrange :"100000 - 300000",
  department :"IT",
  posteddate :"dec 10 2021"
},
{
  title:"Frontend Developer",
  company :"hp",
  briefdescription :"Front end developer with excellent knowledge in React js",
  detailedescription :"You have to build end to end frontend applications with latest software. Knowledge on Node js will be an added advantage.",
  skillsrequired :"React js",
  experience :"1-2 years",
  minimumqualification :"Degree",
  salaryrange :"100000 - 200000",
  department :"IT",
  posteddate :"nov 20 2021"
}]
const [job, setJob] = useState(INITIAL_JOBS);
  return (
    <ThemeProvider theme={darkTheme}>
    <Paper elevation={3} style={{borderRadius:"0px",minHeight:"100vh"}}>
    <div className="App">
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div className='heading'>
          Job Portal App
          <Button varient="text" color="inherit" style={{marginLeft:"auto"}} onClick={()=>setMode(mode==="light"? "dark":"light")}> {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} {mode==="light"? "Dark":"Light"}Mode</Button>
          </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <div className='drawer-flex'>
        <Button varient="text" color="inherit" onClick={()=>history.push("/home")}><HomeIcon />Home</Button>
        <Divider />
        <Button varient="text" color="inherit" onClick={()=>history.push("/homepage")}><PersonIcon />Profile</Button>
        <Divider />
        <Button varient="text" color="inherit" onClick={()=>history.push("/postjob")}><AddIcon />Post Job</Button>
        <Divider />
        <Button varient="text" color="inherit" onClick={()=>history.push("/postedjob")}><CheckIcon />Posted Job</Button>
        <Divider />
        <Button varient="text" color="inherit" onClick={()=>history.push("/homepage")}><PostAddIcon />Jobs</Button>
        <Divider />
        
        </div>
        </List>
      
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Switch>
      
      <Route exact path="/home">
          <Home job={job}/>
        </Route>

        <Route path="/postjob">
          <Addjob job={job} setJob={setJob}/>
        </Route>

        <Route path="/home/:id">
        <Moredetails job={job}/>
        </Route>

        <Route path="/postedjob">
          <Postedjob job={job} setJob={setJob}/>
        </Route>

        </Switch>
      </Main>
    </Box>

    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;

function Home({job}) {
 
  return (
    <section>
      {job.map(({title,company,briefdescription,salaryrange,experience,posteddate},index)=>(<Jobs title={title} 
      id={index}
      company={company}
       briefdescription={briefdescription} 
       salaryrange={salaryrange} 
       experience={experience}
       posteddate={posteddate}/>))}
    </section>
   
  );
}

function Jobs({title,company,briefdescription,salaryrange,experience,posteddate,id}){
  const history = useHistory();
  return(
    <div className='container'>
    <div className="full-details">
      <div className='div-flex'>
    <h2 className='title title-mar'>{title}</h2>
    <h4 className='title title-mar'><span className='span'>Company : </span> {company}</h4>
    
    </div>
    <hr className='hr-line'/>
    <div className='div-flex'>
    <p className='title title-margin'>{briefdescription}</p>
    <p className='title title-margin'><span className='span'>Salary :  </span> {salaryrange}</p>
    <p className='title title-margin'><span className='span'>Experience :  </span> {experience}</p>
    </div>
    <div className='button-date-flex'>
    <Button variant="contained"  onClick={()=>{console.log(id);
        history.push("/home/"+id);
        }}>view more</Button>
    <p className='title'><span className='span'>Posted on :  </span> {posteddate}</p>
    </div>
  </div>
  </div>
  );
}

function Moredetails({job}){
  const history = useHistory();
  const {id} = useParams();
  const jobdet = job[id]; 
  console.log(jobdet);
  return(
    <div className='more-details-div'>
    <h2 className='title title-margin'><span className='span'>Role : </span>{jobdet.title}</h2>
    <p className='title title-margin'> <span className='span'>Company : </span> {jobdet.company}</p>
    <p className='title title-margin'><span className='span'>Department :  </span> {jobdet.department}</p>
    <p className='title title-margin'><span className='span'>Salary :  </span> {jobdet.salaryrange}</p>
    <p className='title title-margin'><span className='span'>Experience :  </span> {jobdet.experience}</p>
    <p className='title title-margin'><span className='span'>Skills :  </span> {jobdet.skillsrequired}</p>
    <p className='title title-margin'><span className='span'>Qualification :  </span> {jobdet.minimumqualification}</p>
    <p className='title title-margin'><b>Brief-description : </b>{jobdet.briefdescription}</p>
    <p className='title title-margin'><span className='span'>Detailes:</span>{jobdet.detailedescription}</p>
    
    <div className='button-back-flex'>
    <Button onClick={()=>history.push("/home") }variant="outlined"><KeyboardBackspaceIcon/>Back</Button>
    
    </div>
    </div>
  );
}

function Addjob(){
  
  return(
    <div>
heloo
    </div>
  );
}



function Postedjob({job, setJob}) {
  return (
    <div>
      {job.map(({title,company,briefdescription,salaryrange,experience,posteddate},index)=>(<Postedjobsdetails title={title} 
      id={index}
      company={company}
       briefdescription={briefdescription} 
       salaryrange={salaryrange} 
       experience={experience}
       posteddate={posteddate}/>))}
    </div>
  );
}

function Postedjobsdetails({title,company,briefdescription,salaryrange,experience,posteddate,id}){
  const history = useHistory();
  return(
    <div className='container'>
    <div className="full-details">
      <div className='div-flex'>
    <h2 className='title title-mar'>{title}</h2>
    <h4 className='title title-mar'><span className='span'>Company : </span> {company}</h4>
    
    </div>
    <hr className='hr-line'/>
    <div className='div-flex'>
    <p className='title title-margin'>{briefdescription}</p>
    <p className='title title-margin'><span className='span'>Salary :  </span> {salaryrange}</p>
    <p className='title title-margin'><span className='span'>Experience :  </span> {experience}</p>
    </div>
    <div className='button-date-flex'>
    <Button variant="contained"  onClick={()=>{console.log(id);
        history.push("/home/"+id);
        }}>view more</Button>
    </div>
  </div>
  </div>
  );
}