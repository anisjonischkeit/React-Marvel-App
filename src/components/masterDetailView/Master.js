import React from 'react';
import './Master.css'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

export default (props : PropsType) => (
	<div className='masterView'>
		<AppBar
			className='masterViewTopBar'
			title={props.title}
			iconClassNameRight="muidocs-icon-navigation-expand-more"
			iconElementLeft={<IconButton onClick={props.onMenuClick}><MenuIcon /></IconButton>}
			// onLeftIconButtonTouchTap={props.onMenuClick}
		/>
		{props.children}
	</div>
)