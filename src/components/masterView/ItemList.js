import React from 'react';

import MarvelListItem from '../../components/masterView/Item'

export type PropsType = {
  rawList: Array<{
    id: number,
    img: string,
    heading: string,
    subheading: string,
    onClick: () => void
  }>,
  loading: boolean
}

const getList = (list, loading: boolean, selectItem) => {
  if (list != null) {
    return list.map(item => (
      <MarvelListItem key={item.key} {...item} selectItem={selectItem} />
    ))
  } else {
    return <p>no data found</p>
  }
}
 
export default ({ rawList, loading, selectItem } : PropsType) => {
  const list = getList(rawList, loading, selectItem)

  if (rawList != null) {
    return (
      list
    )
  } else {
    return null
  }
}