import React, { Component } from 'react';
import '../homePage.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Dropdown } from 'react-bootstrap';
import validation from '../Forms/ValidationCheckers';
import ResultCard from '../Result/ResultCard';
import TopNavBar from '../TopNavBar';

class HomePage extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    window.onload = function () {
      localStorage.clear();
      props.history.push('');
    }
    if (localStorage.getItem('userData')) {
      this.state = {
        user: JSON.parse(localStorage.getItem('userData')).username,
        isLoggedIn: true,
        surveyResult: [],
        allUsers: [],
        email: '',
        token: '',
        errors: {
          email: ''
        }
      }
      // this.cardArr = [
      //   {
      //     title: 'Total Users who are registered',
      //     count: this.state.allUsers.length,
      //     backgroundImage: 'linear-gradient(230deg, #759bff, #843cf6)',
      //   },
      //   {
      //     title: 'Users who completed the survey',
      //     count: this.state.surveyResult.length,
      //     backgroundImage: 'linear-gradient(230deg, #fc5286, #fbaaa2)',
      //   },
      //   {
      //     title: 'Users who did not complete the survey',
      //     count: this.state.allUsers.length - this.state.surveyResult.length,
      //     backgroundImage: 'linear-gradient(230deg, #ffc480, #ff763b)',
      //   }
      // ]
    } else {
      props.history.push('');
    }
  }

  componentDidMount() {
    this._isMounted = true;
    if (localStorage.getItem('userData')) {
      const token = JSON.parse(localStorage.getItem('userData')).token;
      axios.get('http://34.232.101.41:8080/users', { headers: { "Authorization": token }}).then((response) => {
        if (this._isMounted) {
          this.setState({
            allUsers: response.data,
            token: token,
          });
        }
      });
      axios.get('http://34.232.101.41:8080/allresults', { headers: { "Authorization": token }}).then((response) => {
        if (this._isMounted) {
          this.setState({
            surveyResult: response.data,
          });
        }
      });
    }
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }

  showResult = user => e => {
    e.preventDefault();
    localStorage.setItem('userselected', JSON.stringify(user));
    this.props.history.push('/resultcard');
  }

  emailEnter = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const { errors } = this.state;
    if(name === 'email') {
      errors.email =
        validation.validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
    }
    this.setState({ errors, [name]: value });
  }

  sendMail = (event) => {
    event.preventDefault();
    const { errors, email } = this.state;
    if (errors.email === '' && email.length > 0) {
      axios.post('http://34.232.101.41:8080/send', {
        to: this.state.email
      }, { headers: { "Authorization": this.state.token }})
      .then((response) => {
        if (response.status === 200) {
          alert('Invite sent');
        } else {
          alert('Please enter correct email address');
        }
      });
    }
  }
  logout = (event) => {
    event.preventDefault();
    alert('You have successfully logged out')
    this.props.history.push('');
  }
  render() {
    if (!localStorage.getItem('userData')) {
      return null;
    }
    const { errors } = this.state;
    let chartArr = [];
    let usersArr = [];
    // this.cardArr.map((op, index) => {
    //   chartArr.push(
    //   <div className="col-sm-4" key={'col' + index}>
    //     <div className="card" style={{ backgroundImage: op.backgroundImage }} key={'card' + index}>
    //       <div className="card-body" key={'body' + index} style={{ height: 130 }}>
    //         <h6 className="card-title" key={'title' + index} style={{ textAlign: 'center', fontSize: 20 }}>{op.title}</h6>
    //         <p className="card-text" key={'text' + index} style={{ textAlign: 'center' }}>{op.count}</p>
    //       </div>
    //     </div>
    //   </div>)
    // });
    this.state.allUsers.map((op, index) => {
      usersArr.push(
        <div className="card usercard" style={{ width: '80%', marginLeft: 20 }} key={'usercard' + index}>
          <h5 className="card-header" style={{ 'backgroundColor': 'lightslategrey' }}>{op.userName}</h5>
          <div className="card-body" key={'usercardBody' + index}>
            <p className="card-title" key={'usercardTitle' + index}>User Id : {op.userId}</p>
            <p className="card-text" key={'usercardText' + index}>Survey Id : {op.surveyId}</p>
            <p className="card-text" key={'userEmail' + index}>Email Address : {op.emailId}</p>
            <Button variant="primary" style={{ minWidth: '15%' }} onClick={this.showResult(op)} key={'usercardLink' + index}>Show Result Card</Button>
          </div>
        </div>
      )
    });
    return (
      <div>
        <TopNavBar title = 'Admin Console' user = {this.state.user} visible = 'visible'/>
        <div className="row">
        <div className="col-sm-4">
          <div className="card" style={{ backgroundImage: 'linear-gradient(230deg, #759bff, #843cf6)' }}>
            <div className="card-body" style={{ height: 130 }}>
              <h6 className="card-title" style={{ textAlign: 'center', fontSize: 20 }}>{'Total Users who are registered'}</h6>
              <p className="card-text" style={{ textAlign: 'center' }}>{this.state.allUsers.length}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{ backgroundImage: 'linear-gradient(230deg, #fc5286, #fbaaa2)' }}>
            <div className="card-body" style={{ height: 130 }}>
              <h6 className="card-title" style={{ textAlign: 'center', fontSize: 20 }}>{'Users who completed the survey'}</h6>
              <p className="card-text" style={{ textAlign: 'center' }}>{this.state.surveyResult.length}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{ backgroundImage: 'linear-gradient(230deg, #ffc480, #ff763b)' }}>
            <div className="card-body" style={{ height: 130 }}>
              <h6 className="card-title" style={{ textAlign: 'center', fontSize: 20 }}>{'Users who did not complete the survey'}</h6>
              <p className="card-text" style={{ textAlign: 'center' }}>{this.state.allUsers.length - this.state.surveyResult.length}</p>
            </div>
          </div>
        </div>
        </div>
        <div style = {{ marginTop: 20, marginBottom: 31 }}>
          <label htmlFor="email" style = {{ fontSize: 20, display: 'inline-block', margin: '0px 10px 0px 30px' }}>Email</label>
          <input type='email' name='email' className='input-block' onChange={this.emailEnter} style = {{ width: '25%', marginRight: 20, display: 'inline-block' }}/>
          <Button variant="primary" onClick={this.sendMail} className = 'emailBtn'>Send Invite</Button>
          {errors.email.length > 0 && <span className='error' style = {{ paddingLeft: 89, display: 'block' }}>{errors.email}</span>}
        </div>
        {usersArr}
      </div>
    )
  }
}

export default withRouter(HomePage);
