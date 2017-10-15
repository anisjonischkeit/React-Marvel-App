import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideBar from 'containers/template/SideBar';
import CentreContentWrapper from 'components/template/CentreContentWrapper'
import Router from 'Router';

export default () => (
  <BrowserRouter>
    <div>
      <SideBar />
      <CentreContentWrapper>
        <Router />
      </CentreContentWrapper>
    </div>
  </BrowserRouter>
);