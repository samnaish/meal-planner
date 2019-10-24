 import React from 'react';
import { shallow } from 'enzyme';

import IngredientInput from '../components/IngredientInput';

describe("Input", () => {

    test("Component should render", () => {
        const wrapper = shallow(<IngredientInput />);
        expect(wrapper.find('.input__ingredient')).toHaveLength(1);
        expect(wrapper.find('.input__label')).toHaveLength(2);
        expect(wrapper.find('.input__box')).toHaveLength(1);
        expect(wrapper.find('.input__measurement')).toHaveLength(1);
        expect(wrapper.find('.input__option-box')).toHaveLength(1);
    });

    test("sets id on the label and input field", () => {
        const dummyId = 1;
        const wrapper = shallow(<IngredientInput id={dummyId} />);
        expect(wrapper.find('.input__box').prop('id')).toEqual(`input-${dummyId}`);
        expect(wrapper.find('.input__ingredient .input__label').prop('htmlFor')).toEqual(`input-${dummyId}`);
    });
})