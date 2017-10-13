import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import MasterDetailSwitcher from 'containers/MasterDetailSwitcher'

import DetailView from 'containers/mainDetailView/DetailView'

import CharacterMaster from 'containers/mainList/CharacterList';
import CharacterDetail from 'containers/mainDetailView/CharacterDetailView';

import ComicMaster from 'containers/mainList/ComicList';
import ComicDetail from 'containers/mainDetailView/ComicDetailView';

import CreatorMaster from 'containers/mainList/CreatorList';
import CreatorDetail from 'containers/mainDetailView/CreatorDetailView';

import EventMaster from 'containers/mainList/EventList';
import EventDetail from 'containers/mainDetailView/EventDetailView';

import SeriesMaster from 'containers/mainList/SeriesList';
import SeriesDetail from 'containers/mainDetailView/SeriesDetailView';

import StoryMaster from 'containers/mainList/StoryList';
import StoryDetail from 'containers/mainDetailView/StoryDetailView';


export default () => (
		<Switch>
			<Redirect exact path='/' to='/characters' />
      <Route exact path='/characters'>
        <MasterDetailSwitcher
          masterComponent={CharacterMaster}
          detailComponent={CharacterDetail}
        />
      </Route>
      <Route exact path='/comics'>
        <MasterDetailSwitcher
          masterComponent={ComicMaster}
          detailComponent={ComicDetail}
        />
      </Route>
      <Route exact path='/creators'>
        <MasterDetailSwitcher
          masterComponent={CreatorMaster}
          detailComponent={CreatorDetail}
        />
      </Route>
      <Route exact path='/events'>
        <MasterDetailSwitcher
          masterComponent={EventMaster}
          detailComponent={EventDetail}
        />
      </Route>
      <Route exact path='/series'>
        <MasterDetailSwitcher
          masterComponent={SeriesMaster}
          detailComponent={SeriesDetail}
        />
      </Route>
      <Route exact path='/stories'>
        <MasterDetailSwitcher
          masterComponent={StoryMaster}
          detailComponent={StoryDetail}
        />
      </Route>
    </Switch>

);
