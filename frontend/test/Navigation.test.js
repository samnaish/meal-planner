import React from 'react';
import { shallow } from 'enzyme';

import Navigation from "../components/Navigation";
import NavigationLinks from "../components/NavigationLinks";

describe('Navigation Component', () => {

    test("should render correctly", () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(NavigationLinks)).toHaveLength(1);
    })

})