import React from 'react';
import { shallow } from 'enzyme';

import Dishlist from "../components/Dishlist";

describe("Dishlist", () => {

    test("Component renders", () => {
        const wrapper = shallow(<Dishlist />);
        expect(wrapper.find('.dish')).toHaveLength(1);
        expect(wrapper.find('.dish__image')).toHaveLength(1);
        expect(wrapper.find('.dish__info')).toHaveLength(1);
    })

    

})