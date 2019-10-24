import React from "react";
import { shallow } from 'enzyme';

import Search from "../components/Search";

describe('Search', () => {
    
    test('Component renders', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find(".search__bar-container")).toHaveLength(1);
        expect(wrapper.find(".search__bar")).toHaveLength(1);
        expect(wrapper.find(".search__button")).toHaveLength(1);
    });
});