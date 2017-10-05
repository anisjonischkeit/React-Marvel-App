import React from 'react';

import { Switch, Route, Redirect } from 'react-router';
import CharacterDetailView from 'containers/mainDetailView/CharacterDetailView';
import ComicDetailView from 'containers/mainDetailView/ComicDetailView';

export default () => (
	
			<Switch>
				<Redirect exact path='/' to='/characters' />
				<Route exact path='/characters' component={CharacterDetailView} />
				<Route exact path='/comics' component={ComicDetailView} />
			</Switch>
)