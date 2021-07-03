import React from 'react';
import { shallow } from 'enzyme';
import UserNotFound from '../components/UserNotFound';

it('renders without crashing', () => {
  shallow(<UserNotFound />);
});

it('contains The User Not Found!!!', () => {
    const wrapper = shallow(<UserNotFound />);

    expect(wrapper).toContainReact(<div>The User Not Found!!!</div>);
});