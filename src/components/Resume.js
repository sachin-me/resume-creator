import React, { Component } from 'react';
import { connect } from 'react-redux';


class Resume extends Component {
  render() {
    return(
      <div className="resume-card">
          <div className="card-top">
            <h1>Ashwani Goswami</h1>
            <div className="user-info">
              <a href="#">goswami17829@gmail.com</a>
              <div>+91-8602690657</div>
            </div>
            <div className="user-detail">
              <div className="left-side">
                <div className="summary">
                  <h3>Summary</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, vitae iste sapiente illo nostrum corporis ipsum? Accusamus quas, libero iste amet ipsam necessitatibus unde consequuntur alias architecto voluptas aspernatur error?lorem</p>
                </div>
                <div className="hobbies">
                  <h3>Hobbies</h3>
                  <ul>
                    <li>Music</li>
                    <li>Coding</li>
                    <li>Reading book</li>
                    <li>Travelling</li>

                  </ul>
                </div>
              </div>
              <div className="right-side">
                <div className="Education">
                  <h3>Education</h3>
                  <div className="education-higher">
                    <span>Higher Secondary Certificate</span>
                    <p>D.A.V Public School</p>
                  </div>
                  <div className="education-higher">
                    <span>Senior Secondary Certificate</span>
                    <p>U.S.S College, Siwan, Bihar</p>
                  </div>
                </div>
                <div className="Achievement">
                <h3>Achievements</h3>

                <ul>
                    <li>Music</li>
                    <li>Coding</li>
                    <li>Reading book</li>
                    <li>Travelling</li>

                  </ul>
                </div>
              </div>
            </div>
          </div> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.userData
  }
}

export default connect(mapStateToProps)(Resume)