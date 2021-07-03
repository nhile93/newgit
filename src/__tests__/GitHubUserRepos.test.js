import React from 'react';
import { shallow } from 'enzyme';

import GitHubUserRepos from '../Utils/GitHubUserRepos';

it('renders without crashing', () => {
  shallow(<GitHubUserRepos />);
});
