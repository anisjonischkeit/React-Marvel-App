import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import MasterDetailSwitcher from './containers/MasterDetailSwitcher'

import CharacterMaster from './containers/masterView/CharacterList';
import CharacterDetail from './containers/detailView/CharacterDetailView';

import ComicMaster from './containers/masterView/ComicList';
import ComicDetail from './containers/detailView/ComicDetailView';

import CreatorMaster from './containers/masterView/CreatorList';
import CreatorDetail from './containers/detailView/CreatorDetailView';

import EventMaster from './containers/masterView/EventList';
import EventDetail from './containers/detailView/EventDetailView';

import SeriesMaster from './containers/masterView/SeriesList';
import SeriesDetail from './containers/detailView/SeriesDetailView';

export default () => (
  <Switch>
    <Redirect exact path='/' to='/characters' />
    <Route exact path='/characters'>
      <MasterDetailSwitcher
        masterComponent={CharacterMaster}
        detailComponent={CharacterDetail}
        reduxEntryPointName='characters'
      />
    </Route>
    <Route exact path='/comics'>
      <MasterDetailSwitcher
        masterComponent={ComicMaster}
        detailComponent={ComicDetail}
        reduxEntryPointName='comics'
      />
    </Route>
    <Route exact path='/creators'>
      <MasterDetailSwitcher
        masterComponent={CreatorMaster}
        detailComponent={CreatorDetail}
        reduxEntryPointName='creators'
      />
    </Route>
    <Route exact path='/events'>
      <MasterDetailSwitcher
        masterComponent={EventMaster}
        detailComponent={EventDetail}
        reduxEntryPointName='events'
      />
    </Route>
    <Route exact path='/series'>
      <MasterDetailSwitcher
        masterComponent={SeriesMaster}
        detailComponent={SeriesDetail}
        reduxEntryPointName='series'
      />
    </Route>
  </Switch>

);
