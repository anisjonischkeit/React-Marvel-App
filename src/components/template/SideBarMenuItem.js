import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import {withRouter} from 'react-router-dom';

type MenuItemDataType = {
	text: string,
	link: string
};

type PropsType = {
	text: MenuItemDataType
};

export default withRouter(({ text, link, leftIcon, onClick, location }: PropsType) => (
  <MenuItem
    key={text}
    onClick={onClick}
    leftIcon={leftIcon}
    style={location.pathname === link ? {
      backgroundColor: "rgba(0, 0, 0, 0.2)"
    } : undefined}
  >
    {text}
  </MenuItem>
));