import React from 'react';
import AppBar from 'material-ui/AppBar'

export default () => (
  <AppBar
    title="The Marvel Universe Graph"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={() => alert("hello")}
  />
)