import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../form.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    window.onload = function () {
      props.history.push(props.history.pathname);
      // props.history.push('');
    }
    localStorage.clear();
    this.state = {
      username: '',
      password: '',
      // slide: false,
      // showComponent: false,
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    const isAdmin = this.props.history.location.pathname === '/login/admin' ? true : false;
    event.preventDefault();
    axios.post('http://34.232.101.41:8080/login', {
      username: this.state.username,
      password: this.state.password,
      isAdmin
    }).then((response) => {
        if (response.status === 200) {
          localStorage.setItem('userData', JSON.stringify({ username: this.state.username, token: response.data.token }));
          isAdmin ? this.props.history.push('adminPage') : this.props.history.push('introPage');
          // isAdmin ? this.props.history.push('adminPage') : this.props.history.push('survey');
        } else {
          alert('Please enter the details correctly');
        }
      })
      .catch(err => alert('Either username or password is incorrect'));
  }

  render() {
    localStorage.setItem('path', this.props.history.location.pathname);
    const isAdmin = this.props.history.location.pathname === '/login/admin' ? true : false;
    return (
      <div>
        <h1 className='loginHeader'>{isAdmin ? 'Admin Sign In' : 'Sign In'}</h1>
        <label htmlFor="fName">Enter UserName</label>
        <input type='text' name='username' className='input-block' noValidate onChange={this.handleChange} />
        <label htmlFor="password">Password</label>
        <input type='password' name='password' className='input-block' noValidate onChange={this.handleChange} />
        {!this.state.isAdmin && <a href='/#password_reset' style={{ float: 'left' }}> Forgot password ? </a>}
        <button className='loginButton' onClick={this.handleSubmit}>Login</button>
        <hr />
        <p className='createAccCallout' style={{ display: isAdmin && 'none' }}>Don't have an account?
          <a href='/#signup'> Sign up</a></p>
        <p className='createAccCallout' style={{ display: isAdmin && 'none' }}>Want to login as admin ?
          <a href='/#login/admin'> Click here </a></p>
        <p className='createAccCallout' style={{ display: !isAdmin && 'none' }}>Not an admin? want to login as user
          <a href=''> Click here </a></p>
      </div>
    )
  }
}

export default withRouter(Login);
