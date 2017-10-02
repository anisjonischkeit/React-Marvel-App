import React from 'react';

import { List } from 'material-ui/List'
import MarvelListItem from 'components/mainList/ListItem'

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
  if (loading) {
    return <p>loading</p>
  } else {
    if (list != null) {
      return list.map(item => (
        <MarvelListItem key={item.id} {...item} selectItem={selectItem} />
      ))
    } else {
      return <p>no data found</p>
    }
  }
}

export default ({ rawList, loading, selectItem }: PropsType) => {
  const list = getList(rawList, loading, selectItem)
  return (
    <List
      cols={Math.floor(document.body.clientWidth/180)}
    >
      {list}
    </List>
  )
}