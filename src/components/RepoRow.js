import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import TimeAgo from 'react-timeago';

class RepoRow extends Component {

  constructor(props) {
    super(props);

   // this.handleRepo = this.handleRepo.bind(this);
  }

  handleClick(e) {
    console.log(e.currentTarget.dataset.space);
    alert(e.currentTarget.dataset.space);
  }

  render() {
    if(this.props.repo){
        return (
          <ListGroupItem className="text-left" header={this.props.repo.name} href={this.props.repo.html_url} data-space={this.props.repo.name} onClick={this.handleClick}>
            <h4 id="test">{this.props.repo.name}</h4>
            <a href={this.props.repo.html_url} target="_blank">{this.props.repo.html_url}</a><br />
            <p className="limitText">{this.props.repo.description}</p>
            <span className="small">Updated <TimeAgo date={this.props.repo.pushed_at} /></span>
          </ListGroupItem>
      );
    }else{
      <ListGroupItem className="text-left">
          <h4>The user not found</h4>
      </ListGroupItem>
    }
  }
}

export default RepoRow;
