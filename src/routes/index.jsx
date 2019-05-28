import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/navbar'
import Home from '../routes/home'
import Repos from '../routes/repos'
import Users from '../routes/users'

class App extends Component {
  render() { 
    return ( 
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Users} />
          <Route path='/repos' component={Repos} />
        </Switch>
      </div>
     );
  }
}
 
export default App;