import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Panelview from './Question/Panelview';
import Result from './Result/Result';
import QuestionSet from './api/questionSet';
import ResultCard from './Result/ResultCard';
import _ from 'lodash';

class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    !localStorage.getItem('userData') && props.history.push('');
    window.onbeforeunload = function () {
      localStorage.clear();
      props.history.push('');
    }
    window.onload = function () {
      localStorage.clear();
      props.history.push('');
    }
    this.state = {
      questions: [],
      showResultCard: false,
      updatedQuestionList: [],
      visitedCategories: ['Technology Section'],
      panelQuestion: [],
      token: undefined,
      remarks: [
        {
          remark: 'Base',
          desc: 'Congrats, it looks like you are making the first strides in your DevOps journey!'
        },
        {
          remark: 'Beginner',
          desc: 'Congrats, it looks like you are on your way with your DevOps journey!'
        },
        {
          remark: 'Advance',
          desc: 'Congrats, it looks like you are on your way with your DevOps journey!'
        },
        {
          remark: 'Expert',
          desc: 'Whoa, DevOps done right! But there is always room for improvement, amiright?'
        }
      ],
      prevQuestionCategory: '',
      panelIndex: 0,
      resultState: false,
      allUsers: [],
      currentUser: {},
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    if (localStorage.getItem('userData')) {
      const token = JSON.parse(localStorage.getItem('userData')).token;
      axios.get('http://34.207.52.212:8080/questions', { headers: { "Authorization": token }}).then((response) => {
        response.data.forEach(function (obj, i) {
          obj.answerMarked = false;
          if (i === 0 || (i !== 0 && obj.category !== response.data[i - 1].category)) {
            obj.questionNo = 1;
          } else {
            obj.questionNo = response.data[i - 1].questionNo + 1;
          }
          const arr = _.shuffle(obj.answers);
          obj.answers = arr;
        });
        if (this._isMounted) {
          this.setState({
            questions: response.data,
            panelQuestion: response.data[0],
            prevQuestionCategory: response.data[0].category,
          })
        }
      });
      axios.get('http://34.207.52.212:8080/users', { headers: { "Authorization": token }}).then((response) => {
        const username = JSON.parse(localStorage.getItem('userData')).username;
        var result = response.data.find(obj => {
          return obj.userName === username;
        });
        if (this._isMounted) {
          localStorage.setItem('userselected', JSON.stringify(result));
          this.setState({
            allUsers: response.data,
            currentUser: result,
            token
          })
        }
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  showResult = () => {
    this.setState({
      showResultCard: true
    });
  }

  hideResultCard = () => {
    this.setState({
      showResultCard: false
    })
  }
  answerSelected(obj) {
    const [quesData, event] = [...obj];
    const updatedQuestions = [...this.state.questions];
    let currentQuestion = updatedQuestions[quesData.qIndex];
    updatedQuestions[quesData.qIndex].selectedAnswerIndex = event.answerIndex;
    updatedQuestions[quesData.qIndex].score = event.score;
    updatedQuestions[quesData.qIndex].answerMarked = true;
    const max = Math.max.apply(Math, currentQuestion.answers.map(function (o) { return o.weightage; }))
    currentQuestion.maxWeightage = max * currentQuestion.weightage
    this.setState({
      questions: updatedQuestions
    });
  }

  pushNextQuestion(indx) {
    const catArr = this.state.visitedCategories;
    if (indx !== this.state.questions.length) {
      catArr.indexOf(this.state.questions[indx].category) === -1 && catArr.push(this.state.questions[indx].category);
      this.setState({
        panelIndex: indx,
        panelQuestion: this.state.questions[indx],
        visitedCategories: catArr,
        prevQuestionCategory: this.state.questions[indx - 1].category,
      })
    } else {
      this.postData()
      this.setState({
        resultState: true
      })
    }
  }

  pushBackQuestion(indx) {
    const category = this.state.questions[indx - 2] ? this.state.questions[indx - 2].category : 'Technology Section';
    this.setState({
      panelIndex: indx - 1,
      panelQuestion: this.state.questions[indx - 1],
      prevQuestionCategory: category,
    })
  }

  answerSelectedPanel(obj) {
    let [quesData, event, changeQuestion] = [...obj];
    let questionIndex = quesData.qIndex;
    this.answerSelected(obj);
    changeQuestion && setTimeout(() => this.pushNextQuestion(questionIndex + 1), 100);
  }

  postData() {
    const { userId, userName, surveyId } = this.state.currentUser;
    const myRemark = this.state.remarks[Math.floor(Math.random() * this.state.remarks.length)];
    var totalScore = this.state.questions.reduce(function (accumulator, obj) {
      return accumulator + obj.score;
    }, 0);
    this.setState({
      updatedQuestionList: this.state.questions,
      resultState: true
    })
    let finalresult = [];
    this.state.updatedQuestionList.forEach((obj, i) => {
      finalresult.push({
        questionid: obj.questionId,
        questiondescription: obj.questionDescription,
        questionweightage: obj.weightage,
        providedoption: obj.answers[obj.selectedAnswerIndex].option,
        weightage: obj.score,
      });
    })
    const finalResponse = {
      surveyid: surveyId,
      userid: userId,
      username: userName,
      finalresult,
      finalremark: myRemark.remark,
      finalweightage: totalScore,
    }
    let res = axios.post('http://34.207.52.212:8080/result', {
      surveyid: surveyId,
      userid: userId,
      username: userName,
      finalresult,
      finalremark: myRemark.remark,
      finalweightage: totalScore,
    }, { headers: { "Authorization": this.state.token }})
      .then((response) => {
        if (response.status === 201) {
        }
      });
  }

  changeSection(category) {
    const indx = this.state.questions.findIndex((obj) => obj.category === category);
    this.setState({
      panelIndex: indx,
      panelQuestion: this.state.questions[indx],
      prevQuestionCategory: this.state.questions[indx - 1] ? this.state.questions[indx - 1].category : 'Technology Section',
    })
  }

  render() {
    if (!localStorage.getItem('userData')) {
      return null;
    }
    const { firstName, lastName, userName, surveyId } = this.state.currentUser;
    let panelView, resultView, surveyComplete = null;
    const myRemark = this.state.remarks[Math.floor(Math.random() * this.state.remarks.length)];
    var totalScore = this.state.updatedQuestionList.reduce(function (accumulator, obj) {
      return accumulator + obj.score;
    }, 0);
    var maxTotal = this.state.updatedQuestionList.reduce(function (accumulator, obj) {
      return accumulator + obj.maxWeightage;
    }, 0);
    var percentTage = Math.round((totalScore * 100) / maxTotal);
    let categorylength = this.state.questions.filter(o => o.category === this.state.panelQuestion.category).length;
    if (this.state.questions.length > 0) {
      panelView = (
        <Panelview {...this.state.panelQuestion}
          qIndex={this.state.panelIndex}
          allUsers={this.state.allUsers}
          changeSection={(category) => this.changeSection(category)}
          totalLength={this.state.questions.length}
          visitedCategories={this.state.visitedCategories}
          categorylength={categorylength}
          prevQuestionCategory={this.state.prevQuestionCategory}
          answerSelectedPanel={(obj) => this.answerSelectedPanel(obj)}
          pushBackQuestion={(indx) => this.pushBackQuestion(indx)} />
      )
      surveyComplete = (
        <div>
          <Result showResultCard={this.showResult} marks={totalScore} maxScore={maxTotal} remark={myRemark} />
        </div>
      )
      resultView = (<ResultCard />)
    }
    return (
      <div className="App">
        <h1 className="surveyHead">DOT</h1>
        {this.state.resultState ? this.state.showResultCard ? resultView : surveyComplete : panelView}
      </div>
    )
  }

}

export default withRouter(App);
