import React from 'react';

import AppBar from 'material-ui/AppBar';

type PropsType = {
	title: string,
	onHamburgerClick: () => void,

}

export default ({ title, onHamburgerClick }: PropsType) => (
	<AppBar
		title={title}
		iconClassNameRight="muidocs-icon-navigation-expand-more"
		onLeftIconButtonTouchTap={onHamburgerClick}
		style={
			{
				position: 'fixed',
				top: 0,
				left: 0
			}
		}
  />
)