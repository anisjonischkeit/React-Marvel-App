// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSidebarOpenState } from 'actions/template/sidebarActions';
import Sidebar from 'components/template/SideBar';
import MenuItem from 'containers/template/SideBarMenuItem';

import PersonIcon from 'material-ui/svg-icons/social/person';
import StoriesIcon from 'material-ui/svg-icons/content/font-download';
import ComicsIcon from 'material-ui/svg-icons/image/photo';
import CreatorsIcon from 'material-ui/svg-icons/image/brush';
import EventsIcon from 'material-ui/svg-icons/editor/insert-invitation';
import SeriesIcon from 'material-ui/svg-icons/av/library-books';

const menuItems = [
  {text: 'Characters', link: '/characters', leftIcon: <PersonIcon />},
  {text: 'Comics', link: '/comics', leftIcon: <ComicsIcon />},
  {text: 'Creators', link: '/creators', leftIcon: <CreatorsIcon />},
  {text: 'Events', link: '/events', leftIcon: <EventsIcon />},
  {text: 'Series', link: '/series', leftIcon: <SeriesIcon />},
  // {text: 'Stories', link: '/stories', leftIcon: <StoriesIcon />},
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
