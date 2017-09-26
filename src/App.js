import React, { Component } from 'react';

import TopBar from 'containers/template/TopBar';
import SideBar from 'containers/template/SideBar';
import ItemList from 'containers/mainList/ItemList'

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SideBar />
        <ItemList />
      </div>
    );
  }
}

export default App;
