import React from 'react';
import ItemList from 'components/mainList/ItemList';
import type { PropsType } from 'components/mainList/ItemList';
import './FixedWidthItemList.css'

export default (props: PropsType) => (
	<div className="fixedWidthItemList">
		<ItemList {...props} />
	</div>
)