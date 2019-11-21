import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class SurveyIntro extends Component {
  constructor(props) {
    super(props);
    window.onbeforeunload = function () {
      localStorage.clear();
      props.history.push('');
    }
    window.onload = function () {
      localStorage.clear();
      props.history.push('');
    }
    !localStorage.getItem('userData') && props.history.push('');
    this.state = {
      surveyId: '',
      userId: '',
      token: ''
    }
  }

  componentDidMount() {
    if (localStorage.getItem('userData')) {
      const token = JSON.parse(localStorage.getItem('userData')).token;
      axios.get('http://34.207.52.212:8080/users', { headers: { "Authorization": token }}).then((response) => {
        const username = JSON.parse(localStorage.getItem('userData')).username;
        var result = response.data.find(obj => {
          return obj.userName === username;
        });
        localStorage.setItem('userselected', JSON.stringify(result));
        this.setState({
          surveyId: result.surveyId,
          userId: result.userId,
          token
        })
      });
    }
  }

  takeSurvey = (e) => {
    this.props.history.push('survey');
    let res = axios.post('http://34.207.52.212:8080/addsurvey', {
      surveyid: this.state.surveyId,
      userid: this.state.userId,
    }, { headers: { "Authorization": this.state.token }})
      .then((response) => {
        if (response.status === 201) {
        }
      });
  }

  render() {
    return (
      <div style = {{ textAlign: 'center' }}>
        <div className='resultStyle' style = {{ marginTop: 200, display: 'inline-block', backgroundColor: 'white' }}>
          <p>Thanks for participating in the survey. We appreciate your feedback</p>
          <p>This study will not take a very long time to complete</p>
          <p className="text-center">Click on the take survey button to get started </p>
          <Button variant="primary" className='NavButtons' onClick={this.takeSurvey}>Take Survey</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(SurveyIntro);
