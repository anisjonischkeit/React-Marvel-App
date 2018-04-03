import React from 'react';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const styles = {
  listHeader: {
    textTransform: 'capitalize'
  },
  listRoot: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

type PropsType = {
  itemProperties : Array<
    {
      name : string,
      onClickHandler : (resourceUri: string) => void,
      items : Array<{
        resourceURI : string,
        name : string
      }>
    }>
}

export default (props : PropsType) => (
  <div style={styles.listRoot}>
    {props.itemProperties.map(itemProperty => {
      
      if (itemProperty.items.length > 0) {
        return (
          <Paper key={itemProperty.name} style={{width: 350, margin: 10}}>
            <List>
              <Subheader style={styles.listHeader}>{itemProperty.name}</Subheader>
                {itemProperty.items.map(item => (
                  <ListItem
                  key={item.resourceURI}
                  primaryText={item.name}
                  onClick={itemProperty.onClickHandler.bind(undefined, item.resourceURI)}
                  />
                ))}
              </List>
          </Paper>
        )

      } else {
        return null
      }  

    })}
  </div>
)