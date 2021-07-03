import React, { Component } from 'react';
import SearchBar from '../components/searchbar/searchbar';
import RepoList from '../components/repolist/repolist';
import axios from 'axios';

class GitHubUserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      repos: [],
      sortDirection: 'desc',
      data: [],
    };
  }

  getRepos(username) {
    let data;
    let url = axios.get('https://api.github.com/users/' + username + '/repos', {
      params: {
        sort: 'pushed',
        direction: this.state.sortDirection
      }
    })
    .then(res =>{
      this.setState({repos: res.data }) 
      data = res.data;
    })
    .catch(function (error) {
      if (error.response) {
        data = error.response.data;
      }
    });

    if(!data){
      this.setState({repos: [] }) 
    }
  }

  getReadMe(username, repo) {
    return axios.get('https://raw.githubusercontent.com/' + username + '/' + repo + '/master/README.md',
      { headers: { 'Accept': 'application/vnd.github.html' } }
    ).then((response) => {
      console.log(response.data);
    })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });
  }

  getListTrees(username, repo) {
    return axios.get('https://api.github.com/repos/' + username + '/' + repo + '/git/trees/master?recursive=1',
      { headers: { 'Accept': 'application/vnd.github.html' } }
    ).then((response) => {
      console.log(response.data);
    })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });
  }

  handleSearchTextInput = (searchText) => {
    this.setState({
      searchText: searchText
    });
  }

  handleSubmit = () => {
    this.getRepos(this.state.searchText);
  }

  handleSortChange = (direction) => {
    this.setState({ sortDirection: direction }, () => {
      this.getRepos(this.state.searchText).then(this.updateRepos(direction));
    });
  }

  render() {
    return (
      <div className="wrapper">
        <SearchBar
          searchText={this.state.searchText}
          sortOrder={this.state.sortOrder}
          onSearchTextInput={(event) => this.handleSearchTextInput(event)}
          onSubmit={() => this.handleSubmit()}
        />

        <hr />

        <RepoList
          repos={this.state.repos}
          top={this.props.top}
          onSortChange={(event) => this.handleSortChange(event)}
        />
      </div>
    );
  }
}

export default GitHubUserRepos;
