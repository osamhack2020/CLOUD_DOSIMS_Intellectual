import React, { useState } from 'react';
import db from '../firebase'
import './index.css'

//react ui import
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
    paper: {
        marginTop: theme.spacing(8),
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

    const [useEmail, setEmail] = useState('')
    const [useServiceNo, setServiceNo] = useState('')
    const [usePassword, setPassword] = useState('')
    const [useRank, setRank] = useState('')
    const [useName, setName] = useState('')
    const [useUnit, setUnit] = useState('')
    const [usePhoneNo, setPhoneNo] = useState('')
    const [useClass, setClass] = useState('')


    return(
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap text-align="center">
                        프로젝트명
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
            <div className={classes.form}>
            <FormControl variant="outlined" fullWidth required className={classes.formControl}> 
            <InputLabel id="userclass">사용자 구분</InputLabel>
                <Select
                    labelId="userclass"
                    id="userclass"
                    value={useClass}
                    onChange={e => setClass(e.target.value)}
                    label="사용자 구분">
                    <MenuItem value="">
                        <em></em>
                    </MenuItem>
                    <MenuItem value={0}>병사</MenuItem>
                    <MenuItem value={1}>관리자</MenuItem>
                </Select>
            </FormControl>    
            <TextField //군번 입력
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="군번"
                type="text"
                id="useServiceNo"
                name="useServiceNo"
                autoComplete="off"
                value={useServiceNo}
                onChange={e => setServiceNo(e.target.value)}>
            </TextField>
            <TextField //이메일 입력
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="이메일"
                type="text"
                id="useEmail"
                name="useEmail"
                autoComplete="off"
                value={useEmail}
                onChange={e => setEmail(e.target.value)}>
            </TextField>
            <TextField //비밀번호 입력
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="비밀번호"
                type="password"
                id="usePassword"
                name="usePassword"
                autoComplete="off"
                value={usePassword}
                onChange={e => setPassword(e.target.value)}>
            </TextField>
            <TextField //계급 입력
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="계급"
                type="text"
                id="useRank"
                name="useRank"
                autoComplete="off"
                value={useRank}
                onChange={e => setRank(e.target.value)}>
            </TextField>
            <TextField //이름 입력
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="이름"
                type="text"
                id="useName"
                name="useName"
                autoComplete="off"
                value={useName}
                onChange={e => setName(e.target.value)}>
            </TextField>
            <TextField //소속 입력
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="소속(부대코드)"
                type="text"
                id="useUnit"
                name="useUnit"
                autoComplete="off"
                value={useUnit}
                onChange={e => setUnit(e.target.value)}>
            </TextField>
            <TextField //전화번호 입력
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="전화번호"
                type="text"
                id="usePhoneNo"
                name="usePhoneNo"
                autoComplete="off"
                value={usePhoneNo}
                onChange={e => setPhoneNo(e.target.value)}>
            </TextField>
            <div className="button1">
            <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                onClick={onRegister}>
                회원가입 완료
            </Button>
            </div>
            </div>
            </div>
            </Container>
        </div>
        
    )

    async function onRegister(){
        var data = {
            ServiceNo: useServiceNo,
            Email: useEmail,
            Rank: useRank,
            Name: useName,
            Unit: useUnit,
            PhoneNo: usePhoneNo
        }
        if(useClass === 0){
            try {
                await db.register(useEmail,usePassword)
                await db.registerSoldier(data)
                props.history.replace('/')
            } catch(error){
                alert(error.message)
            }
        }
        else if(useClass === 1){
            try {
                await db.register(useEmail,usePassword)
                await db.registerAdmin(data)
                props.history.replace('/')
            } catch(error){
                alert(error.message)
            }
        }
    }
}