import React, { Component } from 'react';
import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import '../App.css';
import Scroll from '../containers/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({
          robots: users
        });
      });
  }

  onSearchChange = event => {
    this.setState({
      searchfield: event.target.value
    });
  };

  renderList() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }

  render() {
    // 만약에 느리면
    return !this.state.robots.length ? <h1>loading...</h1> : this.renderList();
  }
}

export default App;
