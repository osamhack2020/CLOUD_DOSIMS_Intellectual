import React from 'react';
import dbfunction from '../function'
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

export default function Home(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    var name = sessionStorage.getItem('LoginedName');
    //병
    if((sessionStorage.getItem('CheckLogin')) == 1){
        return(
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
                      <h1>홈 구현 예정</h1>
                    </Paper>
                  </Grid>
                </Grid>
                </Container>
            </main>
            </div>
        )
    }
    //관리자
    else if((sessionStorage.getItem('CheckLogin')) == 2) {
        return(
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
                  안녕하세요&nbsp;{name}&nbsp;관리자님&nbsp;&nbsp;&nbsp;
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
                    <List>{MenuDashboard}</List>
                    <List>{MenuLocationManage}</List>
                    <Divider/>
                    <List>{MenuMessageSendAdmin}</List>
                    <List>{MenuMessageConfirmAdmin}</List>
                    <Divider/>
                    <List>{MenuPassConfirm}</List>
                    <List>{MenuPassDetail}</List>

                </Drawer>
                <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <h1>홈 구현 예정</h1>
                    </Paper>
                  </Grid>
                </Grid>
                </Container>
            </main>
            </div>
        )
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

}