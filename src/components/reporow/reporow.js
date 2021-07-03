import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import TimeAgo from 'react-timeago';
import RepoDetail from '../repodetail/repodetail';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class RepoRow extends Component {

  constructor(props) {
    super(props);

   // this.handleRepo = this.handleRepo.bind(this);
   this.state = {
     url: '',
   }
  }

  handleClick = (e) => {
    console.log(e.currentTarget.dataset.space);
    // alert(e.currentTarget.dataset.space);
    this.state.setState({url: e.currentTarget.dataset.space});
  }

  render() {
    if(this.props.repo){
        return (
          <Router>
            <ListGroupItem className="text-left" header={this.props.repo.name} data-space={this.props.repo.name}>
              <h4 id="test">{this.props.repo.name}</h4>
              <Link to={{ pathname: '/detail/'+this.props.repo.name}}>{this.props.repo.name}</Link>
              {/* <Route path="/detail/:id" components={RepoDetail} /> */}
              <Switch><Route path={`/detail/:name`} component = {RepoDetail} /></Switch>
              
              <br />
              <p className="limitText">{this.props.repo.description}</p>
              <span className="small">Updated <TimeAgo date={this.props.repo.pushed_at} /></span>
            </ListGroupItem>
          </Router>
      );
    }else{
      <ListGroupItem className="text-left">
          <h4>The user not found</h4>
      </ListGroupItem>
    }
  }
}

export default RepoRow;
