import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Button, Dropdown } from 'react-bootstrap';

class TopNavBar extends Component {
  constructor(props) {
    super(props);
  }

  logout = (event) => {
    event.preventDefault();
    alert('You have successfully logged out')
    this.props.history.push('');
  }

  render() {
    return(
      <div className='surveyHeader'>
        <h1 className='title'>{this.props.title}</h1>
        <Dropdown className = 'logoutBtn' style = {{ visibility: this.props.visible}}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">Welcome {this.props.user}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Name : {this.props.user}</Dropdown.Item>
            <Dropdown.Item>
              <Button variant="primary" onClick={this.logout} className = 'emailBtn' style = {{ minWidth: '100%', margin: '10px 0px' }}>Logout</Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

export default withRouter(TopNavBar);
