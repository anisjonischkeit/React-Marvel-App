import React from 'react';

import Avatar from 'material-ui/Avatar'
import { lightBlack } from 'material-ui/styles/colors';
import { ListItem as MaterialListItem } from 'material-ui/List';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.selectItem = () => props.selectItem(props.id)
  }

  render() {
    return (
      <MaterialListItem
        key={this.props.id}
        leftAvatar={<Avatar src="images/ok-128.jpg" />}
        primaryText={this.props.heading}
        secondaryText={
          <p>
            <span style={{color: lightBlack}}>{this.props.subheading}</span>
          </p>
        }
        secondaryTextLines={1}
        onClick={this.selectItem}
      />
    )
  }
}