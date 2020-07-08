import React from 'react';
import { AuthenticationService } from '../authentication/authentication.service';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import Candidates from '../candidates/candidates';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    main: {
        padding: theme.spacing(2)
    }
  }));

const Main = ({ setIsLoggedIn }: any) => {

    const classes = useStyles();

    const signOut = () => {
        AuthenticationService.signOut()
            .then(() => {
                setIsLoggedIn(false);
            });
    };

    return (
        <>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Button color="inherit" onClick={signOut}>Sign Out</Button>
            </Toolbar>
        </AppBar>
        <div className={classes.main}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/candidates" />
                </Route>

                <Route path="/candidates">
                    <Candidates />
                </Route>
            </Switch>
        </div>
        </>
    );
}

export default Main;