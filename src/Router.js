import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import MasterDetailSwitcher from './containers/MasterDetailSwitcher'

import CharacterMaster from './containers/mainList/CharacterList';
import CharacterDetail from './containers/mainDetailView/CharacterDetailView';

import ComicMaster from './containers/mainList/ComicList';
import ComicDetail from './containers/mainDetailView/ComicDetailView';

import CreatorMaster from './containers/mainList/CreatorList';
import CreatorDetail from './containers/mainDetailView/CreatorDetailView';

import EventMaster from './containers/mainList/EventList';
import EventDetail from './containers/mainDetailView/EventDetailView';

import SeriesMaster from './containers/mainList/SeriesList';
import SeriesDetail from './containers/mainDetailView/SeriesDetailView';

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
