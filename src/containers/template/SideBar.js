// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSidebarOpenState } from 'actions/template/sidebarActions';
import Sidebar from 'components/template/SideBar';
import MenuItem from 'containers/template/SideBarMenuItem';

const menuItems = [
  {text: 'Characters', link: '/characters'},
  {text: 'Comics', link: '/comics'}
]

const mapStateToProps = (state/*: State*/) => ({
  ...state.template.sidebar,
  menuItems: menuItems.map(item => <MenuItem key={item.link} {...item} />)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    setOpenState: setSidebarOpenState
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
