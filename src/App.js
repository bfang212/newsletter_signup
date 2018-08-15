import React, { Component } from 'react';
import EmailCollection from './containers/EmailCollection';
import FullNameCollection from './containers/FullNameCollection';
import Congratulations from './containers/Congratulations';
import './styles/main.css';

class App extends Component {
  state = { 
    email: null,
    fullName: {},
    view: 'emailCollection',
  };

  handleEmailSubmit = (email) => {
    this.setState({
      email,
      view: 'fullNameCollection',
    })
  }

  handleOnSignup = (fullName) => {
    this.setState({
      fullName,
      view: 'congratulations'
    }, this.submitNewsLetterRequest)
  }

  submitNewsletterRequest = () => {
    const { email, fullName } = this.state
    console.log(email, fullName);
  }

  renderView() {
    if (this.state.view === 'emailCollection') {
      return <EmailCollection handleSubmit={ this.handleEmailSubmit }/>
    }
    if (this.state.view === 'fullNameCollection') {
      return <FullNameCollection handleSubmit={ this.handleOnSignup }/>
    }
    if (this.state.view === 'congratulations') {
      return <Congratulations/>
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

export default App;
