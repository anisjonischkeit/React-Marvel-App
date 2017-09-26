import React, { Component } from 'react';

import TopBar from 'containers/template/TopBar';
import SideBar from 'containers/template/SideBar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SideBar />
      </div>
    );
  }
}

export default App;
