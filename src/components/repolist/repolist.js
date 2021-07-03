import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import RepoRow from '../reporow/reporow';
import RepoListHeader from '../../parts/header/repolistheader';
import UserNotFound from '../../components/usernotfound/usernotfound';

class RepoList extends Component {
  constructor(props) {
    super(props);
  }

  handleSortChange = (direction) => {
    this.props.onSortChange(direction);
  }

  render() {
    if (this.props.repos.length == 0 || this.props.repos == 'undefined') {
      return (
        <UserNotFound />
      );
    }
    let rows = [];
    this.props.repos.slice(0, this.props.top).forEach(function (repo) {
      rows.push(<RepoRow repo={repo} key={repo.name} />);
    });
    return (
      <div className="container">
        <RepoListHeader repos={this.props.repos} top={this.props.top} onSortChange={(event) => this.handleSortChange(event)} />

        <ListGroup className="text-left break-word">
          {rows}
        </ListGroup>
      </div>
    );
  }
}

export default RepoList;
