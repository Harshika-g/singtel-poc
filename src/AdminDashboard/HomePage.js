import React, { Component } from 'react';
import '../homePage.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import ResultCard from '../Result/ResultCard';

class HomePage extends Component {
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
      }
      this.cardArr = [
        {
          title: 'Total Users who are registered',
          count: this.state.allUsers.length,
          backgroundImage: 'linear-gradient(230deg, #759bff, #843cf6)',
        },
        {
          title: 'Users who completed the survey',
          count: this.state.surveyResult.length,
          backgroundImage: 'linear-gradient(230deg, #fc5286, #fbaaa2)',
        },
        {
          title: 'Users who did not complete the survey',
          count: this.state.allUsers.length - this.state.surveyResult.length,
          backgroundImage: 'linear-gradient(230deg, #ffc480, #ff763b)',
        }
      ]
    } else {
      props.history.push('');
    }
  }

  componentDidMount() {
    if (localStorage.getItem('userData')) {
      const token = JSON.parse(localStorage.getItem('userData')).token;
      axios.get('http://34.232.101.41:8080/users', { headers: { "Authorization": token }}).then((response) => {
        this.setState({
          allUsers: response.data,
        });
      });
      axios.get('http://34.232.101.41:8080/allresults', { headers: { "Authorization": token }}).then((response) => {
        this.setState({
          surveyResult: response.data,
        });
      });
    }
  }

  showResult = user => e => {
    e.preventDefault();
    localStorage.setItem('userselected', JSON.stringify(user));
    this.props.history.push('/resultcard');
  }

  render() {
    if (!localStorage.getItem('userData')) {
      return null;
    }
    let chartArr = [];
    let usersArr = [];
    this.cardArr.map((op, index) => {
      chartArr.push(
      <div className="col-sm-4" key={'col' + index}>
        <div className="card" style={{ backgroundImage: op.backgroundImage }} key={'card' + index}>
          <div className="card-body" key={'body' + index} style={{ height: 130 }}>
            <h6 className="card-title" key={'title' + index} style={{ textAlign: 'center', fontSize: 20 }}>{op.title}</h6>
            <p className="card-text" key={'text' + index} style={{ textAlign: 'center' }}>{op.count}</p>
          </div>
        </div>
      </div>)
    });
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
        <div className='surveyHeader'>
          <h1 className='title'>Admin Console</h1>
          <h1 className='title' style={{ float: 'right' }}>Welcome {this.state.user}</h1>
        </div>
        <div className="row">
        <div className="col-sm-4">
          <div className="card" style={{ backgroundImage: this.cardArr[1].backgroundImage }}>
            <div className="card-body" style={{ height: 130 }}>
              <h6 className="card-title" style={{ textAlign: 'center', fontSize: 20 }}>{this.cardArr[0].title}</h6>
              <p className="card-text" style={{ textAlign: 'center' }}>{this.state.allUsers.length}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{ backgroundImage: this.cardArr[1].backgroundImage }}>
            <div className="card-body" style={{ height: 130 }}>
              <h6 className="card-title" style={{ textAlign: 'center', fontSize: 20 }}>{this.cardArr[1].title}</h6>
              <p className="card-text" style={{ textAlign: 'center' }}>{this.state.surveyResult.length}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{ backgroundImage: this.cardArr[2].backgroundImage }}>
            <div className="card-body" style={{ height: 130 }}>
              <h6 className="card-title" style={{ textAlign: 'center', fontSize: 20 }}>{this.cardArr[2].title}</h6>
              <p className="card-text" style={{ textAlign: 'center' }}>{this.state.allUsers.length - this.state.surveyResult.length}</p>
            </div>
          </div>
        </div>
        </div>
        {usersArr}
      </div>
    )
  }
}

export default withRouter(HomePage);
