import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import RepoRow from './RepoRow';
import RepoListHeader from '../parts/header/RepoListHeader';
import UserNotFound from './UserNotFound';

class RepoList extends Component {
  constructor(props) {
    super(props);

    this.handleSortChange = this.handleSortChange.bind(this);
  }
  
  handleSortChange(direction) {
    this.props.onSortChange(direction);
  }

  render() {
    if (!this.props.repos) {
      return (
        <UserNotFound />
      );
    }
    var rows = [];
    this.props.repos.slice(0, this.props.top).forEach(function(repo) {
      rows.push(<RepoRow repo={repo} key={repo.name} />);
    });
    return (
      <div className="container">
        <RepoListHeader repos={this.props.repos} top={this.props.top} onSortChange={this.handleSortChange} />

        <ListGroup className="text-left break-word">
          {rows}
        </ListGroup>
      </div>
    );
  }
}

export default RepoList;
