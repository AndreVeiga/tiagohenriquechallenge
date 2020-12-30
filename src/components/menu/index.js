import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Item from './item';

export default function TemporaryDrawer(props) {
  const anchor = 'left';

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    props.setOpenMenu(!props.open);
  };

  const list = (anchor = 'left') => {
    if(props.open){
      return <Item anchor={anchor} toggleDrawer={toggleDrawer} />
    }
  }

  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer anchor={anchor}
          open={props.open} onClose={toggleDrawer(anchor, false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
  </div>
  );
}
