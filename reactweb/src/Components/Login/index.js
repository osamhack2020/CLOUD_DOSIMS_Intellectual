import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../firebase';
import './index.css';
import Captain from './captain.jpg'

//react ui import
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    root: {
        maxWidth: 600,
    }
  }));

export default function Login(props) {
    const classes = useStyles();

    const [useServiceNo, setServiceNo] = useState('')
    const [usePassword, setPassword] = useState('')

    return(
        <div>
            <AppBar position="relative">
                <Toolbar>
                <Typography variant="h6" color="secondary" noWrap text-align="center">
                        DOSIMS:&nbsp;
                    </Typography>
                    <Typography variant="h6" color="inherit" noWrap text-align="center">
                        국방장병출타통합관리체계  
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
            <div className={classes.form}>
                <Card className={classes.root}>
                <CardMedia
                    component="img"
                    height="500"
                    title="해병 중장 이승도"
                    image={Captain}
                />
                </Card>
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="군번"
                    type="text"
                    id="ServiceNo"
                    name="ServiceNo"
                    autoComplete="off"
                    value={useServiceNo}
                    onChange={e => setServiceNo(e.target.value)}>
                </TextField>
                <br/>
                <TextField 
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="비밀번호"
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="off"
                    value={usePassword}
                    onChange={e => setPassword(e.target.value)}>
                </TextField>
                <br/>
                <div className="button1">
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={onLogin}>
                    병사 로그인
                </Button>
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="default"
                    onClick={onLoginAdmin}>
                    관리자 로그인
                </Button>
                </div><div className="button1">
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/Register">
                    회원가입
                </Button>
                </div>
                </div>
                </div>
                </Container>
        </div>
    )

    function setLoginDataAdmin(ServiceNo){
        sessionStorage.setItem('LoginedServiceNo',ServiceNo);
        sessionStorage.setItem('CheckLogin',2)
        db.setLoginFirebaseDataAdmin(ServiceNo)
        return;
    }

    async function onLoginAdmin() {
        try {
            await db.loginAdmin(useServiceNo, usePassword).then(setLoginDataAdmin(useServiceNo))
            props.history.replace('/Home')
        } catch(error) {
            alert(error.message)
            sessionStorage.clear();
        }
    }

    function setLoginData(ServiceNo){
        sessionStorage.setItem('LoginedServiceNo',ServiceNo);
        sessionStorage.setItem('CheckLogin',1)
        db.setLoginFirebaseData(ServiceNo)
        return;
    }

    async function onLogin() {
        try {
            await db.login(useServiceNo, usePassword).then(setLoginData(useServiceNo))
            props.history.replace('/Home')
        } catch(error) {
            alert(error.message)
            sessionStorage.clear();
        }
    }
}