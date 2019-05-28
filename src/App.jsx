import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainApp from './routes/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={MainApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
