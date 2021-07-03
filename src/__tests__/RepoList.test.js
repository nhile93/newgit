import React from 'react';
import { shallow } from 'enzyme';

import RepoListHeader from '../parts/header/RepoListHeader';
import RepoList from '../components/RepoList';
import RepoRow from '../components/RepoRow';

describe('RepoList', () => {
    const repos = [
        { "name": "some-repository" },
        { "name": "some-other-repository" }
    ];

    it('renders without crashing when list is empty', () => {
        shallow(<RepoList />);
    });

    it('renders the right number of rows', () => {
        const wrapper = shallow(<RepoList repos={repos} />);
        const rows = wrapper.find(RepoRow);

        expect(rows.length).toBe(2);
    });

    it('renders only "top" rows', () => {
        const aLotOfRepos = [
            { "name": "repo 1" },
            { "name": "repo 2" },
            { "name": "repo 3" },
            { "name": "repo 4" },
            { "name": "repo 5" },
            { "name": "repo 6" },
        ];
        const wrapper = shallow(<RepoList repos={aLotOfRepos} top={3} />);
        const rows = wrapper.find(RepoRow);

        expect(rows.length).toBe(3);
    });

    it('renders the rows properly', () => {
        const wrapper = shallow(<RepoList repos={repos} />);

        expect(wrapper.find(RepoRow).first()).toHaveProp('repo', repos[0]);
        expect(wrapper.find(RepoRow).last()).toHaveProp('repo', repos[1]);
    });

    it('contains the list header', () => {
        const wrapper = shallow(<RepoList repos={repos} top={42} />);
        const repoListHeader = wrapper.find(RepoListHeader);

        expect(repoListHeader).toBeDefined();
        expect(repoListHeader).toHaveProp('repos', repos);
        expect(repoListHeader).toHaveProp('top', 42);
        expect(repoListHeader).toHaveProp('onSortChange');
    });

});
