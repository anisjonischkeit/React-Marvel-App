import React from 'react';

import { List } from 'material-ui/List'
import MarvelListItem from 'components/mainList/ListItem'
// import Infinite from 'react-infinite'

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
      <MarvelListItem key={item.id} {...item} selectItem={selectItem} />
    ))
  } else {
    return <p>no data found</p>
  }
}
 
export default class ItemList extends React.Component<PropsType> {
  constructor(props) {
    super(props)
    this.renderItem = this._renderItem.bind(this)
  }
  
  _renderItem(index, key) {
    
    if (index === this.props.rawList.length - 1) {
      this.props.fetchMoreFunc()
    }

    const item = this.props.rawList[index];
    return <MarvelListItem key={item.id} {...item} selectItem={this.props.selectItem} />;
  }

  render() {
    const { rawList, loading, selectItem } = this.props
    const list = getList(rawList, loading, selectItem)

    if (rawList != null) {
      return (
        list
      )
    } else {
      return null
    }
  }
}