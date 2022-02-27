
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
import { Switch, Route } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useEffect, useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { EditUserDetail } from './users/EditUserDetail';
import { User } from './users/User';
import { Listjob } from './joblistdetails/Listjob';
import { Moredetails, Home } from './homepage/Home';
import { Addjob } from './job add and edit folder/Addjob';
import { Postedjob } from './job add and edit folder/Postedjob';
import { Editpostedjob } from './job add and edit folder/Editpostedjob';



export const API_URL = "https://job-node.herokuapp.com";

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
        <Button varient="text" color="inherit" onClick={()=>history.push("/userdetail")}><PersonIcon />Profile</Button>
        <Divider />
        <Button varient="text" color="inherit" onClick={()=>history.push("/postjob")}><AddIcon />Post Job</Button>
        <Divider />
        <Button varient="text" color="inherit" onClick={()=>history.push("/postedjob")}><CheckIcon />Posted Job</Button>
        <Divider />
        <Button varient="text" color="inherit" onClick={()=>history.push("/joblist")}><PostAddIcon />Available Jobs</Button>
        <Divider />
        
        </div>
        </List>
      
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Switch>
      
        <Route exact path="/">
        <Home />
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

        <Route path="/postjob">
          <Addjob />
        </Route>

        <Route path="/postedjob/edit/:id">
        <Editpostedjob />
        </Route>

        <Route path="/postedjob">
          <Postedjob />
        </Route>

    
        <Route path="/joblist">
          <Listjob />
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


