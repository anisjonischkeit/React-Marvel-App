import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideBar from 'containers/template/SideBar';
// import ItemList from 'containers/mainList/ItemList'
import CentreContentWrapper from 'components/template/CentreContentWrapper'
import Router from 'Router';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <SideBar />
          <CentreContentWrapper>
            <Router />
          </CentreContentWrapper>
        </div>
      </BrowserRouter>
    );
  }
}

// const mapStateToProps = (state) => ({
//   isSidebarOpen: state.template.sidebar.open
// });

// export default connect(mapStateToProps)(App);
