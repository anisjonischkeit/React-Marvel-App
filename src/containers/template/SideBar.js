// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSidebarOpenState } from '../../actions/template/sidebarActions';
import SidebarComponent from '../../components/template/SideBar';
import MenuItem from '../../containers/template/SideBarMenuItem';

import PersonIcon from 'material-ui/svg-icons/social/person';
import ComicsIcon from 'material-ui/svg-icons/image/photo';
import CreatorsIcon from 'material-ui/svg-icons/image/brush';
import EventsIcon from 'material-ui/svg-icons/editor/insert-invitation';
import SeriesIcon from 'material-ui/svg-icons/av/library-books';

import GitHubSideBarLink from '../../components/template/GitHubSideBarLink'

const menuItems = [
  {text: 'Characters', link: '/characters', leftIcon: <PersonIcon />},
  {text: 'Comics', link: '/comics', leftIcon: <ComicsIcon />},
  {text: 'Creators', link: '/creators', leftIcon: <CreatorsIcon />},
  {text: 'Events', link: '/events', leftIcon: <EventsIcon />},
  {text: 'Series', link: '/series', leftIcon: <SeriesIcon />},
]

const mapStateToProps = (state) => ({
  ...state.template.sidebar,
  menuItems: [
    ...menuItems.map(item => <MenuItem key={item.link} {...item} />),
    <GitHubSideBarLink link='https://github.com/anisjonischkeit/React-Marvel-App' />
  ]
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    setOpenState: setSidebarOpenState
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
