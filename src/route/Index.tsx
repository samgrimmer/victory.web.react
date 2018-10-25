import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../components/Home';
import Events from '../components/Events';

export default () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/events" component={Events} />
  </Switch>
);
