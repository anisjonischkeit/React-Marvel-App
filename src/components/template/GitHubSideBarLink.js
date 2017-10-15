import React from 'react';
import MenuItem from 'components/template/SideBarMenuItem';

export default (props) => (
	<div style={{bottom: 0, position: "absolute", width: 256}}>
		<a href={props.link}>
			<MenuItem 
				text="GitHub"
				leftIcon={<img src="/images/github.png" alt='GitHub Icon' />}
				style={{ opacity: 0.55 }}
			/>
		</a>
	</div>
)