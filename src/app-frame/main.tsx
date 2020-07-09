import React, { useState } from 'react';
import { AuthenticationService } from '../authentication/authentication.service';
import { AppBar, Toolbar, Button, makeStyles, IconButton } from '@material-ui/core';
import { Switch, Route, Redirect, Link, useRouteMatch } from 'react-router-dom';
import Candidates from '../candidates/candidates';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    toolbar: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    main: {
        padding: theme.spacing(2)
    }
  }));


const Main = ({ setIsLoggedIn }: any) => {
    const classes = useStyles();

    const [isRootPage, setIsRootPage] = useState(true);

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
                {   
                    (!isRootPage)
                    &&
                    (<IconButton aria-label="Back" color="inherit" component={Link} to="../">
                        <ArrowBackTwoToneIcon />
                    </IconButton>)
                }              
            </Toolbar>
        </AppBar>
        <div className={classes.main}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/candidates" />
                </Route>

                <Route path="/candidates">
                    <Candidates setIsRootPage={setIsRootPage}/>
                </Route>
            </Switch>
        </div>
        </>
    );
}

export default Main;