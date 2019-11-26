import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../form.css';
import PasswordResetForm from './PasswordResetForm';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import TopNavBar from '../TopNavBar';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    window.onload = function () {
      localStorage.clear();
      props.history.push('');
    }
  }

  render() {
    const path = this.props.history.location.pathname;
    const loginView = (<LoginForm />)
    const signupView = (<SignupForm />);
    const resetView = (<PasswordResetForm />)
    const showMsg = JSON.parse(localStorage.getItem('showFlashMsg')) ? JSON.parse(localStorage.getItem('showFlashMsg')) : false;
    const flashMsg = (
      <div className='flashMsg'>
        <strong>Congratulations you have successfully created an account, Redirecting you to login page</strong>
      </div>
    );
    return (
      <div className={"App" + (showMsg ? 'appOpacity' : null)}>
        <TopNavBar title = 'DOT' user = '' visible = 'hidden'/>
        <div className='auth-form px-3' style={{ opacity: showMsg ? 0.5 : 1 }}>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='login'>
              <div className='loginContainer'>
                {path === '/' || path === '/login' || path === '/login/admin' ? loginView : (path === '/signup' ? signupView : resetView)}
              </div>
            </div>
          </form>
        </div>
        {showMsg ? flashMsg : null}
      </div>
    )
  }
}

export default FormContainer;
