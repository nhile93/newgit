import React, { Component } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.handleSearchTextInputChange = this.handleSearchTextInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event.target.value);
  }

  handleSearchTextInputChange(event) {
    this.props.onSearchTextInput(event.target.value);
  }

  render() {
    return (

        <Form inline onSubmit={this.handleSubmit} className="text-left container-fluid">
          <Form.Group as={Row} controlId="formInlineName">
            <Form.Label column sm="2">GitHub Username</Form.Label>
            <Col sm="5">
            {' '}
            <Form.Control type="text" placeholder="Enter username here" className="col-sm-2" value={this.props.searchText} 
            onChange={this.handleSearchTextInputChange} />
            {' '}
            </Col>
            <Col sm="1">
                <Button type="submit" className="btnSearch">Search</Button>
            </Col>
          </Form.Group>
          
        </Form>
    );
  }
}

export default SearchBar;
