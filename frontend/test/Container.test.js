import React from 'react';
import { shallow } from 'enzyme';

import Container from "../components/Container";

describe('Container', () => {
    
    test("Component renders", () => {
        const wrapper = shallow(<Container />);
        expect(wrapper.find('div')).toHaveLength(1);
    })

    xtest('Should set the children properly', () => {
        const children = "children";
        const wrapper = shallow(<Container children={children} />);
        const childrenElement = wrapper.find();
        expect()
    });
});