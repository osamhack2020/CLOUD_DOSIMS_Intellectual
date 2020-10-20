import React, {useState} from 'react';
import db from '../firebase'
import dbfunction from '../function'
import {firestore, firebaseAuth} from '../firebase2'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {MenuHome, MenuPassApply, MenuProfile, MenuPassDetail, MenuPassConfirm,
  MenuDashboard, MenuMessageSend, MenuMessageConfirm, MenuMessageSendAdmin,
  MenuMessageConfirmAdmin, MenuLocationManage} from '../menu'
  import TextField from '@material-ui/core/TextField';
  import Select from '@material-ui/core/Select';
  import MenuItem from '@material-ui/core/MenuItem';
  import InputLabel from '@material-ui/core/InputLabel';
  import FormControl from '@material-ui/core/FormControl';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(0),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function MessageConfirm(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const [usePassType, setPassType] = useState('')
    const [useBeginDate, setBeginDate] = useState('')
    const [useEndDate, setEndDate] = useState('')
    const [useDestination, setDestination] = useState('')

    var name = sessionStorage.getItem('LoginedName');
    var serviceNo = sessionStorage.getItem('LoginedServiceNo');
    
    //병
    if((sessionStorage.getItem('CheckLogin')) == 1){
      
      return (
        <div className={classes.root}>
                    <CssBaseline/>
                    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="ingerit" noWrap className={classes.title} text-align="center">
                      DOSIMS:&nbsp;국방장병출타통합관리체계  
                    </Typography>
                    <Typography component="h1" variant="subtitle2" color="ingerit" noWrap text-align="center">
                      안녕하세요&nbsp;{name}&nbsp;님&nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Button 
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={Logout}>
                        로그아웃
                    </Button>
                    </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        }}
                        open={open}
                    >
                        <div className={classes.toolbarIcon}>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon/>
                            </IconButton>
                        </div>
                        <Divider/>
                        <List>{MenuHome}</List>
                        <List>{MenuProfile}</List>
                        <Divider/>
                        <List>{MenuPassApply}</List>
                        <List>{MenuPassDetail}</List>
                        <Divider/>
                        <List>{MenuMessageSend}</List>
                        <List>{MenuMessageConfirm}</List>
                    </Drawer>
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
            <FormControl variant="outlined" fullWidth required className={classes.formControl}> 
            <InputLabel id="passtype">출타 종류</InputLabel>
                <Select
                    labelId="passtype"
                    id="passtype"
                    value={usePassType}
                    onChange={e => setPassType(e.target.value)}
                    label="출타 종류">
                    <MenuItem value="">
                        <em></em>
                    </MenuItem>
                    <MenuItem value={"정기 휴가"}>정기 휴가</MenuItem>
                    <MenuItem value={"포상 휴가"}>포상 휴가</MenuItem>
                    <MenuItem value={"외박(기타)"}>외박(기타)</MenuItem>
                    <MenuItem value={"청원 휴가"}>청원 휴가</MenuItem>
                </Select>
            </FormControl>    
            <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="출발 날짜"
                type="text"
                id="BeginDate"
                name="BeginDate"
                autoComplete="off"
                value={useBeginDate}
                onChange={e => setBeginDate(e.target.value)}>
            </TextField>
            <TextField
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="복귀 날짜"
                type="text"
                id="EndDate"
                name="EndDate"
                autoComplete="off"
                value={useEndDate}
                onChange={e => setEndDate(e.target.value)}>
            </TextField>
            <TextField //계급 입력
                required
                fullWidth
                margin="normal"
                variant="outlined"
                label="행선지"
                type="text"
                id="Destination"
                name="Destination"
                autoComplete="off"
                value={useDestination}
                onChange={e => setDestination(e.target.value)}>
            </TextField>
            <div className="button1">
            <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
                onClick={onApply}>
                휴가 신청
            </Button>
            </div>
              </Paper>
              </Grid>
            </Grid>
            </Container>
        </main>
            <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
           
            </div>
            </Container>
        </div>)
    } else{
        alert("로그인 하십쇼...")
        props.history.replace('/')
        return(
            <div></div>
        );
    }

    async function Logout() {
      try{
          await dbfunction.dblogout()
          props.history.replace('/')
      } catch(error) {
          alert(error.message)
      }            
    }
    
    function onApply(){
        var data = {
            ServiceNo: serviceNo,
            PassType: usePassType,
            BeginDate: useBeginDate,
            EndDate: useEndDate,
            Destination: useDestination,
            Applied: false,
            PassStatus: "미출발",
            //추가 구현
        }
        firestore.collection("Pass").add(data).then(function(){
            alert("휴가 신청 완료!")
        })
    }

    
}


//휴가증 신청이 완료 되었습니다.