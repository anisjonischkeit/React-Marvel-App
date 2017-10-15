import * as React from 'react';

import List from 'containers/mainList/List'
const mapCreatorsToItemList = (item: any, idx) => ({
	id: `${item.id}-${idx}`,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.fullName,
	subheading: item.id
})


export default () => (
	<List
		reduxEntryPointName='creators'
		filterParamName='nameStartsWith'
		displayName='Creators'
		mapDataItemToItemList={mapCreatorsToItemList}
	/>
)