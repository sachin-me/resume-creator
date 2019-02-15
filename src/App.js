import React, { Component } from 'react';
import UserForm from './components/UserForm';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserForm /> */}
        <Resume />
      </div>
    );
  }
}

export default App;
