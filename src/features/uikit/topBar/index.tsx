import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { drawerWidth } from '../drawer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/rootReducer';
import { drawerActions } from "../drawer/slice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function TopBar() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const drawerOpen = useSelector((state: RootState) => state.uikit.drawer.open)
  const handleDrawerOpen = () => {
    dispatch(drawerActions.open())
  };
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, drawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}