import * as React from 'react';

import List from './List'

const mapComicsToItemList = (item: any, idx) => ({
  key: `${item.id}-${idx}`,
  id: item.id,
  img: `${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`,
  heading: item.title,
  subheading: item.id
})

export default () => (
  <List
    reduxEntryPointName='comics'
    filterParamName='titleStartsWith'
    displayName='Comics'
    mapDataItemToItemList={mapComicsToItemList}
  />
)