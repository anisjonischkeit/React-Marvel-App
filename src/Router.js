import React from 'react';

import { Switch, Route, Redirect } from 'react-router';
import CharacterList from 'containers/mainList/CharacterList';
import ComicList from 'containers/mainList/ComicList';
import CreatorList from 'containers/mainList/CreatorList';
import EventList from 'containers/mainList/EventList';
import SeriesList from 'containers/mainList/SeriesList';
import StoryList from 'containers/mainList/StoryList';

export default () => (
		<Switch>
			<Redirect exact path='/' to='/characters' />
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/comics' component={ComicList} />
      <Route exact path='/creators' component={CreatorList} />
      <Route exact path='/events' component={EventList} />
      <Route exact path='/series' component={SeriesList} />
      <Route exact path='/stories' component={StoryList} />
    </Switch>

);
