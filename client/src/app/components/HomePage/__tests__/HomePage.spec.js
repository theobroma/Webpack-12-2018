import React from 'react';
import { shallow } from 'enzyme';
import HomePage from 'components/HomePage';

describe('<HomePage />', () => {
  it('HomePage', () => {
    const component = shallow(<HomePage />);

    expect(component).toMatchSnapshot();
  });
});
