import React from 'react';

import * as ROUTES from '../../constants/routes'
import { AuthUserContext } from '../Authentication/Session';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const NavigationAuth = () => (
    <ButtonGroup fullWidth>
        <Button color="inherit" href={ROUTES.SIGN_IN}>Sign In</Button>
        <Button color="inherit" href={ROUTES.HOME}>Home</Button>
        <Button color="inherit" href={ROUTES.LANDING}>Landing</Button>
    </ButtonGroup>
);

const NavigationNonAuth = () => (
    <ButtonGroup fullWidth>
        <Button color="inherit" href={ROUTES.SIGN_IN}>Sign In</Button>
        <Button color="inherit" href={ROUTES.SIGN_UP}>Sign Up</Button>
    </ButtonGroup>
);

const Navigation = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <AuthUserContext.Consumer>
                        { authUser => authUser ? <NavigationAuth/>:<NavigationNonAuth/> } 
                    </AuthUserContext.Consumer>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navigation;