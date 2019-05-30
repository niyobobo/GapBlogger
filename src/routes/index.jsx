import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BASE_URL, API_TOKEN } from '../constants'
import NavBar from '../components/navbar'
import Home from '../routes/home'
import Repos from '../routes/repos'
import Users from '../routes/users'
import UserModal from '../components/userModal';

class App extends Component {
  request = (url) => new Request(url, {
    method: 'GET',
    headers: new Headers({
      'Authorization': API_TOKEN,
    })
  });

  state = {
    myRepositories: [],
    users: [],
    user: {},
    followerRepos: [],
    show: false,
  }

  componentDidMount() {
    this.getUsers();
    this.getMyRepositories();
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/'
            render={(props) => <Home {...props} repos={this.state.myRepositories} />} />
          <Route path='/repos'
            render={(props) => <Repos {...props} repos={this.state.followerRepos} />} />
          <Route path='/users'
            render={(props) => <Users {...props} users={this.state.users} onShowInfo={this.getSingleUser} />} />
        </Switch>
        <UserModal showDetails={this.state.user} onShowRepo={this.followerRepos} modalState={this.state.show} />
      </React.Fragment>
    );
  }

  getUsers = () => {
    fetch(this.request(`${BASE_URL}/niyobobo/following`))
      .then(res => res.json())
      .then((users) => {
        this.setState({ users })
      }).catch(err => err);;
  }

  getSingleUser = (username) => {
    fetch(this.request(`${BASE_URL}/${username}`))
      .then(response => response.json())
      .then(user => this.setState({ user }))
      .catch(err => err);
    this.setState({ show: true });
  }

  getMyRepositories = () => {
    fetch(this.request(`${BASE_URL}/niyobobo/repos`))
      .then(res => res.json())
      .then(myRepositories => this.setState({ myRepositories }))
      .catch(err => err);
  }

  followerRepos = () => {
    fetch(this.request(`${BASE_URL}/${this.state.user.login}/repos`))
      .then(res => res.json())
      .then(data => this.setState({ followerRepos: data }))
      .catch(err => err);
  }
}

export default App;