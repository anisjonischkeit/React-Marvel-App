import React from 'react';

import MenuItem from 'material-ui/MenuItem';

type MenuItemDataType = {
	text: string,
	link: string
};

type PropsType = {
	text: MenuItemDataType
};

export default ({ text, leftIcon, onClick }: PropsType) => (
  <MenuItem
    key={text}
    onClick={onClick}
    leftIcon={leftIcon}
    style={{
      // backgroundColor: "rgba(0, 0, 0, 0.2)"
    }}
  >
    {text}
  </MenuItem>
)