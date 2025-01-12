import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import { sizing } from '@material-ui/system';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'column',
    // minWidth: 600,
    maxWidth: '100%',
    alignContent: "center",
    justifyContent: "center",
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minWidth: 600,
    maxWidth: '100%',
    // height: '60%',
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
  },
  content: {
    flex: '1 0 auto',
  },
  pictures: {
    width: '100%',
  },
  container:{
    alignContent: "center",
    alignItems: "center",
  },
  sizeSmall:{
    width: 5,
    alignContent: "left",
  },
  paper: {
    marginTop: theme.spacing(3),
    alignContent: "center",
    flexDirection: 'column',
    alignItems: 'center',
  },
}));


export default function ExerciseContainer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const pre = '/AGRFrontend/static/images/'
  const post = '.jpg'
  
  function createData(name, details) {
    return { name, details };
  }
  const rows = [
    createData('Main Muscle', props.main_muscle),
    createData('Detail Muscle', props.detail_muscle),
    createData('Other Muscle', props.other_muscle),
    createData('Type', props.type),
    createData('Mechanics', props.mechanics),
    createData('Equipment', props.equipment),
    createData('Difficulty', props.difficulty),
    // createData('Exercise Guide', props.Instructions),
  ]

  return (
    <Card className={classes.paper}>
      <CardContent>
        <Typography component="h5" variant="h5" align='center'>
          {props.exercise_name}
        </Typography>
      </CardContent>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.root} aria-label="collapsible table">
          <TableBody>
            <TableRow key="Instructions">
              <TableCell />
              <TableCell style={{ width: 100, fontSize: 16 }} variant="head">
                Instruction
              </TableCell>
              <TableCell style={{ width: 600, fontSize: 13 }} align="left">
                {(props.Instructions).map((line) => (<p>{line}</p>))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Grid container spacing={3} direction='row' justify="center"  alignItems="center">
                  {props.imgs.map(
                    (pic)=>
                    <Grid item xs={12} sm={6}>
                    <CardMedia
                      style = {{ height: 100, paddingTop: '90%'}}
                      image={pre.concat(pic,post)}
                      />
                    </Grid>
                  )}
                </Grid>
                <CardContent className={{marginBottom:'10%'}}></CardContent>
              </TableCell>
            </TableRow>
            <TableRow hover onClick={() => setOpen(!open)}>
              <TableCell colSpan={6} scope="row" align="center" size="small" width={5} alignContent="center" style={{ paddingBottom: 0, paddingTop: 0 }}>
                  <IconButton width={5} aria-label="expand row" size="small" >
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
              </TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
            <Collapse in={open} timeout="auto" unmountOnExit>
            {(rows).map((row) => (
                <React.Fragment>
                  <TableRow key={row.name}>
                    <TableCell colSpan={3} style={{width:200,fontSize: 16 }} size="small" align="center" variant="head">
                      {row.name}
                    </TableCell>
                    <TableCell colSpan={3} style={{width: 500,fontSize: 16 }} size="small" align="center" alignContent="center">
                      {row.details}
                    </TableCell>
                  </TableRow>
                  </React.Fragment>
                ))}
            </Collapse>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>

  );
}