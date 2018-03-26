import React from 'react';

import Avatar from 'material-ui/Avatar'
import { lightBlack } from 'material-ui/styles/colors';
import { ListItem as MaterialListItem } from 'material-ui/List';

export default class Item extends React.Component {

  selectItem = () => this.props.selectItem(this.props.id)

  render() {
    return (
      <MaterialListItem
        key={this.props.id}
        style={this.props.active ? {
          backgroundColor: "rgba(0, 0, 0, 0.2)"
        } : undefined}
        leftAvatar={this.props.img && <Avatar src={this.props.img} />}
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