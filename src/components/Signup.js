import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="uname"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="회원이름"
                autoFocus
              />

            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="이메일 주소"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="비밀번호 확인"
                type="password"
                id="confirm_password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="약관에 동의합니다"
              />
              <Link href="#" variant="body2">
              약관 보기
            </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            회원가입
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                이미 계정이 있습니까? 로그인
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}