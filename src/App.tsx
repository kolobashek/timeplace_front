import { createStyles, CssBaseline, makeStyles, Theme } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Route,
  Switch,

  useLocation
} from 'react-router-dom'
import './App.css'
import { RootState } from './app/store'
import Drawer, { drawerWidth } from './features/uikit/drawer'
import TopBar from './features/uikit/topBar'
import appRoutes from './routes'
import { routeActions } from './routes/slice'

function usePageViews() {
  let location = useLocation()
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(routeActions.setRoute(location.pathname))
    console.log(location)
  }, [location, dispatch])
}


function App() {
  usePageViews()
  let location = useLocation()
  const open = useSelector((state: RootState) => state.uikit.drawer.isOpen)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Drawer />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Switch location={location}>
          {Object.entries(appRoutes).map(([key, route]) => (
            <Route
              key={key}
              path={route.pathname}
              exact={route.exact}
              strict={route.strict}
              children={route.main}
              title={route.title}
            />
          ))}
        </Switch>
      </main>
    </div>
  )
}

export default App

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
  })
)
