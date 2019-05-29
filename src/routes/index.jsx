import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/navbar'
import Home from '../routes/home'
import Repos from '../routes/repos'
import Users from '../routes/users'

class App extends Component {
  state = {
    myRepositories: [],
    users: [],
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/repos' component={Repos} />
          <Route path='/users' render={(props) => <Users {...props} users={this.state.users} />} />
        </Switch>
      </React.Fragment>
    );
  }

  getUsers = () => {
    const request = new Request('https://api.github.com/users', {
      method: 'GET',
      headers: new Headers({
        'Authorization': process.env.ACCESS_TOKEN
      })
    });

    fetch(request)
      .then(res => res.json())
      .then((users) => {
        this.setState({ users })
      }).catch(err => console.log(err));;
  }
}

export default App;