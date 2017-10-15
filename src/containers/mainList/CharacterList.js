import * as React from 'react';

import List from 'containers/mainList/List'

const mapCharactersToItemList = (item: any, idx) => ({
	id: `${item.id}-${idx}`,
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