import React, { FormEvent, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import { AuthenticationProps } from './authentication.types';
import { AuthenticationService } from './authentication.service';
import { Formik, Form, Field } from 'formik';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn({ isLoggedIn, setIsLoggedIn }: AuthenticationProps) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const classes = useStyles();

  const onSubmit = (e: FormEvent<HTMLElement>) => {

    e.preventDefault();
    
    AuthenticationService.signIn({
      username,
      password
    })
    .then(() => {
      setIsLoggedIn(true);
      setError('');
    })
    .catch(error => {
      setError(error.message);
    })
  }

  return (
    isLoggedIn ?
      <Redirect to="/" />
      :
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>













        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={({ target: { value }}) => setUsername(value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={({ target: { value }}) => setPassword(value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
            <Grid item>
            </Grid>            
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="error" align="center">
          {error}
        </Typography>
      </Box>
    </Container>
  );
}