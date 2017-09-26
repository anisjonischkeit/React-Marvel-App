import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import CharacterList from 'containers/mainList/CharacterList';
import ComicList from 'containers/mainList/CharacterList';

export default () => (
  <Router>
		<Switch>
			<Redirect exact path='/' to='/characters' />
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/comics' component={ComicList} />
    </Switch>
  </Router>
);
