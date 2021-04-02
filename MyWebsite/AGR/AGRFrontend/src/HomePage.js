import React from 'react';
import Cookies from 'js-cookie';
import {makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
import Card from '@material-ui/core/Card';
import MenuBar from './components/MenuBar';
import CustomScroller from 'react-custom-scroller';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  paper: {
    marginTop: theme.spacing(4),
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  Images:{
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function HomePage() {
  const classes = useStyles();
  let history = useHistory()
  const username = Cookies.get('username');
  const [RecommendMode,SetRecommendMode] = React.useState(true);
  const [GlossaryMode,SetGlossaryMode] = React.useState(false);
  const [PastMode,SetPastMode] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();


  const [fitnesslevel,setFitnesslevel] = React.useState('');
  const [gender,setGender] = React.useState('');
  const [goal,setGoal] = React.useState('');
  const [bmi,setBmi] = React.useState('');
  const [intensity,setIntensity] = React.useState('');
  const [location,setLocation] = React.useState('');

  const [FitnessMode, setFitnessMode] = React.useState(0);

  const handleChangeFitnessMode = (event, newValue) => {
    setFitnessMode(newValue);
  };

  const handleChangeMode1 = (event) => {
    SetRecommendMode(event.target.checked);
  };

  const handleChangeMode2 = (event) => {
    SetGlossaryMode(event.target.checked);
    SetPastMode(!event.target.checked);
  };

  const handleNext = () => {

    if(activeStep ===2){
      if(RecommendMode){
        switch(FitnessMode){
          case 1:
            history.push('/MuscleBuilding');
            break;
          case 2:
            history.push('/MuscleBuilding');
            break;
          case 3:
            history.push('/MuscleBuilding');
            break;
          default:
            alert("Please select a fitness mode!")
        }
      }
    }
    else if(activeStep ===1){
      if(fitnesslevel===""||gender===""||goal===""||bmi===""||intensity===""||location===""){
        alert("Any of the personal data cannot be empty!")
      }      
      else{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
    else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const genderHandleChange = (event) => {
    setGender(event.target.value);
  };

  const fitnessHandleChange = (event) => {
    setFitnesslevel(event.target.value);
  };

  const goalHandleChange = (event) => {
    setGoal(event.target.value);
  };

  const intensityHandleChange = (event) => {
    setIntensity(event.target.value);
  };

  const locationHandleChange = (event) => {
    setLocation(event.target.value);
  };
  
  const renderModeSelection = (
  <Grid container spacing={2}>
  <Grid item xs={12}>
    <FormControlLabel
      control={
        <Switch
          checked={RecommendMode}
          onChange={handleChangeMode1}
          name="RecommendMode"
          color="primary"
        />
      }
      style={(RecommendMode)?{color:'#ca2c92'}:{color:'#567ace'}}
      label={(RecommendMode)?"Recommender Mode":"Normal Mode"}
      
    />
    </Grid>
    <Grid item xs={12}>
    <Collapse in={!RecommendMode} timeout="auto" unmountOnExit>
    <FormControlLabel
      control={
        <Switch
          checked={GlossaryMode}
          onChange={handleChangeMode2}
          name="NormalMode"
          color="secondary"
        />
      }
      style={(GlossaryMode)?{color:'#ff3000'}:((PastMode)?{color:'#44975c'}:{color:'#465b73'})}
      label={(GlossaryMode)?"Glossary Mode":((PastMode)?"Past Routine Mode":"Toggle to choose your mode!")}
      
    />
    </Collapse>

    </Grid>
    </Grid>
    );

  const renderUserData = (
    <Grid container 
          spacing={2}
    >
      <Grid item xs={12}>
        <Typography component="h5">
          <i>Getting to know more about you </i>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl 
              fullWidth='true'
              className={classes.formControl}
        >
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            labelId="gender"
            id="gender"
            value={gender}
            onChange={genderHandleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'M'}>Male</MenuItem>
            <MenuItem value={'F'}>Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl 
        fullWidth='true'
        className={classes.formControl}
        >
          <InputLabel id="fitnesslevel">Fitness Level</InputLabel>
          <Select
            labelId="fitnesslevel"
            id="fitnesslevel"
            value={fitnesslevel}
            onChange={fitnessHandleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Beginer</MenuItem>
            <MenuItem value={2}>Intermediate</MenuItem>
            <MenuItem value={3}>Advance</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl 
        fullWidth='true'
        className={classes.formControl}
        >
          <InputLabel id="goal">Goal</InputLabel>
          <Select
            labelId="goal"
            id="goal"
            value={goal}
            onChange={goalHandleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Weight Loss</MenuItem>
            <MenuItem value={2}>Muscle Building</MenuItem>
            <MenuItem value={3}>Get Healthy</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl 
        fullWidth='true'
        className={classes.formControl}
        >
          <InputLabel id="intensity">Exercise Intensity</InputLabel>
          <Select
            labelId="intensity"
            id="intensity"
            value={intensity}
            onChange={intensityHandleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Low</MenuItem>
            <MenuItem value={1}>Low-Medium</MenuItem>
            <MenuItem value={2}>Medium</MenuItem>
            <MenuItem value={3}>Medium-High</MenuItem>
            <MenuItem value={3}>High</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl 
        fullWidth='true'
        className={classes.formControl}
        >
          <InputLabel id="location">Exercise Location</InputLabel>
          <Select
            labelId="location"
            id="location"
            value={location}
            onChange={locationHandleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Home</MenuItem>
            <MenuItem value={2}>Gym</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl 
        fullWidth='true'
        className={classes.formControl}
        >
          <TextField
            id="bmi"
            label="BMI"
            type="number"            
            inputProps={{
              step: 0.01,
              min:15,
              max:30,
            }}
            defaultValue={bmi}
            value={bmi}
            fullWidth
            onChange={e => setBmi(e.target.value)}
          />
        </FormControl>
    </Grid>
    </Grid>
  )

  const renderFitnessMode = (
    <div className={classes.grow}>
      {RecommendMode===true?(
      <Grid container 
      spacing={2}
      >
        <Grid item xs={12}>
          <Tabs value={FitnessMode} onChange={handleChangeFitnessMode} aria-label="simple tabs example" centered variant='fullWidth'>
              <Tab label="General Fitness" icon={<DirectionsRunIcon />} value={1} id="simple-tab-1" aria-controls="simple-tabpanel-1"/>
              <Tab label="Focused Muscle Building" icon={<FitnessCenterIcon />} value={2} id="simple-tab-2" aria-controls="simple-tabpanel-2"/>
              <Tab label="Endurance Training" icon={<AccessibilityIcon />} value={3} id="simple-tab-3" aria-controls="simple-tabpanel-3" />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <div role="tabpanel" hidden={FitnessMode!==1} id="wrapped-tabpanel-1" aria-labelledby="wrapped-tab-1">
            <Card>
              <CardMedia 
              component="img"
              alt="General Fitness"
              image="/AGRFrontend/static/images/GF.png"
              title="General Fitness"
              className={classes.Images}
              style = {{ height: 250, width:250}}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                General Fitness Description
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div role="tabpanel" hidden={FitnessMode!==2} id="wrapped-tabpanel-1" aria-labelledby="wrapped-tab-1">
          <Card>
              <CardMedia 
              component="img"
              alt="Focused Muscle Building"
              image="/AGRFrontend/static/images/MB.png"
              title="Focused Muscle Building"
              className={classes.Images}
              style = {{ height: 250, width:250}}
              /> 
            <CardContent>
              <Typography variant="h5" component="h2">
              General Fitness Description
              </Typography>
            </CardContent>
          </Card>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div role="tabpanel" hidden={FitnessMode!==3} id="wrapped-tabpanel-1" aria-labelledby="wrapped-tab-1">
            <Card>
              <CardMedia 
              component="img"
              alt="Endurance Training"
              image="/AGRFrontend/static/images/ET.png"
              title="Endurance Training"
              className={classes.Images}
              style = {{ height: 250, width:250}}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                General Fitness Description
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
          ):(
          <div>Glossary mode</div>
      )
      }
      
    </div>
  )
  React.useEffect(()=> {

    console.log("react response - UseEffect")

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username:username,
          }),
        };
        if (username!=''){
        fetch('/AGR/GetUserData', requestOptions)
          .then(function(response){
            console.log(response)
            if (!response.ok){
              throw new Error('Response not OK');
            }
            else{
              return response.json();
            }
          }).then(
            (data) => {
              console.log(data.gender)
              console.log(data.fitness_level)
              console.log(data.goal)
              console.log(data.intensity)
              console.log(data.bmi)
              console.log(data.location)

              setGender(data.gender);
              setFitnesslevel(data.fitness_level);
              setGoal(data.goal);
              setIntensity(data.intensity);
              setBmi(data.bmi);
              setLocation(data.location);
            },
            // (error) => {alert(error)}
          )
        }

  }, []);  
  
  return (
    <div className={classes.grow}>
      <MenuBar/>
      <Container component="main" maxWidth="md" style={{maxHeight: "90vh", overflow: 'auto'}}>
        <CustomScroller style={{ width: '100%', height: '100%' }}>
        <CssBaseline />
        <div className={classes.paper}>
          <Card>
          
          </Card>
        </div>
      </CustomScroller>
      </Container>
    </div>
  );
}