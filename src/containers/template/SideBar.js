// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSidebarOpenState } from 'actions/template/sidebarActions';
import Sidebar from 'components/template/SideBar';
import MenuItem from 'containers/template/SideBarMenuItem';

import PersonIcon from 'material-ui/svg-icons/social/person';
import BooksIcon from 'material-ui/svg-icons/av/library-books';

const menuItems = [
  {text: 'Characters', link: '/characters', leftIcon: <PersonIcon />},
  {text: 'Comics', link: '/comics', leftIcon: <BooksIcon />}
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
