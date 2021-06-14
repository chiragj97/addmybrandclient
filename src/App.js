import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Map} />
      </Switch>
    </div>
  );
}

export default App;
