import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        <img src={"../BitCoin_Buddy_logo.png"} alt="BitCoin_Buddy_logo.png" width="50%" height="50%"/>
          <div>&nbsp;</div>

          <div id="coindesk-widget" data-align="center"></div> 
              {
                isAuthenticated() && (
                    <h4>
                      You are logged in! You can now view your{' '}
                      <Link to="profile">profile area</Link>
                      .
                    </h4>
                  )
              }
              {
                !isAuthenticated() && (
                    <h4>
                      You are not logged in! Please{' '}
                      <a
                        style={{ cursor: 'pointer' }}
                        onClick={this.login.bind(this)}
                      >
                        Log In
                      </a>
                      {' '}to continue.
                    </h4>
                  )
              }
      </div>
    );
  }
}

export default Home;
