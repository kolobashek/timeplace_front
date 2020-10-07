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

interface ListItemLinkProps extends LinkProps {
  to: string
  open?: boolean
}

const breadcrumbNameMap: { [key: string]: string } = {
  '/': 'Home',
  '/auth': 'Authentication',
  '/auth/register': 'Registration',
  '/events': 'Events',
}

function ListItemLink(props: Omit<ListItemLinkProps, 'ref'>) {
  const { to, open, ...other } = props
  const primary = breadcrumbNameMap[to]

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

export default function DrawerList() {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const classes = useStyles()
  // AppRoutes.map(
  //   (route, key) => {
  //     return(

  //     )
  //   }
  // )

  return (
    <nav className={classes.lists} aria-label="main menu">
      <List>
        <ListItemLink to="/" />
        <ListItemLink to="/auth" open={open} onClick={handleClick} />
        <Collapse component="li" in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemLink to="/auth/register" className={classes.nested} />
          </List>
        </Collapse>
        <ListItemLink to="/events" />
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
