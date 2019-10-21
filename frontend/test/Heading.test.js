import React from 'react';
import { shallow } from 'enzyme';

import Heading from "../components/Heading";

describe("Heading", () => {

    test("Component renders", () => {
        const wrapper = shallow(<Heading />);
        expect(wrapper.find('h3')).toHaveLength(1);
    });
});