import React from 'react';
import { shallow } from 'enzyme';
import Store from './pages/Store'

describe('<Store />', () => {
  it('should render start page correctly', () => {
    const wrapper = shallow(<Store />);
    expect(wrapper.find(Store).length).toBe(1);
  });
});

