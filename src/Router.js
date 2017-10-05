import React from 'react';

import { Switch, Route, Redirect } from 'react-router';
import CharacterList from 'containers/mainList/CharacterList';
import ComicList from 'containers/mainList/ComicList';

export default () => (
		<Switch>
			<Redirect exact path='/' to='/characters' />
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/comics' component={ComicList} />
    </Switch>

);
