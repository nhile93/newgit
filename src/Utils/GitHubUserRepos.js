import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import RepoList from '../components/RepoList';
import axios from 'axios';


class GitHubUserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      repos: [],
      sortDirection: 'desc'
    };

    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRepos(username){
    return axios.get('https://api.github.com/users/' + username + '/repos', {
        params: {
          sort: 'pushed',
          direction: this.state.sortDirection
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });
  }

  getReadMe(username, repo){
    return axios.get('https://raw.githubusercontent.com/' + username +'/'+ repo + '/master/README.md',
      {headers: { 'Accept': 'application/vnd.github.html' }}
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

  getListTrees(username, repo){
    return axios.get('https://api.github.com/repos/' + username +'/'+ repo + '/git/trees/master?recursive=1',
      {headers: { 'Accept': 'application/vnd.github.html' }}
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
  updateRepos(response) {
    this.setState({ 
      repos: response ? response.data : null
    })
  }

  handleSearchTextInput(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleSubmit() {
    this.getRepos(this.state.searchText).then(this.updateRepos.bind(this));
  }

  handleSortChange(direction) {
    this.setState({ sortDirection: direction }, () => {
      this.getRepos(this.state.searchText).then(this.updateRepos.bind(this));      
    });    
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          sortOrder={this.state.sortOrder}
          onSearchTextInput={this.handleSearchTextInput}
          onSubmit={this.handleSubmit}
        />

        <hr />
        
        <RepoList 
          repos={this.state.repos}
          top={this.props.top}
          onSortChange={this.handleSortChange}
        />
      </div>
    );
  }
}

export default GitHubUserRepos;
