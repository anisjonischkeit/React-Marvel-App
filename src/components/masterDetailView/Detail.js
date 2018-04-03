import React from 'react';
import './Detail.css'
import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import AppBar from 'material-ui/AppBar'

export default props => (
  <div className='detailView'>
    <AppBar
      className='detailViewTopBar'
      title={props.title}
      iconElementLeft={<IconButton onClick={props.onBackClick}><BackIcon /></IconButton>}
      iconClassNameRight="muidocs-icon-action-home"
    />
    {props.children}
  </div>
)