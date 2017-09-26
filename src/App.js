import React, { Component } from 'react';

import TopBar from 'containers/template/TopBar';
import TopBarPadding from 'components/template/TopBarPadding';
import SideBar from 'containers/template/SideBar';
import ItemList from 'containers/mainList/ItemList'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SideBar />
        <TopBarPadding />
        <ItemList />
      </div>
    );
  }
}

export default App;
