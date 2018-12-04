import React, { Component } from 'react';
import { FullScreenCenter } from '../common';


class CongratsView extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <FullScreenCenter color="white">
        <div className="tc">
          <h1>Contratulations</h1>
          <div>
            <h3>You have completed the survey</h3>
          </div>
        </div>
      </FullScreenCenter>
    );
  }
}


export default CongratsView;
