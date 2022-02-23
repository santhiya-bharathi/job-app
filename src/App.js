
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
import {useEffect, useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import PostAddIcon from '@mui/icons-material/PostAdd';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useFormik } from 'formik';
import * as yup from 'yup';


const API_URL = "https://job-node.herokuapp.com";

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
        <Button varient="text" color="inherit" onClick={()=>history.push("/joblist")}><PostAddIcon />Jobs</Button>
        <Divider />
        
        </div>
        </List>
      
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Switch>
      
      <Route exact path="/home">
          <Home />
        </Route>

        <Route path="/home/:id">
        <Moredetails />
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

function Home() {
  const [job, setJob] = useState([]);
 
  const getJobs = () => {
    fetch(`${API_URL}/job`, {method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setJob(mvs));
  };
  
  useEffect(getJobs, []);
 
  return (
    <section>
      {job.map(({title,company,briefdescription,salaryrange,experience,posteddate,_id})=>(<Jobs title={title} 
      key={_id}
      id={_id}
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

function Moredetails(){
  const history = useHistory();
  const {id} = useParams(); 
  console.log("the id is ", id);
const [jobdet, setJobdet] = useState({});

useEffect(()=>{
  fetch(`${API_URL}/job/${id}`, {method:"GET"})
  .then((data)=>data.json())
  .then((mv)=>setJobdet(mv));
}, [id]);

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
  
  const history = useHistory();

  const formvalidationschema = yup.object({
    title: yup.string().required("why not fill this title?").min(4),
    company: yup.string().required("why not fill this company?").min(1),
    department: yup.string().required("why not fill this department?").min(1),
    salaryrange: yup.string().required("why not fill this salaryrange?").min(1),
    experience: yup.string().required("why not fill this experience?").min(1),
    skillsrequired: yup.string().required("why not fill this skillsrequired?").min(1),
    minimumqualification: yup.string().required("why not fill this minimumqualification?").min(1),
    briefdescription: yup.string().required("why not fill this briefdescription?").min(1),
    detailedescription: yup.string().required("why not fill this detailedescription?").min(2),
    posteddate: yup.string().required("why not fill this posteddate?").min(1),
  });
  
  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: { title: "", company:"", department:"", salaryrange:"", experience:"",
     skillsrequired:"", minimumqualification:"", briefdescription:"", detailedescription:"", posteddate:""},
  
    validationSchema: formvalidationschema,
  
    onSubmit: (newMovies) => {
      console.log("onsubmit", newMovies);
      addMovie(newMovies);
    }
  });
  
  const addMovie =(newMovies)=>{
  
  console.log(newMovies)
    fetch(`${API_URL}/job`, {
      method:"POST",
      body: JSON.stringify(newMovies),
      headers: {'Content-Type': 'application/json'},
  }).then(()=>history.push("/home"));
    
  };

  return(
    <form onSubmit={handleSubmit} className="in-con">
<div className='two-flex'>
<div >
  <label className='title-flex'>Title</label>
  <div className='title-flex'>
  <input id="title" 
          name="title" 
          value = {values.title} 
          onChange={handleChange} 
          onBlur={handleBlur}
           label="enter title" 
           error={errors.title && touched.title}
           helperText={errors.title && touched.title && errors.title}
           minRows={2}
           className="text-area"
           />
           </div>
</div>
    
           
<div >
  <label className='title-flex'>Company</label>
  <div className='title-flex'>    
         <input id="company" 
          name="company" 
          value = {values.company} 
          onChange={handleChange} 
          onBlur={handleBlur}
          label="enter company name"
          error={errors.company && touched.company}
          helperText={errors.company && touched.company && errors.company}
          minRows={2}
          className="text-area" />
           </div>
</div>
</div>

         <div className='two-flex'> 
<div >
  <label className='title-flex'>Department</label>
  <div className='title-flex'>
          <input id="department" 
          name="department" 
          value = {values.department} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter department" 
          error={errors.department && touched.department}
           helperText={errors.department && touched.department && errors.department}
           minRows={2}
           className="text-area" />
            </div>
 </div>
     

 <div >
  <label className='title-flex'>Salary Range</label>
  <div className='title-flex'>
          <input id="salaryrange" 
          name="salaryrange" 
          value = {values.salaryrange} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter salaryrange" 
          error= {errors.salaryrange && touched.salaryrange}
          helperText= {errors.salaryrange && touched.salaryrange && errors.salaryrange}
          minRows={2}
          className="text-area"/>
           </div>
</div>
</div>


<div className='two-flex'> 
<div >
  <label className='title-flex'>Experience</label>
  <div className='title-flex'>
          <input id="experience" 
          name="experience" 
          value = {values.experience} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter experience"
          error=  {errors.experience && touched.experience}
          helperText= {errors.experience && touched.experience && errors.experience}
          minRows={2}
          className="text-area"/>
           </div>
</div>

<div >
  <label className='title-flex'>Skills</label>
  <div className='title-flex'>
          <input id="skillsrequired" 
          name="skillsrequired" 
          value = {values.skillsrequired} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter skillsrequired"
          error=  {errors.skillsrequired && touched.skillsrequired}
          helperText= {errors.skillsrequired && touched.skillsrequired && errors.skillsrequired}
          minRows={2}
          className="text-area" />
           </div>
</div>
</div>

<div className='two-flex'> 
<div >
  <label className='title-flex'>Minimum Qualification</label>
  <div className='title-flex'>
          <input id="minimumqualification" 
          name="minimumqualification" 
          value = {values.minimumqualification} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter minimumqualification"
          error=  {errors.minimumqualification && touched.minimumqualification}
          helperText= {errors.minimumqualification && touched.minimumqualification && errors.minimumqualification}
          minRows={2}
          className="text-area"  />
           </div>
</div>

<div >
  <label className='title-flex'>Posting Date(enter like dec 20 2021)</label>
  <div className='title-flex'>
          <input id="posteddate" 
          name="posteddate" 
          value = {values.posteddate} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter date like dec 20 2021"
          error=  {errors.posteddate && touched.posteddate}
          helperText= {errors.posteddate && touched.posteddate && errors.posteddate}
          minRows={6}
          className="text-area" />
           </div>
</div>
</div>

<div >
  <label className='title-flex'>Brief Description</label>
  <div className='title-flex'>
          <TextareaAutosize id="briefdescription" 
          name="briefdescription" 
          value = {values.briefdescription} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter briefdescription"
          error=  {errors.briefdescription && touched.briefdescription}
          helperText= {errors.briefdescription && touched.briefdescription && errors.briefdescription}
          minRows={6}
          className="text-area-details" />
           </div>
</div>



<div >
  <label className='title-flex'>Detaile Description</label>
  <div className='title-flex'>
          <TextareaAutosize id="detailedescription" 
          name="detailedescription" 
          value = {values.detailedescription} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter detailedescription"
          error=  {errors.detailedescription && touched.detailedescription}
          helperText= {errors.detailedescription && touched.detailedescription && errors.detailedescription}
          minRows={6}
          className="text-area-details" />
           </div>
</div>


          <Button type="submit" variant="contained">Post Details</Button>
          </form>
  );
}

function Editpostedjob(){

  const {id} = useParams();

const [jobdet, setJobdet] = useState(null);
useEffect(()=>{
  fetch(`${API_URL}/job/${id}`, {method:"GET"})
  .then((data)=>data.json())
  .then((mv)=>setJobdet(mv));
}, [id]);

  return jobdet? <Updatepostedjob jobdet={jobdet}/>:"";
  
}

function Updatepostedjob({jobdet}){
  const history = useHistory();

  const formvalidationschema = yup.object({
    title: yup.string().required("why not fill this title?").min(4),
    company: yup.string().required("why not fill this company?").min(1),
    department: yup.string().required("why not fill this department?").min(1),
    salaryrange: yup.string().required("why not fill this salaryrange?").min(1),
    experience: yup.string().required("why not fill this experience?").min(1),
    skillsrequired: yup.string().required("why not fill this skillsrequired?").min(1),
    minimumqualification: yup.string().required("why not fill this minimumqualification?").min(1),
    briefdescription: yup.string().required("why not fill this briefdescription?").min(1),
    detailedescription: yup.string().required("why not fill this detailedescription?").min(2),
    posteddate: yup.string().required("why not fill this posteddate?").min(1),
  });

  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: { title: jobdet.title,
       company:jobdet.company,
       department:jobdet.department, 
       experience:jobdet.experience,
       salaryrange:jobdet.salaryrange, 
       skillsrequired:jobdet.skillsrequired,
       minimumqualification:jobdet.minimumqualification,
       briefdescription:jobdet.briefdescription,
       detailedescription:jobdet.detailedescription,
       posteddate:jobdet.posteddate,
       },

    validationSchema: formvalidationschema,
  
    onSubmit: (updatedMovie) => {
      console.log("onsubmit", updatedMovie);
      editMovie(updatedMovie);
    }
  });

  const editMovie =(updatedMovie)=>{
   
    console.log(updatedMovie);

  fetch(`${API_URL}/job/${jobdet._id}`, {
    method:"PUT",
    body: JSON.stringify(updatedMovie),
    headers: {'Content-Type': 'application/json'},
}).then(()=>history.push("/postedjob"))
  };
return(
  <form onSubmit={handleSubmit} className="in-con">
<div className='two-flex'>
<div >
  <label className='title-flex'>Title</label>
  <div className='title-flex'>
  <input id="title" 
          name="title" 
          value = {values.title} 
          onChange={handleChange} 
          onBlur={handleBlur}
           label="enter title" 
           error={errors.title && touched.title}
           helperText={errors.title && touched.title && errors.title}
           minRows={2}
           className="text-area"
           />
           </div>
</div>
    
           
<div >
  <label className='title-flex'>Company</label>
  <div className='title-flex'>    
         <input id="company" 
          name="company" 
          value = {values.company} 
          onChange={handleChange} 
          onBlur={handleBlur}
          label="enter company name"
          error={errors.company && touched.company}
          helperText={errors.company && touched.company && errors.company}
          minRows={2}
          className="text-area" />
           </div>
</div>
</div>

         <div className='two-flex'> 
<div >
  <label className='title-flex'>Department</label>
  <div className='title-flex'>
          <input id="department" 
          name="department" 
          value = {values.department} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter department" 
          error={errors.department && touched.department}
           helperText={errors.department && touched.department && errors.department}
           minRows={2}
           className="text-area" />
            </div>
 </div>
     

 <div >
  <label className='title-flex'>Salary Range</label>
  <div className='title-flex'>
          <input id="salaryrange" 
          name="salaryrange" 
          value = {values.salaryrange} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter salaryrange" 
          error= {errors.salaryrange && touched.salaryrange}
          helperText= {errors.salaryrange && touched.salaryrange && errors.salaryrange}
          minRows={2}
          className="text-area"/>
           </div>
</div>
</div>


<div className='two-flex'> 
<div >
  <label className='title-flex'>Experience</label>
  <div className='title-flex'>
          <input id="experience" 
          name="experience" 
          value = {values.experience} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter experience"
          error=  {errors.experience && touched.experience}
          helperText= {errors.experience && touched.experience && errors.experience}
          minRows={2}
          className="text-area"/>
           </div>
</div>

<div >
  <label className='title-flex'>Skills</label>
  <div className='title-flex'>
          <input id="skillsrequired" 
          name="skillsrequired" 
          value = {values.skillsrequired} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter skillsrequired"
          error=  {errors.skillsrequired && touched.skillsrequired}
          helperText= {errors.skillsrequired && touched.skillsrequired && errors.skillsrequired}
          minRows={2}
          className="text-area" />
           </div>
</div>
</div>

<div className='two-flex'> 
<div >
  <label className='title-flex'>Minimum Qualification</label>
  <div className='title-flex'>
          <input id="minimumqualification" 
          name="minimumqualification" 
          value = {values.minimumqualification} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter minimumqualification"
          error=  {errors.minimumqualification && touched.minimumqualification}
          helperText= {errors.minimumqualification && touched.minimumqualification && errors.minimumqualification}
          minRows={2}
          className="text-area"  />
           </div>
</div>

<div >
  <label className='title-flex'>Posting Date(enter like dec 20 2021)</label>
  <div className='title-flex'>
          <input id="posteddate" 
          name="posteddate" 
          value = {values.posteddate} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter date like dec 20 2021"
          error=  {errors.posteddate && touched.posteddate}
          helperText= {errors.posteddate && touched.posteddate && errors.posteddate}
          minRows={6}
          className="text-area" />
           </div>
</div>
</div>

<div >
  <label className='title-flex'>Brief Description</label>
  <div className='title-flex'>
          <TextareaAutosize id="briefdescription" 
          name="briefdescription" 
          value = {values.briefdescription} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter briefdescription"
          error=  {errors.briefdescription && touched.briefdescription}
          helperText= {errors.briefdescription && touched.briefdescription && errors.briefdescription}
          minRows={6}
          className="text-area-details" />
           </div>
</div>



<div >
  <label className='title-flex'>Detaile Description</label>
  <div className='title-flex'>
          <TextareaAutosize id="detailedescription" 
          name="detailedescription" 
          value = {values.detailedescription} 
          onChange={handleChange} 
          onBlur={handleBlur}  label="enter detailedescription"
          error=  {errors.detailedescription && touched.detailedescription}
          helperText= {errors.detailedescription && touched.detailedescription && errors.detailedescription}
          minRows={6}
          className="text-area-details" />
           </div>
</div>
       
        <Button type="submit" variant="contained">Post Details</Button>
        </form>
);
}



function Postedjob() {
  const [job, setJob] = useState([]);
 
  const getJobs = () => {
    fetch(`${API_URL}/job`, {method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setJob(mvs));
  };
  
  useEffect(getJobs, []);

  const deleteMovie = (_id) =>{
    fetch(`${API_URL}/job/${_id}`, {method:"DELETE"})
    .then(()=>getJobs());
  };
  const history = useHistory();
  return (
    <div>
      {job.map(({title,company,briefdescription,salaryrange,experience,posteddate,_id})=>(<Postedjobsdetails title={title} 
       key={_id}
       id={_id}
      company={company}
       briefdescription={briefdescription} 
       salaryrange={salaryrange} 
       experience={experience}
       posteddate={posteddate}
       deleteButton= {<IconButton aria-label="delete" color="error"
       onClick={()=> deleteMovie(_id)}>
       <DeleteIcon />
     </IconButton>}
       editButton= {<IconButton 
        aria-label="edit"  color="success"
       onClick={()=>history.push("/postedjob/edit/" + _id)}>
       <EditIcon />
     </IconButton>}
       />))}
    </div>
  );
}

function Postedjobsdetails({title,company,briefdescription,salaryrange,experience,id,deleteButton,editButton}){
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

{editButton}{deleteButton}
    </div>
  </div>
  </div>
  );
}


function Listjob(){
  const [joblist, setJoblist] = useState([]);
 
  const getJobslist = () => {
    fetch(`${API_URL}/joblist`, {method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setJoblist(mvs));
  };
  
  useEffect(getJobslist, []);
  return(
    <div>
{joblist.map(({jobrole, company, skills, experience, lastdate,_id})=>(<Listjobdetails jobrole={jobrole} 
key={_id}
id={_id}
company={company} 
skills={skills} 
experience={experience}
 lastdate={lastdate}/>))}
    </div>
  );
}


function Listjobdetails({jobrole, company, skills, experience, lastdate}){
  return(
    <div className='container'>
    <div className="full-details">
    <p className='title title-margin'><span className='span'>jobrole :  </span> {jobrole}</p>
    <p className='title title-margin'><span className='span'>company :  </span> {company}</p>
    <p className='title title-margin'><span className='span'>skills :  </span> {skills}</p>
    <p className='title title-margin'><span className='span'>experience :  </span> {experience}</p>
    <p className='title title-margin'><span className='span'>lastdate :  </span> {lastdate}</p>
    </div>
    </div>
  );
}

function User(){
  const [userlist, setUserlist] = useState([]);
 
  const getUser = () => {
    fetch(`${API_URL}/user`, {method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setUserlist(mvs));
  };
  
  useEffect(getUser, []);
  const history = useHistory();
  return(
    <section>
{userlist.map(({firstname,lastname,mobile,portfolio,email,about,address,education,skill,experience,project,_id})=>(<Userdetails firstname={firstname}
key={_id}
id={_id}
lastname={lastname}
mobile={mobile}
portfolio={portfolio}
email={email}
about={about}
address={address}
education={education}
skill={skill}
experience={experience}
project={project}
editButton= {<IconButton 
  aria-label="edit"  color="success"
 onClick={()=>history.push("/userdetail/edit/" + _id)}>
 <EditIcon />
</IconButton>}
/>))}
    </section>
  );
}

function Userdetails({firstname,lastname,mobile,portfolio,email,about,address,education,skill,experience,project,id,editButton}){
  return(
    <div className='container'>
    <div className="full-details">
    <p className='title title-margin'><span className='span'>firstname :  </span> {firstname}</p>
    <p className='title title-margin'><span className='span'>lastname :  </span> {lastname}</p>
    <p className='title title-margin'><span className='span'>mobile :  </span> {mobile}</p>
    <p className='title title-margin'><span className='span'>portfolio :  </span> {portfolio}</p>
    <p className='title title-margin'><span className='span'>email :  </span> {email}</p>
    <p className='title title-margin'><span className='span'>about :  </span> {about}</p>
    <p className='title title-margin'><span className='span'>address :  </span> {address}</p>
    <p className='title title-margin'><span className='span'>education :  </span> {education}</p>
    <p className='title title-margin'><span className='span'>skill :  </span> {skill}</p>
    <p className='title title-margin'><span className='span'>experience :  </span> {experience}</p>
    <p className='title title-margin'><span className='span'>project :  </span> {project}</p>

    {editButton}
    </div>
    </div>
  );
}

function EditUserDetail(){
  const {id} = useParams();

  const [userdet, setUserdet] = useState(null);
  useEffect(()=>{
    fetch(`${API_URL}/user/${id}`, {method:"GET"})
    .then((data)=>data.json())
    .then((mv)=>setUserdet(mv));
  }, [id]);
  
    return userdet? <UpdateUserDetail userdet={userdet}/>:"";
    
}

function UpdateUserDetail({userdet}){
  const history = useHistory();

  const formvalidationschema = yup.object({
    firstname: yup.string().required("why not fill this firstname?").min(2),
    lastname: yup.string().required("why not fill this lastname?").min(1),
    mobile: yup.number().required("why not fill this mobile?").min(10),
    portfolio: yup.string().required("why not fill this portfolio?").min(1),
    email: yup.string().required("why not fill this email?").min(1),
    about: yup.string().required("why not fill this about?").min(1),
    address: yup.string().required("why not fill this address?").min(1),
    education: yup.string().required("why not fill this education?").min(1),
    skill: yup.string().required("why not fill this skill?").min(2),
    experience: yup.string().required("why not fill this experience?").min(1),
    project: yup.string().required("why not fill this project?").min(1),
  });

  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: { firstname: userdet.firstname,
      lastname:userdet.lastname,
      mobile:userdet.mobile, 
      portfolio:userdet.portfolio,
      email:userdet.email, 
      about:userdet.about,
      address:userdet.address,
      education:userdet.education,
      skill:userdet.skill,
      experience:userdet.experience,
      project:userdet.project
       },

    validationSchema: formvalidationschema,
  
    onSubmit: (updatedMovie) => {
      console.log("onsubmit", updatedMovie);
      editMovie(updatedMovie);
    }
  });

  const editMovie =(updatedMovie)=>{
   
    console.log(updatedMovie);

  fetch(`${API_URL}/user/${userdet._id}`, {
    method:"PUT",
    body: JSON.stringify(updatedMovie),
    headers: {'Content-Type': 'application/json'},
}).then(()=>history.push("/userdetail"))
  };
  return(
<form onSubmit={handleSubmit} className="in-con">


      <TextareaAutosize id="firstname" 
      name="firstname" 
      value = {values.firstname} 
      onChange={handleChange} 
      onBlur={handleBlur}
       label="enter your firstname" 
       error={errors.firstname && touched.firstname}
       helperText={errors.firstname && touched.firstname && errors.firstname}
       style={{ width: 200 }}/>
       
     
     <TextareaAutosize id="lastname" 
      name="lastname" 
      value = {values.lastname} 
      onChange={handleChange} 
      onBlur={handleBlur}
      label="enter your lastname"
      error={errors.lastname && touched.lastname}
      helperText={errors.lastname && touched.lastname && errors.lastname}
      style={{ width: 200 }} />
      

      <TextareaAutosize id="mobile" 
      name="mobile" 
      value = {values.mobile} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter your mobile number" 
      error={errors.mobile && touched.mobile}
       helperText={errors.mobile && touched.mobile && errors.mobile}
       style={{ width: 200 }} />
      

      <TextareaAutosize id="portfolio" 
      name="portfolio" 
      value = {values.portfolio} 
      onChange={handleChange} 
      onBlur={handleBlur}  label="enter your portfolio" 
      error= {errors.portfolio && touched.portfolio}
      helperText= {errors.portfolio && touched.portfolio && errors.portfolio}
      style={{ width: 200 }} />
     
      <TextareaAutosize id="email" 
      name="email" 
      value = {values.email} 
      onChange={handleChange} 
      onBlur={handleBlur}  label="enter your email"
      error=  {errors.email && touched.email}
      helperText= {errors.email && touched.email && errors.email}
      style={{ width: 200 }} />

      <TextareaAutosize id="about" 
      name="about" 
      value = {values.about} 
      onChange={handleChange} 
      onBlur={handleBlur}  label="enter about"
      error=  {errors.about && touched.about}
      helperText= {errors.about && touched.about && errors.about}
      style={{ width: 200 }} />

      <TextareaAutosize id="address" 
      name="address" 
      value = {values.address} 
      onChange={handleChange} 
      onBlur={handleBlur}  label="enter your address"
      error=  {errors.address && touched.address}
      helperText= {errors.address && touched.address && errors.address}
      style={{ width: 200 }} />

      <TextareaAutosize id="education" 
      name="education" 
      value = {values.education} 
      onChange={handleChange} 
      onBlur={handleBlur}  label="enter your education"
      error=  {errors.education && touched.education}
      helperText= {errors.education && touched.education && errors.education}
      style={{ width: 200 }} />

      <TextareaAutosize id="skill" 
      name="skill" 
      value = {values.skill} 
      onChange={handleChange} 
      onBlur={handleBlur}  label="enter your skill"
      error=  {errors.skill && touched.skill}
      helperText= {errors.skill && touched.skill && errors.skill}
      style={{ width: 200 }} />

      <TextareaAutosize id="experience" 
        name="experience" 
        value = {values.experience} 
        onChange={handleChange} 
        onBlur={handleBlur}  label="enter your experience"
        error=  {errors.experience && touched.experience}
        helperText= {errors.experience && touched.experience && errors.experience}
        style={{ width: 200 }} />

      <TextareaAutosize id="project" 
        name="project" 
        value = {values.project} 
        onChange={handleChange} 
        onBlur={handleBlur}  label="enter your project"
        error=  {errors.project && touched.project}
        helperText= {errors.project && touched.project && errors.project}
        style={{ width: 200 }} />
     
      <Button type="submit" variant="contained">Post Details</Button>
      </form>
  );
}

