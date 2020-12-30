import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './components/menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  const [openMenu, setOpenMenu] = useState(false);

  const renderMenu = () => {
    if(openMenu) {
      return (
        <Menu
          open={openMenu}
          setOpenMenu={setOpenMenu} />
      );
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}
            color="inherit" aria-label="menu"
            onClick={() => setOpenMenu(!openMenu)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      { renderMenu() }
    </div>
  );
}
