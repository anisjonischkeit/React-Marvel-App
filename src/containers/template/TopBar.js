// @flow

import React from 'react';
import TopBarComponent from 'components/template/TopBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openSideBar } from 'actions/template/sidebarActions';

type PropsType = {
  setOpenState: typeof openSideBar
}

const TopBar = ({ openSideBar }: PropsType) => (
  <TopBarComponent
    title="The Marvel Universe Graph"
    onHamburgerClick={openSideBar}
  />
)

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    openSideBar
  }, dispatch)
});

export default connect(null, mapDispatchToProps)(TopBar)