import * as React from 'react';

import List from './List'

const mapCharactersToItemList = (item: any, idx) => ({
	key: `${item.id}-${idx}`,
	id: item.id,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.name,
	subheading: item.id
})

export default () => (
	<List
		reduxEntryPointName='characters'
		filterParamName='nameStartsWith'
		displayName='Characters'
		mapDataItemToItemList={mapCharactersToItemList}
	/>
)
