import React, { Component } from 'react';
import { Card, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import TabsView from './TabView';
import { CSSTransition } from 'react-transition-group';
import '../panel.css';

class Panel extends Component {
  constructor(props) {
    super(props);
    window.onload = function () {
      localStorage.clear();
      props.history.push('');
    }
    this.state = {
      answerMarked: this.props.answerMarked,
      answerIndex: undefined,
      qWeightage: props.weightage,
      selectedAnswerWeightage: 0,
      score: undefined,
      answerId: undefined
    }
    this.onAnswerCick = this.onAnswerCick.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.pushBackQuestion = this.pushBackQuestion.bind(this);
    this.changeSection = this.changeSection.bind(this);
  }

  changeSection(category) {
    this.props.changeSection(category);
  }

  onAnswerCick(event) {
    if (event.target.className !== 'text') {
      return true;
    }
    const buttonCount = document.querySelectorAll('.choiceBox');
    const buttonId = event.target.getAttribute('id').split('_')[1];
    const buttonType = event.target.getAttribute('type');
    const answerIndex = document.querySelector('#radioCustomButton_' + buttonId).getAttribute('data-option-index');
    const answerId = document.querySelector('#radioCustomButton_' + buttonId).getAttribute('data-answer-id');
    this.selectedAnswerWeightage = document.querySelector('#radioCustomButton_' + buttonId).getAttribute('data-answer-weightage');
    if (buttonType === "radio") {
      buttonCount.forEach((ele, i) => {
        document.querySelector('#radioCustomButton_' + i).style.background = '#d1d3d1';
        document.querySelector('#text_' + i).style.fontWeight = 'normal';
        document.querySelector('#text_' + i).style.color = 'black';
      })
      this.scoreArray[Number(this.props.questionNo) - 1] = this.selectedAnswerWeightage * this.weightage;
      localStorage.setItem(this.props.category, JSON.stringify(this.scoreArray));
    }
    document.querySelector('#radioCustomButton_' + buttonId).style.background = '#ffa500';
    // document.querySelector('#text_'+buttonId).style.fontWeight = 'bold';
    document.querySelector('#text_' + buttonId).style.color = '#007bff';
    this.setState({
      answerMarked: true,
      answerIndex: answerIndex,
      answerId: answerId,
      qWeightage: this.props.weightage,
      selectedAnswerWeightage: this.selectedAnswerWeightage,
      answerText: '',
      score: this.selectedAnswerWeightage * this.weightage
    });
    // setTimeout(() => {
    this.props.answerSelectedPanel([this.props, this.state, false]);
    // }, 500)
  }

  changeInput(event) {
    this.props.answerSelectedPanel([this.props, this.state, true]);
    this.setState({
      answerMarked: false,
      slide: true
    });
    setTimeout(() => {
      this.setState({
        slide: false
      });
    }, 600);
  }

  onSubmit(event) {
    this.props.answerSelectedPanel([this.props, this.state, true]);
    this.setState({
      answerMarked: false,
    });
    // this.props.history.push('result')
  }

  pushBackQuestion() {
    this.setState({
      answerMarked: true
    })
    this.props.pushBackQuestion(this.props.qIndex);
  }

  render() {
    const answerArr = this.props.answers.filter(obj => obj.option !== null);
    this.weightage = this.props.weightage;
    this.selectedAnswerWeightage = 0;
    this.scoreArray = localStorage.getItem(this.props.category) ? JSON.parse(localStorage.getItem(this.props.category)) : [];
    return (
      <div style={{ paddingBottom: 50 }}>
        <Card key={this.props.questionId} style={{ width: '40rem', minHeight: 'auto', top: '12px' }} className="keep-center text-left ">
          <Card.Body style={{ padding: '2px 44px', paddingBottom: 30 }}>
            <p style={{ color: 'grey', fontSize: 12, paddingBottom: 21 }}> *Kindly answer all questions in this section inorder to move to the next section</p>
            <TabsView selCategory={this.props.category} changeSection={this.changeSection} visitedCategories={this.props.visitedCategories} />
            <p style={{ fontSize: 12, marginTop: 30, marginBottom: 10 }}>Question <span>{this.props.questionNo}</span> of <span>{this.props.categorylength}</span></p>
            {this.props.overLay.length > 0 && <OverlayTrigger placement="top" overlay={<Popover id="popover-basic" className='popup'>
              <Popover.Title as="h3">Descrition</Popover.Title>
              <Popover.Content>
                {this.props.overLay}
                  </Popover.Content>
            </Popover>} >
              <p className='question'>{this.props.questionDescription.split('?')[0]} ?</p>
            </OverlayTrigger>}
            {this.props.overLay.length === 0 && <p className='question'>{this.props.questionDescription.split('?')[0]} ?</p>}
            {answerArr.map((op, index) => {
              return <button className='choiceBox' onClick={this.onAnswerCick} key={'button_' + index} id={'button_' + index} type={this.props.answerType === 'Single Selection' ? 'radio' : 'checkbox'}>
                <div className='radioParent' id={'radioParent_' + index} key={'radioParent_' + index}>
                  <div
                    className="radioCustomButton"
                    id={'radioCustomButton_' + index}
                    key={'radioCustomButton_' + index}
                    style={{ backgroundColor: (this.scoreArray[Number(this.props.questionNo - 1)] / this.weightage) === Number(op.weightage) ? '#ffa500' : null }}
                    name={this.props.questionId}
                    value={op._id}
                    data-option-index={index}
                    data-question-weightage={this.props.weightage}
                    data-answer-weightage={op.weightage}
                    data-answer-id={op._id}
                  />
                </div>
                <div style={{ width: 493, color: (this.scoreArray[Number(this.props.questionNo - 1)] / this.weightage) === Number(op.weightage) ? '#007bff' : null, fontWeight: (this.scoreArray[Number(this.props.questionNo - 1)] / this.weightage) === Number(op.weightage) ? 'normal' : null }} className='text' id={'text_' + index} htmlFor={index} type={this.props.answerType === 'Single Selection' ? 'radio' : 'checkbox'}>{op.option}</div>
                {op.hint.length > 0 && <OverlayTrigger placement="top" overlay={<Popover id="popover-basic" className='popup' id={'tooltip_' + index}>
                  <Popover.Title as="h3">Descrition</Popover.Title>
                  <Popover.Content>
                    {op.hint}
                  </Popover.Content>
                </Popover>} >
                  <div style={{ display: 'table-cell', verticalAlign: 'middle' }}><div style={{ backgroundImage: "url('./icon.png')", display: 'table-cell', height: 25, width: 25, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} className={'icon_' + index} /></div>
                </OverlayTrigger>}
              </button>
            })}
            {(this.props.qIndex + 1 > 1) ? <Button variant="primary" onClick={this.pushBackQuestion} className='NavButtons'>Back</Button> : null}
            {(this.props.qIndex < this.props.totalLength - 1) ? <Button variant="primary" className='NextButton NavButtons' onClick={this.changeInput} disabled={!this.props.answerMarked}>Next</Button> : null}
            {(this.props.qIndex === this.props.totalLength - 1) ? <Button variant="primary" className='NextButton NavButtons' onClick={this.onSubmit} disabled={!this.props.answerMarked}>Submit</Button> : null}
          </Card.Body>
        </Card >
      </div >
    )
  }
}

export default withRouter(Panel);
