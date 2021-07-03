import React from 'react';
import { shallow, mount } from 'enzyme';

import RepoRow from '../components/RepoRow';
import { ListGroupItem } from 'react-bootstrap';
import TimeAgo from 'react-timeago';

describe('RepoRow', () => {
    var repo = {
        "name": "some-repository",
        "html_url": "https://some-url.com",
        "description": "Some description goes here.",
        "pushed_at": "2016-12-16T19:48:55Z"
    };

    it('renders without crashing', () => {
        shallow(<RepoRow repo={repo} key={repo.name} />);
    });

    it('renders a ListGroupItem with proper attributes', () => {
        const wrapper = shallow(<RepoRow repo={repo} key={repo.name} />);
        const listGroupItem = wrapper.find(ListGroupItem);

        expect(listGroupItem).toBeDefined();
        expect(listGroupItem).toHaveProp('href', 'https://some-url.com');
        expect(listGroupItem).toHaveProp('header', 'some-repository');
    });

    it('renders a ListGroupItem with description inside', () => {
        const wrapper = mount(<RepoRow repo={repo} key={repo.name} />);
        const listGroupItem = wrapper.find(ListGroupItem);

        expect(listGroupItem).toIncludeText('Some description goes here.');
    });

    it('renders a ListGroupItem with last update time', () => {
        const wrapper = mount(<RepoRow repo={repo} key={repo.name} />);
        const listGroupItem = wrapper.find(ListGroupItem).find('span.small');

        expect(listGroupItem).toContainReact(<TimeAgo date='2016-12-16T19:48:55Z' />);
    });
});
