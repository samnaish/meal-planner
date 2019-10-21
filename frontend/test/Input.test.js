import React from 'react';
import { shallow } from 'enzyme';

import Input from '../components/Input';

describe("Input", () => {

    test("Component should render", () => {
        const wrapper = shallow(<Input />);
        expect(wrapper.find('.input__ingredient')).toHaveLength(1);
        expect(wrapper.find('.input__label')).toHaveLength(2);
        expect(wrapper.find('.input__box')).toHaveLength(1);
        expect(wrapper.find('.input__measurement')).toHaveLength(1);
        expect(wrapper.find('.input__option-box')).toHaveLength(1);
    });

    xtest("Set Component id", () => {
        const dummyId = 1;
        const wrapper = shallow(<Input id={dummyId} />);
        const idElement = wrapper.find('.input__box');
        expect(idElement.text()).toBeLessThanOrEqual(1);
    });
})