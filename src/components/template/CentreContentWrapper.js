import * as React from 'react';

type PropsType = {
	children: React.Element
}

export default ({ children }: PropsType) => (
	<div style={{width: "calc(100% - 56px)", paddingLeft: "56px", overflow: 'hidden'}}>
		{ children }
	</div>
)