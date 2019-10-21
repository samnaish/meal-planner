import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../components/Layout';

describe("Layout", () => {

    test("should render correctly", () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find('.app-container')).toHaveLength(1);
        expect(wrapper.find('.content')).toHaveLength(1);
    })

    xtest("should set the children property", () => {
        const children = "prop";
        const wrapper = shallow(<Layout />)
        const childrenElement = wrapper.find('.content');
        expect(childrenElement.text()).toBe(children);
    })
})