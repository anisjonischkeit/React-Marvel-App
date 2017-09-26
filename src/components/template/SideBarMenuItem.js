import React from 'react';

import MenuItem from 'material-ui/MenuItem';

type MenuItemDataType = {
	text: string,
	link: string
};

type PropsType = {
	text: MenuItemDataType
};

export default ({ text, onClick }: PropsType) => (
  <MenuItem
    key={text}
    onClick={onClick}
  >
    {text}
  </MenuItem>
)