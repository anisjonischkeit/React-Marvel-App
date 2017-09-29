// @flow

import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
};

type PropsType = {
  rawList: Array<{
    id: number,
    img: string,
    heading: string,
    subheading: string,
    onClick: () => void
  }>,
  loading: boolean
}

const getList = (list, loading: boolean) => {
  if (loading) {
    return <p>loading</p>
  } else {
    if (list != null) {
      return list.map(item => (
        <GridTile
          key={item.id}
          title={item.heading}
          subtitle={item.subheading}
          onClick={item.onClick}
        >
          <img src={item.img} />
        </GridTile>
      ))
    } else {
      return <p>no data found</p>
    }
  }
}

export default ({ rawList, loading }: PropsType) => {
  const list = getList(rawList, loading)
  return (
    <GridList
      cellHeight={180}
      cols={Math.floor(document.body.clientWidth/180)}
    >
      {list}
    </GridList>
  )
}