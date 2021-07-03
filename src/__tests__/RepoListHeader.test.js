import React from 'react';
import { shallow } from 'enzyme';
import RepoListHeader from '../parts/header/RepoListHeader';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('RepoListHeader', () => {
    var repos = [ "some-repository", "some-other-repository" ];

    it('renders without crashing when list is empty', () => {
        shallow(<RepoListHeader />);
    });

    it('renders the number of repos found', () => {
        const wrapper = shallow(<RepoListHeader repos={repos} />);
        expect(wrapper.find('p')).toHaveText('Found 2 repositories.');
    });

    it('renders the number of repos found with the value of "top" property, when provided', () => {
        const wrapper = shallow(<RepoListHeader repos={repos} top={3} />);
        expect(wrapper.find('p')).toHaveText('Found 2 repositories. Showing top 3.');
    });

});
