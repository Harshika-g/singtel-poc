import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class ResultCard extends Component {
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
    this.state = {
      currentResult: [],
      currentUser: JSON.parse(localStorage.getItem('userselected'))
    }
    this.resultStyle = {
      width: '45rem',
      margin: '105px auto',
      textAlign: 'center',
      backgroundColor: '#FFE082',
      border: '1px solid black',
      borderRadius: '5px',
      padding: 30
    }
  }

  componentDidMount() {
    if (this.state.currentUser) {
      const token = JSON.parse(localStorage.getItem('userData')).token;
      axios.get('http://34.232.101.41:8080/allresults', { headers: { "Authorization": token }})
      .then((response) => {
        var result = response.data.find(obj => {
          return obj.surveyId === this.state.currentUser.surveyId;
        });
        this.setState({
          currentResult: result
        });
        console.log('success', response.data[0], 'result', this.state.currentResult);
      });
    }
  }
  render() {
    const { currentResult, currentUser } = this.state;
    if (!currentResult) {
      return <div style = {{ textAlign: 'center' }}><div className='resultStyle' style = {{ marginTop: 115, display: 'inline-block' }}><h2 className="text-center">Sorry but user has not attempted the survey yet !</h2></div></div>
    } else if (currentResult.length === 0) {
      return null;
    }
    const { firstName, lastName, userName, surveyId } = currentUser;
    return (
      <div>
        <div style={{ margin: '0 auto', textAlign: 'left', color: '#00408f', width: '66%', marginTop: '30' }}>
          <div> Name : {firstName} {lastName}</div>
          <div> UserName : {userName} </div>
          <div> Survey Id : {surveyId} </div>
        </div>
        <div className='resultTable' style={{ margin: '0 auto', width: '71%' }}>
          {
            <table>
              <thead style={{ color: 'white', backgroundColor: '#788298' }}>
                <tr>
                  <td className="qNo header">Q.No</td>
                  <td className="qDesc header">Question Description</td>
                  <td className="qAns header">Your Answer</td>
                  <td className="qWeight header">Weightage</td>
                </tr>
              </thead>
              <tbody>
                {currentResult.result.map((ob, indx) => {
                  return (
                    <tr key={'tr' + (indx)}>
                      <td className="qNo" key={'qno' + (indx)}>{indx + 1}</td>
                      <td className="qDesc" key={'qdesc' + (indx)}>{ob.questiondescription}</td>
                      <td className="qAns" key={'qans' + (indx)}> {ob.providedoption}</td>
                      <td className="qWeight" key={'qweight' + (indx)}>{ob.weightage}</td>
                    </tr>
                  )
                })}
              </tbody>
              <thead className='totalScore'>
                <tr>
                  <td colSpan={3} style={{ padding: 10, border: '1px solid black' }}> Total Weightage</td>
                  <td colSpan={2} style={{ border: '1px solid black' }}>{currentResult.surveyWeightage}</td>
                </tr>
              </thead>
              <thead className='totalScore'>
                <tr>
                  <td colSpan={3} style={{ padding: 10, border: '1px solid black' }}> Remarks </td>
                  <td colSpan={2} style={{ border: '1px solid black' }}>{currentResult.remark}</td>
                </tr>
              </thead>
            </table>
          }
        </div>
      </div>
    )
  }
}
// <h4>The results will be sent on your registered email id.</h4>

export default ResultCard;
