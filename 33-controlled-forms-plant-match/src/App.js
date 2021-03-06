import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import HomeView from './components/HomeView';

class App extends React.Component {
  state = {
    view: 'home',
    username: null // TODO: replace null with 'ChromeBoi' or your name to see the greeting
  }

  changeView = (view) => {
    this.setState({ view })
  }

  changeUsername = username => {
    this.setState({ username })
  }


  render() {
    return (
      <div className="App">
       <Navbar changeView={this.changeView} view={this.state.view} username={this.state.username} />
       {this.state.view === 'login' && <Login changeView={this.changeView} changeUsername={this.changeUsername}/>}
       {this.state.view === 'home' && <HomeView />}
      </div>
    );
  }
}

export default App;
