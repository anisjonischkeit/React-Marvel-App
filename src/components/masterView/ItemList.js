import React from 'react';

import MarvelListItem from './Item'

export type PropsType = {
  rawList: Array<{
    id: number,
    img: string,
    heading: string,
    subheading: string,
    active: boolean,
  }>,
  loading: boolean,
  selectItem: (id: number) => void
}
 
export default ({ rawList, loading, selectItem } : PropsType) => {
  if (rawList != null) {
    return (
      rawList.map(item => (
        <MarvelListItem key={item.id} {...item} selectItem={selectItem} />
      ))
    )
  } else {
    return null
  }
}