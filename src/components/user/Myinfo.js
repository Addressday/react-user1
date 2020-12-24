import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
    width: '50%',
  },
}));

export default function Myinfo() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원정보
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              inputProps={
                { readOnly: true, }
              }
                autoComplete="uname"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="test1234"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              inputProps={
                { readOnly: true, }
              }
                autoComplete="uname"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="test@naver.com"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
              inputProps={
                { readOnly: true, }
              }
                variant="outlined"
                required
                fullWidth
                name="password"
                label="********"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Button 
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              수정
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              
              className={classes.submit}
            >
              완료
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
