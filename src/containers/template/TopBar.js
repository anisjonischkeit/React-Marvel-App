// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openSideBar } from 'actions/template/sidebarActions';

type PropsType = {
  setOpenState: typeof openSideBar
}

const TopBar = ({ openSideBar }: PropsType) => (
  <AppBar
  title="The Marvel Universe Graph"
  iconClassNameRight="muidocs-icon-navigation-expand-more"
  onLeftIconButtonTouchTap={openSideBar}
  />
)

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    openSideBar
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(TopBar)