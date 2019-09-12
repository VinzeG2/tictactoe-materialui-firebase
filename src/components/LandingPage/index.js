import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, Button } from '@material-ui/core';
import * as ROUTES from '../../constants/routes'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: 0,
      margin: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#3f51b5',
      position: 'fixed',
    },
    paper: {
      height: 150,
      width: 300,
      color: theme.palette.text.secondary,
      backgroundColor: '#bbdefb',
      marginBottom: 'auto',
      marginTop: '10%',
      textAlign: 'center',
    },
    paperLeft: {
        marginRight: 'auto',
    },
    paperCenter: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    paperRight: {
        marginLeft: 'auto',
    },
    coverAll: {
        width: '100%',
        height: '100%',
    }
  }));

  
  const LandingPage = () => {
      
    const classes = useStyles();
      
    return (
    <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
            <Typography variant="h1" component="h1" color="textSecondary" style={{marginTop: '5%'}}>
                TIC TAC TOE #
            </Typography> 
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" className={classes.coverAll}>
            <Paper className={`${classes.paperRight} ${classes.paper}`} elevation={0} style={{marginRight: '5%'}}>
                <Typography variant="h3" component="h2">
                    Rules
                </Typography>
            </Paper>
            <Paper className={`${classes.paperLeft} ${classes.paper}`} elevation={0} style={{marginLeft: '5%'}}>
                <Typography variant="h3" component="h2">
                    Tips
                </Typography>
            </Paper>
        </Grid>
    </div>
)};

export default LandingPage;