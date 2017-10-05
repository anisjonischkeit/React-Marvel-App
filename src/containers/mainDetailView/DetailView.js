import React from 'react';

import { Switch, Route, Redirect } from 'react-router';
import CharacterDetailView from 'containers/mainDetailView/CharacterDetailView';
import ComicDetailView from 'containers/mainDetailView/ComicDetailView';
import CreatorDetailView from 'containers/mainDetailView/CreatorDetailView';
import EventDetailView from 'containers/mainDetailView/EventDetailView';
import SeriesDetailView from 'containers/mainDetailView/SeriesDetailView';
import StoryDetailView from 'containers/mainDetailView/StoryDetailView';

export default () => (
	
			<Switch>
				<Redirect exact path='/' to='/characters' />
				<Route exact path='/characters' component={CharacterDetailView} />
				<Route exact path='/comics' component={ComicDetailView} />
				<Route exact path='/creators' component={CreatorDetailView} />
				<Route exact path='/events' component={EventDetailView} />
				<Route exact path='/series' component={SeriesDetailView} />
				<Route exact path='/stories' component={StoryDetailView} />
			</Switch>
)