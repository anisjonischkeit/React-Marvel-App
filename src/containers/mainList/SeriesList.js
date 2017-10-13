import * as React from 'react';

import List from 'containers/mainList/List'

const mapSeriesToItemList = (item: any) => ({
	id: item.id,
	img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
	heading: item.title,
	subheading: item.id
})


export default () => (
	<List
		reduxEntryPointName='series'
		filterParamName='titleStartsWith'
		displayName='Series'
		mapDataItemToItemList={mapSeriesToItemList}
	/>
)