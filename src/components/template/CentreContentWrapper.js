import * as React from 'react';
import './CentreContentWrapper.css'

type PropsType = {
	children: React.Element
}

export default ({ children }: PropsType) => (
	<div className='centreContentWrapper'>
		{ children }
	</div>
)