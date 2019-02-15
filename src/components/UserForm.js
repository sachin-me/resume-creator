import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUserDetail } from '../actions/action';

class UserForm extends Component {
  state = {
    fullname: "",
    contactNo: "",
    email: "",
    twitterLink: "",
    githubLink: "",
    linkedinLink: "",
    education: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(saveUserDetail(this.state))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Fullname"
            onChange={this.handleChange}
            name="fullname"
          />
          <input
            type="text"
            placeholder="Email"
            onChange={this.handleChange}
            name="email"
          />
          <input
            type="text"
            placeholder="Contact-no"
            onChange={this.handleChange}
            name="contactNo"
          />
          <input
            type="text"
            placeholder="Twitter-link"
            onChange={this.handleChange}
            name="twitterLink"
          />
          <input
            type="text"
            placeholder="Github-link"
            onChange={this.handleChange}
            name="githubLink"
          />
          <input
            type="text"
            placeholder="Linkedin-link"
            onChange={this.handleChange}
            name="linkedinLink"
          />
          <input
            type="text"
            placeholder="Education"
            onChange={this.handleChange}
            name="education"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(UserForm)