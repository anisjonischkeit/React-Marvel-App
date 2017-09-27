import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import CharacterList from 'containers/mainList/CharacterList';
import ComicList from 'containers/mainList/CharacterList';

export default () => (
  <BrowserRouter>
		<Switch>
			<Redirect exact path='/' to='/characters' />
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/comics' component={ComicList} />
    </Switch>
  </BrowserRouter>
);
