import React from 'react';
import './Master.css'
import AppBar from 'material-ui/AppBar'

export default props => (
	<div className='masterView'>
		<AppBar
			className='masterViewTopBar'
			title="Master"
			iconClassNameRight="muidocs-icon-navigation-expand-more"
			onLeftIconButtonTouchTap={props.onMenuClick}
		/>
		{props.children}
	</div>
)