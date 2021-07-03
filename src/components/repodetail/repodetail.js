import React, { Component } from 'react';
import { withRouter } from 'react-router'

class RepoDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>Hi, I am a Car!</h2>
      </div>
    )
  }
}

export default withRouter(RepoDetail);