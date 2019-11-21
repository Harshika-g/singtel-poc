import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../form.css';
import axios from 'axios';
import validation from './ValidationCheckers';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    window.onload = function () {
      localStorage.clear();
      props.history.push('');
    }
    this.state = {
      // showFlashMsg: false,
      // allUsers: [],
      fName: '',
      lName: '',
      userName: '',
      email: '',
      password: '',
      errors: {
        fName: '',
        lName: '',
        userName: '',
        email: '',
        password: '',
      }
    }
  }

  // componentDidMount() {
  //   axios.get('http://3.233.186.167:8080/users').then((response) => {
  //     this.setState({
  //       allUsers: response.data
  //     })
  //   });
  // }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const { errors } = this.state;

    switch (name) {
      case 'fName':
        errors.fName =
          value.length < 3
            ? 'First Name must be 3 characters long!'
            : '';
        break;
      case 'lName':
        errors.lName =
          value.length <= 0
            ? 'Please enter your lastname!'
            : '';
        break;
      case 'userName':
        // errors.userName = this.state.allUsers.find(obj => obj.userName === value) ? 'userName already exist' : '';
        errors.userName = value.length < 3
        ? 'User Name must be 3 characters long!'
        : '';
        break;
      case 'email':
        errors.email =
          validation.validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (validation.validateForm(this.state.errors, this.state)) {
      axios.post('http://34.207.52.212:8080/adduser', {
        firstname: this.state.fName,
        lastname: this.state.lName,
        username: this.state.userName,
        emailId: this.state.email,
        password: this.state.password,
        isAdmin: 'Yes'
      })
        .then((response) => {
          if (response.status === 201) {

            // localStorage.setItem('showFlashMsg', true);
            alert('Congratulations !! You have successfully created an account');
            this.props.history.push('');
            // this.setState({
            //   showFlashMsg: true
            // });
            // setTimeout(() => {
            //   this.setState({
            //     showFlashMsg: false
            //   });
            //   this.props.history.push('');
            // }, 1000);
          } else {
            alert('Please use a different username')
          }
        });
    } else {
      alert('Please fill all the fields correctly')
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h1 className='loginHeader'>Create Account</h1>
        <label htmlFor="fName">First Name</label>
        <input type='text' name='fName' className='input-block' onChange={this.handleChange}/>
        {errors.fName.length > 0 && <span className='error'>{errors.fName}</span>}
        <label htmlFor="fName">Last Name</label>
        <input type='text' name='lName' className='input-block' onChange={this.handleChange}/>
        {errors.lName.length > 0 && <span className='error'>{errors.lName}</span>}
        <label htmlFor="fName">User Name</label>
        <input type='text' name='userName' className='input-block' onChange={this.handleChange}/>
        {errors.userName.length > 0 && <span className='error'>{errors.userName}</span>}
        <label htmlFor="email">Email</label>
        <input type='email' name='email' className='input-block' onChange={this.handleChange}/>
        {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
        <label htmlFor="password">Password</label>
        <input type='password' name='password' className='input-block' style={{ marginBottom: 0 }} onChange={this.handleChange}/>
        {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
        <button className='loginButton' style={{ marginTop: 15 }} onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default withRouter(SignupForm);
