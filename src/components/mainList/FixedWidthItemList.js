import React from 'react';

import ItemList from 'components/mainList/ItemList';
import type { PropsType } from 'components/mainList/ItemList';
import './FixedWidthItemList.css'

import TextField from 'material-ui/TextField';

export default (props: PropsType) => (
	<div className='fixedWidthItemListWrapper'>
		<TextField
			floatingLabelText={`Search ${props.listName}`}
			fullWidth
		/>
		<div className="fixedWidthItemList" width={props.width}>
			<ItemList {...props} />
		</div>
	</div>
)