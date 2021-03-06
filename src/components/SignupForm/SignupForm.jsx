import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <>
      <img src="https://i.imgur.com/bcYXOOF.png" height="300px"alt=""/>
      <div class="card">
      <div id="sign" class="card-body">
        <h3>Sign Up</h3>
        <label htmlFor="name">Name</label>
        <br></br>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="email">Email</label>
            <br></br>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="password">Password</label>
            <br></br>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="confirm">Confirm Password</label>
            <br></br>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
            />
            <br></br>
          <button id="buttbutt" disabled={this.isFormInvalid()}>Sign Up</button>
          &nbsp;&nbsp;
          <br></br>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    </div>
    </>
    );
  }
}

export default SignupForm;
