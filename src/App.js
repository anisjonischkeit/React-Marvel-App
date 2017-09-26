import React, { Component } from 'react';

import TopBar from 'containers/template/TopBar';
import TopBarPadding from 'components/template/TopBarPadding';
import SideBar from 'containers/template/SideBar';
import ItemList from 'containers/mainList/ItemList'
import CentreContentWrapper from 'components/template/CentreContentWrapper'

export default class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <CentreContentWrapper>
          <TopBar />
          <TopBarPadding />
          <ItemList />
        </CentreContentWrapper>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   isSidebarOpen: state.template.sidebar.open
// });

// export default connect(mapStateToProps)(App);
