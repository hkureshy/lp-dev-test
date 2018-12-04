import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from './Actions';
import { FullScreenCenter, Button, Input, Card, Error } from '../common';

class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMsg: ''
    };
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value
    });
  }

  validateEmail(email) {
    const em = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return em.test(String(email).toLowerCase());
  }

  validatePassword(password) {
    const pass = /^(?=.*[A-Z])(?=.*[!?#$*])(?=.*[a-z]).{8,}$/;
    return pass.test(String(password));
  }

  validateForm() {
    const { email, password } = this.state;

    if (email === '' || password === '') {
      this.setState({ errorMsg: 'All fields are required.' });
      return;
    }
    if (!this.validateEmail(email)) {
      this.setState({ errorMsg: 'Email address is not valid.' });
      return;
    }
    if (!this.validatePassword(password)) {
      this.setState({ errorMsg: 'Password must contain one uppercase letter, one lowercase letter, one special character (​ !?#$*​ ) and be at least 8 characters long.' });
      return;
    }

    this.setState({ errorMsg: '' });
    this.props.signUpUser(email, password);
  }

  render() {
    const { errorMsg } = this.state;

    return (
      <FullScreenCenter color="white">
        <div className="tc">
          <h1 className="mt5">Survey Form</h1>
          <Card classOverrides="mt5" cardWidth="500px">
            { errorMsg !== '' && <Error>{errorMsg}</Error> }
            <div>
              <label htmlFor="email" style={{ fontSize: '20px', float: 'left', padding: '10px' }}>Email</label>
              <Input type="text" id="email" onChange={e => this.handleChange(e)} inputWidth="450px" inputHeight="40px" />
            </div>
            <div>
              <label htmlFor="password" style={{ fontSize: '20px', float: 'left', padding: '10px' }}>Password</label>
              <Input type="password" id="password" onChange={e => this.handleChange(e)} inputWidth="450px" inputHeight="40px" />
            </div>
            <Button onClick={() => this.validateForm()} backgroundColor="black" classOverrides="mt4 mb4" borderRadius="small">Log In</Button>
          </Card>
        </div>
      </FullScreenCenter>
    );
  }
}

const mapStateToProps = ({ Reducer }) => {
  const { authenticated } = Reducer;
  return {
    authenticated
  };
};


export default connect(mapStateToProps, { signUpUser })(SignUpView);
