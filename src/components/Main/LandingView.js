import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { randomBackgroundColor, signUpUser, submitSurvey } from './Actions';
import { FullScreenCenter, Button } from '../common';

class LandingView extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.changeColor = this.changeColor.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSurveySubmit = this.handleSurveySubmit.bind(this);
  }

  changeColor() {
    this.props.randomBackgroundColor();
  }

  handleFormSubmit({ email, password }) {
    this.props.signUpUser(email, password);
  }
  handleSurveySubmit(data) {
    console.log('data', data);
    this.props.submitSurvey(data);
  }

  render() {
    const { bgColor } = this.props;
    return (
      <FullScreenCenter color={bgColor}>
        <div className="tc">

          <div className="mt5">
            <img src="/images/launchpeer-logo.png" alt="Launchpeer Logo" height="80px" />
          </div>

          <div className="f3 mt2 bg-white pa3 br3 ">
            Welcome to the Launchpeer code challenge! We’re glad you’re here!
          </div>

          <div className="f4 mt2 bg-white pa3 br3 ">
            The code for this page is found in `/src/components/Main/LandingView`.
          </div>
          <div>
            <Button onClick={() => this.changeColor()} backgroundColor="black" classOverrides="mt4">
            Change the background color!
            </Button>
          </div>
          <div>

            <Button onClick={() => browserHistory.push('/signup')} backgroundColor="black" classOverrides="mt4">
            Go to sign up page
            </Button>
          </div>

        </div>
      </FullScreenCenter>

    );
  }
}

const mapStateToProps = ({ Reducer }) => {
  const { bgColor } = Reducer;
  return {
    bgColor
  };
};


export default connect(mapStateToProps, { randomBackgroundColor, signUpUser, submitSurvey })(LandingView);
