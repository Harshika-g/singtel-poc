import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../form.css';
import validation from './ValidationCheckers';
import axios from 'axios';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: props.history,
      emailSent: false,
      password: 'abc',
      confirmPassword: 'abc',
      email: '',
      errors: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  }

  onReturn = (event) => {
    event.preventDefault();
    this.props.history.push('');
  }

  checkPassword = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword && this.state.password.length >= 8) {
      axios.put('http://34.232.101.41:8080/reset', {
        emailid: this.state.email,
        confirmpwd: this.state.confirmPassword
      })
        .then((response) => {
          this.setState({
            emailSent: false
          });
          if (response.status === 200) {
            alert('Password updated successfully');
            console.log('history', localStorage.getItem('path'))
            this.props.history.push(localStorage.getItem('path'));
          } else {
            alert('Try resetting the password again');
          }
        })
    } else if (this.state.password !== this.state.confirmPassword) {
      alert('Kindly enter matching password');
      this.setState({
        password: '',
        confirmPassword: '',
      });
    } else {
      alert('Password must be minimum 8 characters');
      this.setState({
        password: '',
        confirmPassword: '',
      });
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { target } = event;
    const { name, value } = event.target;
    const { errors } = this.state;

    switch (name) {
      case 'email':
        errors.email = validation.validEmailRegex.test(target.value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      case 'confirmPassword':
        errors.confirmPassword =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    this.setState({
      [target.name]: target.value,
      errors
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (validation.validateForm(this.state.errors, this.state)) {
      axios.post('http://34.232.101.41:8080/forgot', {
        emailid: this.state.email
      }).then((response) => {
          if (response.status === 200) {
            alert('You can now reset your password');
            this.setState({
              emailSent: true
            })
          }
        })
        .catch(error => {
          alert('This email address doesn not exist');
        });
    } else {
      alert('Please Enter a correct email address');
    }
  }

  render() {
    const { errors, emailSent } = this.state;
    const loginView = (
      <div>
        <h1 className='loginHeader'></h1>
        <label htmlFor="fName">Enter password</label>
        <input type='password' name='password' className='input-block' noValidate onChange={this.handleChange} />
        <label htmlFor="password">Confirm password</label>
        <input type='password' name='confirmPassword' className='input-block' noValidate onChange={this.handleChange} style={{ marginBottom: 0 }} />
        <small>Password must be eight characters in length.</small>
        <button className='loginButton' onClick={this.checkPassword}>Reset password</button>
      </div>
    )
    const login = this.state.emailSent && loginView;
    return (
      <div>
        <h1 className='loginHeader'>Reset Password</h1>
        <label htmlFor="email" style={{ display: emailSent && 'none' }}>Enter your email address and we will send you a link to reset your password</label>
        <input type='email' name='email' style={{ display: emailSent && 'none' }} className='input-block' onChange={this.handleChange} noValidate />
        {errors.email.length > 0 &&
          <span className='error'>{errors.email}</span>}
        <button className='loginButton' onClick={this.handleSubmit} style={{ display: emailSent && 'none' }}>Verify email</button>
        {login}
      </div>
    )
  }
}

export default withRouter(Reset);
