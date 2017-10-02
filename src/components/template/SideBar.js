// @flow

import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'components/template/SideBarMenuItem';
import Divider from 'material-ui/Divider';
import BurgerMenu from 'material-ui/svg-icons/navigation/menu'
import StopIcon from 'material-ui/svg-icons/content/clear'

type PropsType = {
  open: boolean,
  menuItems: React.Element<*>[],
  setOpenState: (open: string) => void
};

export default ({ open, menuItems, setOpenState } : PropsType) => (
  <Drawer
    open={true}
    docked={!open}
    onRequestChange={setOpenState}
    containerStyle={{
      width: (open ? "256px" : "56px"),
      overflow: 'hidden'
    }}
  >
    <MenuItem 
      text="Marvel Universe"
      leftIcon={!open ? <BurgerMenu /> : <StopIcon />}
      onClick={() => setOpenState(!open)}
    />
    <Divider />
    {menuItems}
  </Drawer>
)