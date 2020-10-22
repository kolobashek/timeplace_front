import Collapse from '@material-ui/core/Collapse'
import { LinkProps } from '@material-ui/core/Link'
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../../../../app/rootReducer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppRoutes, {
  AppRoute
} from '../../../../routes'

interface ListItemLinkProps extends LinkProps {
  to: string
  open?: boolean
}

function ListItemLink(props: Omit<ListItemLinkProps, 'ref'>) {
  const { to, open, itemProp, ...other } = props
  const primary = itemProp

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemIcon>{}</ListItemIcon>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  )
}
const MenuItem = (route: AppRoute, routeName: string, key: number) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  if (route.childs) {
    const childs = route.childs
    return (
      <React.Fragment key={key}>
        <ListItemLink
          to={route.pathname}
          open={open}
          onClick={handleClick}
          itemProp={routeName}
        />
        <Collapse component="li" in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {Object.keys(childs).map(
              (key, index) => {
                return (
                  <ListItemLink
                    to={childs[key].pathname}
                    className={classes.nested}
                    itemProp={key}
                    key={index}
                  />
                )
              }
            )}
          </List>
        </Collapse>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment key={key}>
      <ListItemLink
        to={route.pathname}
        itemProp={routeName}
      />
    </React.Fragment>
  )
}
const childsRecusrsionWithName = (
  route: AppRoute,
  func: (route: AppRoute, name: string, key: number) => JSX.Element,
  name: string,
  key: number
): any => {
  if (route.childs) {
    for (let [name, child] of Object.entries(route.childs)) {
      childsRecusrsionWithName(child, func, name, key)
    }
  }
  return func(route, name, key)
}

export default function DrawerList() {
  const classes = useStyles()
  const ListItemsMapped = Object.keys(AppRoutes).map((routeName, key) => {
    if (!AppRoutes[routeName].isMainMenuItem) {
      return console.log('no main menu items');
    }
    return childsRecusrsionWithName(AppRoutes[routeName], MenuItem, routeName, key)
  })
  // console.log(ListItemsMapped);
  
  return (
    <nav className={classes.lists} aria-label="main menu">
      <List>
        {ListItemsMapped}
      </List>
    </nav>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lists: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(1),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
)
