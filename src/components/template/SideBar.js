// @flow

import * as React from 'react';
import Drawer from 'material-ui/Drawer';

type PropsType = {
  open: boolean,
  menuItems: React.Element<*>[]
};

export default ({ open, menuItems } : PropsType) => (
  <Drawer open={open}>
    {menuItems}
  </Drawer>
)