import React, { Component } from 'react';
import { Container , Row, Col, FormControl, Form } from 'react-bootstrap';

class RepoListHeader extends Component {
  constructor(props) {
    super(props);

    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(event) {
    this.props.onSortChange(event.target.value);
  }

  render() {
    if (!this.props.repos) {
      return null;
    }

    return (
        <Container className="fillterBar">
          <Row>
            <Col md={8} className="text-left">
              <h4>Repositories</h4>
            </Col>

            <Col md={4}>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" placeholder="select" onChange={this.handleSortChange}>
                  <option value="desc">Most recent first</option>
                  <option value="asc">Oldest first</option>
              </Form.Control>
            </Form.Group>
            </Col>
          </Row>

          <Row className="text-left">
            <Col md={12}>
                <p>Found {this.props.repos.length} repositories.
                {this.props.top && 
                  <span>{' '}Showing top {this.props.top}.</span>
                }
              </p>

            </Col>
          </Row>
        </Container>
    );
  }
}

export default RepoListHeader;
