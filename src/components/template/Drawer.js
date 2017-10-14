import * as React from 'react';
import Drawer from 'material-ui/Drawer';

import MediaQuery from 'react-responsive';

const DesktopDrawer = ({open, onRequestChange, children}) => (
	<Drawer
		open={true}
		docked={!open}
		onRequestChange={onRequestChange}
		containerStyle={{
			width: (open ? "256px" : "56px"),
			overflow: 'hidden'
		}}
	>
		{children}
	</Drawer>
)

export default ({open, onRequestChange, children}) => (
	<div>
		<MediaQuery query="(max-width: 960px)">
			<Drawer
				docked={false}
				open={open}
				onRequestChange={onRequestChange}
			>
				{children}
			</Drawer>
		</MediaQuery>

		<MediaQuery query="(min-width: 961px)">
			<DesktopDrawer
				open={open}
				onRequestChange={onRequestChange}
			>
				{children}
			</DesktopDrawer>
		</MediaQuery>
	</div>
)