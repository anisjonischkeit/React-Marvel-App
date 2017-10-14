// @flow

import * as React from 'react';
import Drawer from 'components/template/Drawer';
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
    open={open}
    onRequestChange={setOpenState}
  >
    <MenuItem 
      text="Marvel Universe"
      leftIcon={!open ? <BurgerMenu /> : <StopIcon />}
      onClick={() => setOpenState(!open)}
    />
    <Divider />
    {menuItems}
    <div style={{bottom: 0, position: "absolute", width: 256}}>
      <a href='https://github.com/anisjonischkeit/React-Marvel-App'>
        <MenuItem 
          text="GitHub"
          leftIcon={<img src="/images/github.png" />}
          style={{ opacity: 0.55 }}
        />
      </a>
    </div>
  </Drawer>
)