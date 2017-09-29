import React from 'react';

import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { darkBlack, lightBlack } from 'material-ui/styles/colors';

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

const getList = (list, loading: boolean) => {
  if (loading) {
    return <p>loading</p>
  } else {
    if (list != null) {
      return list.map(item => (
        <ListItem
					leftAvatar={<Avatar src="images/ok-128.jpg" />}
					primaryText={item.heading}
					secondaryText={
						<p>
							<span style={{color: lightBlack}}>{item.subheading}</span>
						</p>
					}
					secondaryTextLines={1}
				/>
      ))
    } else {
      return <p>no data found</p>
    }
  }
}

export default ({ rawList, loading }: PropsType) => {
  const list = getList(rawList, loading)
  return (
    <List
      cellHeight={180}
      cols={Math.floor(document.body.clientWidth/180)}
    >
      {list}
    </List>
  )
}