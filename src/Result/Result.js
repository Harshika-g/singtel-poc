import React from 'react';
import { Button } from 'react-bootstrap';
const result = (props) => {
    return (
        <div>
            <div className='resultStyle'>
                <h2 className="text-center">
                    Thanks for attempting the survey !
            </h2>
                <hr></hr>
                <h4 style={{ paddingTop: 20 }}> Assessment Level </h4>
                <h4> {props.remark.remark} </h4>
                <h4 style={{ paddingTop: 20 }}> {props.remark.desc} </h4>
                <h6 className="text-center" style={{ paddingTop: 54 }}>You have successfully answered all the questions {JSON.parse(localStorage.getItem('userData')).username} </h6>
                <h6> We will keep your responses confidential.  We will not link you responses with your name or anything else that might identify you</h6>
                <h6> You have scored {props.marks} marks in total</h6>
                <h6> The highest marks that can be obtained is {props.maxScore} </h6>
                <h6> Inorder to view your result click on the button below</h6>
                <Button variant="primary" className='NavButtons' onClick={props.showResultCard}>Show Result</Button>
            </div>
        </div>
    )
}
// <h4>The results will be sent on your registered email id.</h4>

export default result;
