import React, { Component } from 'react';


import SideBar from 'containers/template/SideBar';
// import ItemList from 'containers/mainList/ItemList'
import CentreContentWrapper from 'components/template/CentreContentWrapper'
import Router from 'Router';
import DetailView from 'containers/mainDetailView/DetailView'


export default class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <CentreContentWrapper>
          {/*<TopBar />
          <TopBarPadding />*/}
          <Router />
          <DetailView />
        </CentreContentWrapper>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   isSidebarOpen: state.template.sidebar.open
// });

// export default connect(mapStateToProps)(App);
